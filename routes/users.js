var express = require('express');
var router = express.Router();
var common = require('../common');

/* GET users listing. */
router.get('/', common.handler);
router.post('/', common.handler);

module.exports = router;
