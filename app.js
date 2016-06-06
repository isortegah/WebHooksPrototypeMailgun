require('dotenv').config();
var express = require('express');
var http = require('http');
var app = express();

var port = process.env.PORT || 3000;


http.createServer(app).listen(port);
console.log('Magic happens on port ' + port);