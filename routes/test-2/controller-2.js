var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {route: '/test-2/controller-2/'});
});

router.get('/route-1', function (req, res, next) {
    res.render('index', {route: '/test-2/controller-2/route-1/'});
});

router.get('/route-2', function (req, res, next) {
    res.render('index', {route: '/test-2/controller-2/route-2/'});
});

module.exports = router;
