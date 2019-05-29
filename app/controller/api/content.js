function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const BaseRest = require("../rest.js");

module.exports = class extends BaseRest {
    getAction() {
        var _this = this;

        return _asyncToGenerator(function* () {
            let data;
            const params = {};
            if (_this.id) {
                params["id"] = _this.id;
                data = yield _this.modelInstance.where(params).find();
                if (!_this.userInfo) {
                    _this.modelInstance.where(params).increament("view");
                }
                return _this.success(data);
            }
            const type = _this.get("type") || "default";
            // 归档
            if (type === "archives") {
                data = yield _this.modelInstance.where({ status: 99 }).order("create_time desc").fieldReverse("content,markdown").select();
                return _this.success(data);
            }
            // 热门文章
            if (type === "hot") {
                data = yield _this.modelInstance.where({ status: 99 }).order("view desc").limit(10).field("title,slug,view").select();
                return _this.success(data);
            }
            // 总览数据
            if (type === "summary") {
                data = {};
                data["view"] = yield _this.modelInstance.where({ status: 99 }).sum("view");
                data["count"] = yield _this.modelInstance.where({ status: 99 }).count();
                data["comments"] = yield _this.model("comment").where({ status: 99 }).count();
                return _this.success(data);
            }
            if (type === "recent") {
                const recent = {
                    content: think.cache("recent_content"),
                    comment: think.cache("recent_comment")
                };
                return { recent };
            }
            // 是否获取全部
            const all = _this.get("all");
            // if (!all || think.isEmpty(this.userInfo)) {
            if (!all) {
                params.status = 99;
            }
            // 关键词
            const key = _this.get("key");
            if (key) {
                params["title|description"] = ["like", `%${key}%`];
            }
            const status = _this.get("status");
            if (status) {
                params.status = status;
            }
            // 内容类型
            const contentType = _this.get("contentType") || "post";
            params["type"] = contentType;
            // 页码
            const page = _this.get("page") || 1;
            // 每页显示数量
            const pageSize = _this.get("pageSize") || 5;
            data = yield _this.modelInstance.where(params).page(page, pageSize).order("create_time desc").fieldReverse("content,markdown").countSelect();
            return _this.success(data);
        })();
    }
    putAction() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            if (!_this2.id) {
                return _this2.fail(1001, "文章不存在");
            }
        })();
    }
    postAction() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            const userInfo = _this3.userInfo;
            const createTime = _this3.post("date");
            let publishTime = null;
            if (_this3.post("status") != 1) {
                publishTime = createTime;
            }
            const data = {
                user_id: userInfo.id,
                title: _this3.post("title"),
                category_id: _this3.post("category_id"),
                slug: _this3.post("slug"),
                status: _this3.post("status"),
                markdown: _this3.post("markdown"),
                content: _this3.post("content"),
                tag: _this3.post("tag"),
                type: _this3.post("type"),
                thumb: _this3.post("thumb") || "",
                publish_time: publishTime,
                view: 0,
                like: 0,
                recommend: _this3.post("recommend"),
                // create_time: createTime,
                modify_time: createTime
            };
            if (_this3.id) {
                data.id = _this3.post("id");
                Object.keys(data).forEach(function (val) {
                    if (!data[val]) {
                        delete data[val];
                    }
                });
                const res = yield _this3.modelInstance.save(data);
                yield _this3.hook("contentUpdate", data);
                if (res) {
                    _this3.success({ id: _this3.id }, "修改成功!");
                } else {
                    return _this3.fail(1000, "修改失败");
                }
            } else {
                data["create_time"] = createTime;
                const id = yield _this3.modelInstance.insert(data);
                if (id) {
                    data.id = id;
                    _this3.hook("contentCreate", data);
                    _this3.success({ id }, "添加成功!");
                } else {
                    return _this3.fail(1000, "添加失败");
                }
            }
        })();
    }
    deleteAction() {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            if (!_this4.id) {
                return _this4.fail(1001, "文章不存在");
            }
            const oldContent = yield _this4.modelInstance.where({ id: _this4.id }).find();
            // oldContent.tag.forEach(val => {});
            for (const item of oldContent.tag) {
                yield think.model("meta").where({ id: item.id }).decrement("count");
            }
            const affectedRows = yield _this4.modelInstance.where({ id: _this4.id }).delete();
            if (affectedRows) {
                _this4.hook("contentDelete", { id: _this4.id });
                return _this4.success(affectedRows);
            } else {
                _this4.fail(1000, "删除失败");
            }
        })();
    }
};