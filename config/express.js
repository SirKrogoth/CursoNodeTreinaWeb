var express = require('express');
var load = require('express-load');
var bodyParcer = require('body-parser');

module.exports = function(){
    var app = express();

    app.set('port', 3000);
    app.use(express.static('./public'));
    app.use(bodyParcer.json());
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    load('models', {cwd: 'app'})
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}