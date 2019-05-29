function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const assert = require("assert");

module.exports = class extends think.Controller {
    static get _REST() {
        return true;
    }

    constructor(ctx) {
        super(ctx);
        this.resource = this.getResource();
        this.id = this.getId();
        assert(think.isFunction(this.model), "this.model must be a function");
        this.modelInstance = this.model(this.resource);
    }
    __before() {
        var _this = this;

        return _asyncToGenerator(function* () {
            _this.header("Access-Control-Allow-Origin", "*");
            // console.log('_before', 'fffff');
            _this.userInfo = yield _this.session("userInfo").catch(function () {});
            // console.log('userinfo', this.userInfo);
            const isAllowedMethod = _this.isMethod("GET");
            const isAllowedResource = _this.resource === "login";
            const isLogin = !(think.isEmpty(_this.userInfo) || typeof _this.userInfo.TokenExpiredError !== "undefined" || _this.userInfo.name && _this.userInfo.name.indexOf("Error") != -1);

            if (!isAllowedResource && !isLogin && !isAllowedMethod) {
                return _this.ctx.throw(401, "请登录后操作");
            }
        })();
    }
    /**
     * get resource
     * @return {String} [resource name]
     */
    getResource() {
        return this.ctx.controller.split("/").pop();
    }
    getId() {
        const id = this.get("id");
        if (id && (think.isString(id) || think.isNumber(id))) {
            return id;
        }
        const last = this.ctx.path.split("/").slice(-1)[0];
        if (last !== this.resource) {
            return last;
        }
        return "";
    }
    getAction() {
        var _this2 = this;

        return _asyncToGenerator(function* () {
            let data;
            if (_this2.id) {
                const pk = _this2.modelInstance.pk;
                data = yield _this2.modelInstance.where({ [pk]: _this2.id }).find();
                return _this2.success(data);
            }
            data = yield _this2.modelInstance.select();
            return _this2.success(data);
        })();
    }
    /**
     * put resource
     * @return {Promise} []
     */
    postAction() {
        var _this3 = this;

        return _asyncToGenerator(function* () {
            const pk = _this3.modelInstance.pk;
            const data = _this3.post();
            delete data[pk];
            if (think.isEmpty(data)) {
                return _this3.fail("data is empty");
            }
            const insertId = yield _this3.modelInstance.add(data);
            return _this3.success({ id: insertId });
        })();
    }
    /**
     * delete resource
     * @return {Promise} []
     */
    deleteAction() {
        var _this4 = this;

        return _asyncToGenerator(function* () {
            if (!_this4.id) {
                return _this4.fail("params error");
            }
            const pk = _this4.modelInstance.pk;
            const rows = yield _this4.modelInstance.where({ [pk]: _this4.id }).delete();
            return _this4.success({ affectedRows: rows });
        })();
    }
    /**
     * update resource
     * @return {Promise} []
     */
    putAction() {
        var _this5 = this;

        return _asyncToGenerator(function* () {
            if (!_this5.id) {
                return _this5.fail("params error");
            }
            const pk = _this5.modelInstance.pk;
            const data = _this5.post();
            data[pk] = _this5.id; // rewrite data[pk] forbidden data[pk] !== this.id
            if (think.isEmpty(data)) {
                return _this5.fail("data is empty");
            }
            const rows = yield _this5.modelInstance.where({ [pk]: _this5.id }).update(data);
            return _this5.success({ affectedRows: rows });
        })();
    }
    __call() {}
};
//# sourceMappingURL=rest.js.map