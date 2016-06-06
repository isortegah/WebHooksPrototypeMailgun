'use_strict'
var express = require('express');
var controller = require('./dropped.controller');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/', urlencodedParser, controller.postEvento);
module.exports = router;