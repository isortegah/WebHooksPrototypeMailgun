var mailgun = require('mailgun-js')({apiKey: process.env.API_KEY, domain: 'mi.corpfolder.com'});
module.exports = mailgun;