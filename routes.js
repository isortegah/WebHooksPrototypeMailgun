'use strict'

module.exports = function(app){
    global.app = app;
    
    //Sección de rutas
    app.use('/api/bounces', require('./server/api/bounces'))
}