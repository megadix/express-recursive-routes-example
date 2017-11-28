var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {route: '/test-1/'});
});

router.get('/index-1', function (req, res, next) {
    res.render('index', {route: '/test-1/index-1'});
});

router.get('/index-2', function (req, res, next) {
    res.render('index', {route: '/test-1/index-2'});
});

module.exports = router;
