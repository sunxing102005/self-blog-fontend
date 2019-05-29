function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const Base = require("./base.js");
module.exports = class extends Base {
    listAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            const condition = {
                status: 99,
                type: "post"
            };
            const page = _this.get("page") || 1;
            const pageSize = _this.get("pageSize") || 5;
            const list = yield _this.model("content").where(condition).page(page, pageSize).fieldReverse("content,markdown").order("create_time desc").countSelect();
            return _this.success({ content: list });
        })();
    }
    listNoPageAction() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            const condition = {
                status: 99,
                type: "post"
            };
            let defaultOrderby = "create_time desc";
            let defaultFieldReverse = "markdown";
            let recommend = _this2.get("recommend");
            let orderby = _this2.get("orderby");
            let fieldReverse = _this2.get("fieldReverse");
            let category_id = _this2.get("category_id");
            category_id ? condition["category_id"] = category_id : "";
            !fieldReverse ? fieldReverse = defaultFieldReverse : "";
            recommend ? condition["recommend"] = recommend : "";
            orderby ? "" : orderby = defaultOrderby;
            const list = yield _this2.model("content").where(condition).fieldReverse(fieldReverse).order(orderby).select();
            return _this2.success({ content: list });
        })();
    }
    recentAction() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            const recent = {
                content: yield think.cache("recent_content"),
                comment: yield think.cache("recent_comment")
            };
            return _this3.success({ recent });
        })();
    }
    recentFiveBlogsAction() {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            const recent = yield _this4.getRecent();
            return _this4.success({ recent });
        })();
    }
    detailAction() {
        var _this5 = this;

        return _asyncToGenerator(function* () {
            const params = {
                // status: "99",
                // type: "post",
                slug: _this5.get("slug")
            };
            const content = yield _this5.model("content").where(params).find();
            // console.log("detail1", content);
            // if (think.isEmpty(content)) {
            //     return this.redirect("/");
            // }
            _this5.assign("content", content);
            _this5.assign("title", content.title);
            const replyTo = _this5.get("replyTo") || 0;
            _this5.assign("replyTo", replyTo);
            // 增加阅读量
            _this5.model("content").where(params).increment("view");
            return _this5.success({ content: content });
        })();
    }
    getBlogByIdAction() {
        var _this6 = this;

        return _asyncToGenerator(function* () {
            let defaultFieldReverse = "markdown";
            let fieldReverse = _this6.get("fieldReverse");
            !fieldReverse ? fieldReverse = defaultFieldReverse : "";
            const params = {
                id: _this6.get("id")
            };
            const content = yield _this6.model("content").where(params).fieldReverse(fieldReverse).find();
            _this6.assign("content", content);
            _this6.assign("title", content.title);
            const replyTo = _this6.get("replyTo") || 0;
            _this6.assign("replyTo", replyTo);
            // 增加阅读量
            _this6.model("content").where(params).increment("view");
            return _this6.success({ content: content });
        })();
    }
    getLastAndNextBlogAction() {
        var _this7 = this;

        return _asyncToGenerator(function* () {
            let date = _this7.post("date"); //当前博客
            let lastBlogSql = ` 
        select id,title from sx_content where abs(publish_time-str_to_date('${date}','%Y-%m-%d %T'))
         in( select min(abs(publish_time-str_to_date('${date}','%Y-%m-%d %T'))) from sx_content where status=99 
         and publish_time<'${date}' and type = 'post')
        `;
            let nextBlogSql = ` 
        select id,title from sx_content where abs(publish_time-str_to_date('${date}','%Y-%m-%d %T'))
        in( select min(abs(publish_time-str_to_date('${date}','%Y-%m-%d %T'))) from sx_content where status=99 
        and publish_time>'${date}' and type = 'post')
        `;
            let lastBlog = yield _this7.model().query(lastBlogSql);
            let nextBlog = yield _this7.model().query(nextBlogSql);
            _this7.success({ lastBlog, nextBlog });
        })();
    }
    changeLikesAction() {
        var _this8 = this;

        return _asyncToGenerator(function* () {
            let type = _this8.get("type"),
                id = _this8.get("id");
            if (type == "plus") {
                _this8.model("content").where({ id }).increment("like");
                return _this8.success({ msg: "喜欢+1！" });
            } else {
                _this8.model("content").where({ id }).decrement("like");
                return _this8.success({ msg: "取消喜欢" });
            }
        })();
    }
    commentAction() {
        var _this9 = this;

        return _asyncToGenerator(function* () {
            const params = {
                status: 99,
                slug: _this9.post("slug"),
                type: "post"
            };
            const content = yield _this9.model("content").where(params).find();
            if (think.isEmpty(content)) {
                return _this9.redirect("/");
            }
            const data = {
                content_id: content.id,
                author: _this9.post("author"),
                email: _this9.post("email"),
                url: _this9.post("url"),
                agent: _this9.header("User-Agent"),
                text: _this9.post("text"),
                status: 99,
                parent_id: _this9.post("parent_id"),
                create_time: new Date().getTime() / 1000
            };
            const insertId = yield _this9.model("comment").add(data);
            if (insertId) {
                _this9.success({ insertId });
            }
        })();
    }
};