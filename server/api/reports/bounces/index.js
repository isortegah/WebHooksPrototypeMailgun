'use_strict'
var express = require('express');
var bounces = require('./bounces.controller');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, bounces.postReport);
module.exports = router;