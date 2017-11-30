var express = require('express');
var router = express.Router();
var common = require('../../common');

router.get('/', common.handler);

router.get('/index-1', common.handler);

router.get('/index-2', common.handler);

module.exports = router;
