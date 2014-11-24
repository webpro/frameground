var faker = require('faker');

var template = {
    id: function(params) {
        return params.id || parseInt(Math.random() * 99999, 10);
    },
    name: function() {
        return faker.name.findName()
    },
    email: function() {
        return faker.internet.email();
    },
    phone: function() {
        return faker.phone.phoneNumber();
    }
};

var contacts = {
    path: '/contacts',
    collection: true,
    size: 50,
    cache: true,
    template: template,
    container: {
        contacts: function(params, query, data) {
            return data;
        }
    }
};

var contact = {
    path: '/contacts/:id',
    template: template,
    container: {
        contact: function(params, query, data) {
            return data;
        }
    }
};

module.exports = [contacts, contact];
