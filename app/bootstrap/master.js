function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const fs = require('fs');
think.beforeStartServer(_asyncToGenerator(function* () {
  // 压缩模板
  // think.logger.info("think.env", think.env);
  if (think.env === 'production') {
    if (!fs.existsSync(think.ROOT_PATH + '/runtime/view/')) {
      fs.mkdirSync(think.ROOT_PATH + '/runtime/view/');
    }
    var minify = require('html-minifier').minify;
    const views = fs.readdirSync(think.ROOT_PATH + '/view');

    views.forEach(function (val, index) {
      if (val.indexOf('.') > 0) {
        const data = fs.readFileSync(think.ROOT_PATH + '/view/' + val, 'utf8');
        const minifyData = minify(data, {
          removeComments: true,
          collapseWhitespace: true,
          minifyJS: true,
          minifyCSS: true
        });
        fs.writeFileSync(think.ROOT_PATH + '/runtime/view/' + val, minifyData);
      }
    });
  }
}));

// 设置prometheus metric
const client = require('prom-client');
const AggregatorRegistry = client.AggregatorRegistry;
const aggregatorRegistry = new AggregatorRegistry();

var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/prometheus', (() => {
  var _ref2 = _asyncToGenerator(function* (ctx, next) {
    const metrics = yield aggregatorRegistry.clusterMetrics();
    ctx.type = aggregatorRegistry.contentType;
    ctx.body = metrics;
  });

  return function (_x, _x2) {
    return _ref2.apply(this, arguments);
  };
})());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3005);
//# sourceMappingURL=master.js.map