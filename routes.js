'use strict'

module.exports = function(app){
    global.app = app;
    
    //Sección de rutas
    app.use('/api/bounces', require('./server/api/webhooks/bounces'));
    app.use('/api/opened', require('./server/api/webhooks/opened'));
    app.use('/api/clicked', require('./server/api/webhooks/clicked'));
    app.use('/api/delivery', require('./server/api/webhooks/delivery'));
    app.use('/api/dropped', require('./server/api/webhooks/dropped'));
    app.use('/api/spam', require('./server/api/webhooks/spam'));
    app.use('/api/unsubscribes', require('./server/api/webhooks/unsubscribes'));
    
    //Sección de rutas reportes
    app.use('/api/report/bounces', require('./server/api/reports/bounces'));
}