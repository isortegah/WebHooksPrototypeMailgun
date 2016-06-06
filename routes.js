'use strict'

module.exports = function(app){
    global.app = app;
    
    //Sección de rutas
    app.use('/api/bounces', require('./server/api/bounces'));
    app.use('/api/opened', require('./server/api/opened'));
}