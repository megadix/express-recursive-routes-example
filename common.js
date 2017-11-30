let routesTable = [];

module.exports.init = function (routes) {
    routes.forEach(route => routesTable.push(route[1]));
};

module.exports.handler = function (req, res, next) {
    res.render('index', {scenario: process.env.SCENARIO || 'default', route: req.baseUrl, routesTable});
};