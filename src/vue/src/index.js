var Vue = require('vue'),
    director = require('director'),
    App = new Vue(require('./app.vue')),
    contactList = require('./contactList.vue');

Vue.component('contactList', contactList);

App.$mount('#ContactList');

var router = new director.Router();

router.on('/contacts', function() {
    App.view = 'contactList';
});

router.on('/', function() {
    App.view = 'contactList';
});

router.init('/contacts');
