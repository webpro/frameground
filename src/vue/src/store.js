var request = require('superagent'),
    host = 'http://frameground.webpro.nl',
    contacts = [];

module.exports = {

    getContacts: function(cb) {

        if(contacts.length) {
            cb(contacts);
            return;
        }

        request.get(host + '/contacts')
            .end(function(res) {
                contacts = res.body.contacts;
                if(cb) {
                    cb(contacts);
                }
            });
    },

    getContact: function(id, cb) {

        request.get(host + '/contacts/' + id)
            .end(function(res) {
                contacts[id] = res.body.contact;
                if(cb) {
                    cb(contacts[id]);
                }
            });
    },

    createContact: function(contact, cb) {

        request.post(host + '/contacts')
            .send(contact)
            .end(function(error, res) {
                var contact = res.body;
                contacts.push(contact);
                if(cb) {
                    cb(contact);
                }
            });
    },

    updateContact: function(contact, cb) {

        request.put(host + '/contacts/' + contact.id)
            .send(contact)
            .end(function() {
                if(cb) {
                    cb(contact)
                }
            });
    },

    deleteContact: function(contact, cb) {

        request.del(host + '/contacts/' + contact.id)
            .end(function() {
                contacts = contacts.filter(function(c) {
                    return c.id !== contact.id;
                });
                if(cb) {
                    cb(contact)
                }
            });
    }

};
