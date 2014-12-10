var Vue = require('vue'),
    director = require('director'),
    App = new Vue(require('./app.vue'));

Vue.config.debug = true;

App.$mount('#ContactList');

var routes = {
    '/': contactList,
    '/contacts': contactList,
    '/contacts/create': contactCreate,
    '/contacts/:id': contactDetails,
    '/contacts/:id/edit': contactEdit
};

function contactList() {
    App.view = 'contactList';
}

function contactCreate() {
    App.view = 'contactCreate';
}

function contactDetails(id) {
    App.params.currentContactId = id;
    App.view = 'contactDetails';
}

function contactEdit(id) {
    App.params.currentContactId = id;
    App.view = 'contactEdit';

}

var router = new director.Router(routes);

router.init('/contacts');
