var express = require('express');
var router = express.Router();
var common = require('../common');

/* GET home page. */
router.get('/', common.handler);

module.exports = router;
