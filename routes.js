'use strict'

module.exports = function(app){
    global.app = app;
    
    //Sección de rutas
    app.use('/api/bounces', require('./server/api/bounces'));
    app.use('/api/opened', require('./server/api/opened'));
    app.use('/api/clicked', require('./server/api/clicked'));
    app.use('/api/delivery', require('./server/api/delivery'));
    app.use('/api/dropped', require('./server/api/dropped'));
    app.use('/api/spam', require('./server/api/spam'));
    app.use('/api/spam', require('./server/api/unsubscribes'));
}