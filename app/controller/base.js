function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = class extends think.Controller {
    __before() {
        var _this = this;

        return _asyncToGenerator(function* () {
            const config = yield think.model("config").getList();
            _this.assign("site", config.site);

            const user = yield _this.model("user").cache("user").find();
            _this.assign("user", JSON.stringify(user));
            const recent = yield _this.getRecent();
            _this.assign("recent", JSON.stringify(recent));
            _this.assign("title", "");
        })();
    }
    getRecent() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            const content = yield _this2.model("content").where({ status: 99, type: "post" }).cache("recent_content").limit(5).order("create_time desc").fieldReverse("content,markdown").select();
            const comment = yield _this2.model("comment").cache("recent_comment").alias("comment").join({
                table: "content",
                joint: "left",
                as: "content",
                on: ["content_id", "id"]
            }).join({
                table: "meta",
                join: "left",
                as: "category",
                on: ["content.category_id", "id"]
            }).where({ "comment.status": 99 }).field("comment.*,content.slug,content.category_id,category.slug as category").limit(5).order("comment.create_time desc").select();
            return { content, comment };
        })();
    }
};
//# sourceMappingURL=base.js.map