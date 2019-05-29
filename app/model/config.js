function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = class extends think.Model {
  /**
     * 获取配置列表
     * @param  {String} type [description]
     * @return {[type]}      [description]
     */
  getList(type = '') {
    var _this = this;

    return _asyncToGenerator(function* () {
      const map = {};
      if (type) {
        map.type = type;
      }
      const list = yield _this.where(map).select();
      const data = {};
      for (const i in list) {
        data[list[i].name] = JSON.parse(list[i].value);
      }
      return data;
    })();
  }

  /**
     * 保存配置
     * @param  {[type]} name  [description]
     * @param  {[type]} value [description]
     * @return {[type]}       [description]
     */
  save(name, value) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      const data = {
        name: name,
        value: JSON.stringify(value)
      };
      return _this2.thenUpdate(data, { name: name });
    })();
  }
};
//# sourceMappingURL=config.js.map