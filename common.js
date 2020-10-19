let routesTable = [];

module.exports.init = function (routes) {
    routesTable = routes;
};

module.exports.handler = function (req, res, next) {
    res.render('index', {
        scenario: process.env.SCENARIO || 'default',
        method: req.method,
        route: req.originalUrl,
        routesTable
    });
};
