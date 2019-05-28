module.exports = [
    [/\/api\/(\w+)(?:\/(.*))?/, "api/:1?id=:2", "rest"],
    [/\/font\/(\w+)\/(\w+)/, ":1/:2"]
];
