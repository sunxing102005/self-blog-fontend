function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const BaseRest = require('../rest.js');

module.exports = class extends BaseRest {
  getAction() {
    var _this = this;

    return _asyncToGenerator(function* () {
      let data = {};
      if (_this.id) {
        data = _this.modelInstance.where({ id: _this.id }).find();
        return _this.sucess(data);
      }
      const type = _this.get('type') || 'category';
      data = yield _this.modelInstance.where({ type }).order('sort desc').select();
      return _this.success(data);
    })();
  }
};