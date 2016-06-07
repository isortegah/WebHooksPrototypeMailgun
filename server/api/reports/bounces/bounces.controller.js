'use strict'

var mailgun = require('./../../utils/mailgun');



exports.postReport = function (req , res){
    
    mailgun.get('/events',{ event : [ 'dropped'], limit : 100}, function (error, body) {
        res.status(200).json(body);
        res.end();
    }).then(function(data){
        var items = data.items;
        items.forEach(function(data){
            console.log(data.envelope);
        })
    })
    
};