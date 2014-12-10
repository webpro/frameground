var $ = require('jquery'),
    Backbone = require('backbone'),
    App = require('./views/app'),
    Router = require('./router');

Backbone.$ = $;

new Router({
    view: new App()
});

Backbone.history.start();
