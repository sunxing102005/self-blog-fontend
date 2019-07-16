// 生产环境配置
const path = require("path");
exports.model = {
    mysql: {
        database: "blog",
        // host: '127.0.0.1',
        // port: '',
        // user: 'root',
        // password: 'mx102005',
        prefix: "sx_",
        encoding: "utf8",
        host: "172.16.125.21",
        port: 3306,
        user: "root",
        password: "mx102005",
        dateStrings: true
    }
};

exports.view = {
    common: {
        viewPath: path.join(think.ROOT_PATH, "/view")
    }
};
//# sourceMappingURL=adapter.production.js.map