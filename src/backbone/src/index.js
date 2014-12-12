var $ = require('jquery'),
    Backbone = require('backbone'),
    App = require('./views/app'),
    Router = require('./router');

Backbone.$ = $;

var app = new App();

var router = new Router({
    view: app
});

app.router = router;

Backbone.history.start();
