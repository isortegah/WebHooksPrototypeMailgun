require('dotenv').config();
var express = require('express');
var http = require('http');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

app.use(bodyParser.json({limit: '50mb'}));
require('./routes')(app);

http.createServer(app).listen(port);
console.log('Magic happens on port ' + port);