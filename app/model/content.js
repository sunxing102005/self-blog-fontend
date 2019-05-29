function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = class extends think.Model {
    // 模型关联
    get relation() {
        return {
            category: {
                type: think.Model.BELONG_TO,
                model: "meta",
                key: "category_id",
                fKey: "id",
                field: "id,name,slug,description,count"
            },
            tag: {
                type: think.Model.MANY_TO_MANY,
                model: "meta",
                rModel: "relationship",
                rfKey: "meta_id",
                key: "id",
                fKey: "content_id",
                field: "id,name,slug,description,count"
            },
            comment: {
                type: think.Model.HAS_MANY,
                key: "id",
                fKey: "content_id",
                where: "status=99",
                order: "create_time desc"
            },
            user: {
                type: think.Model.BELONG_TO,
                model: "user",
                key: "user_id",
                fKey: "id",
                field: "id,username,email,qq,github,weibo,zhihu"
            }
        };
    }

    // 添加文章
    insert(data) {
        var _this = this;

        return _asyncToGenerator(function* () {
            const tags = Array.from(data.tag);
            data = _this.parseContent(data);
            delete data.tag;
            const id = yield _this.add(data);
            const relation = [];
            tags.forEach(function (val) {
                relation.push({
                    content_id: id,
                    meta_id: val
                });
            });
            think.model("relationship").addMany(relation);
            // 更新文章数量
            _this.updateCount(data.category_id, tags);
            return id;
        })();
    }
    save(data) {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            const tags = data.tag;
            data = _this2.parseContent(data);
            delete data.tag;
            const relation = [];

            const oldContent = yield _this2.where({ id: data.id }).find();
            if (oldContent.category_id != data.category_id) {
                // 修改文章分类
                think.model("meta").where({ id: oldContent.category_id }).decrement("count");
            }
            const oldTags = oldContent.tag;
            oldTags.forEach(function (val) {
                if (tags.indexOf(val.id) == -1) {
                    think.model("meta").where({ id: val.id }).decrement("count");
                }
            });
            tags.forEach(function (val) {
                relation.push({
                    content_id: data.id,
                    meta_id: val
                });
            });
            yield think.model("relationship").where({ content_id: data.id }).delete();
            if (relation.length > 0) think.model("relationship").addMany(relation);
            const res = yield _this2.where({ id: data.id }).update(data);
            if (res) {
                _this2.updateCount(data.category_id, tags);
            }
            return res;
        })();
    }
    // 处理内容，生成文章简介
    parseContent(data) {
        // 描述处理
        if (data.content.indexOf("<!--more-->") > -1) {
            data.description = data.content.split("<!--more-->")[0]; // 写文章内容时，description部分是<!--more-->前面的部分,要自己写
        } else {
            data.description = "";
        }
        // 唯一标识处理
        if (!data.slug) {
            data.slug = think.md5(new Date());
        }
        return data;
    }
    updateCount(categoryId, tagIds) {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            const cateCount = yield _this3.where({ category_id: categoryId }).count();
            think.model("meta").where({ id: categoryId }).update({ count: cateCount });
            for (const id of tagIds) {
                const count = yield think.model("relationship").where({ meta_id: id }).count();
                think.model("meta").where({ id }).update({ count });
            }
        })();
    }
};
//# sourceMappingURL=content.js.map