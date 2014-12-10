var request = require('superagent'),
    ContactListConstants = require('../constants/ConactListConstants'),
    AppDispatcher = require('../dispatcher/AppDispatcher');

var host = 'http://frameground.webpro.nl';

module.exports = {

    getContacts: function() {

        request.get(host + '/contacts')
            .end(function(error, result) {
                AppDispatcher.handleServerAction({
                    type: ContactListConstants.REQUEST_CONTACTS_SUCCESS,
                    rawNodes: result.body.contacts
                });
            });
    },

    createContact: function(contact, cb) {

        request.post(host + '/contacts')
            .send(contact)
            .end(function(error, result) {
                AppDispatcher.handleServerAction({
                    type: ContactListConstants.SAVE_CONTACT_SUCCESS,
                    rawNode: result.body
                });
                if(cb) {
                    cb(result.body)
                }
            });
    },

    updateContact: function(contact, cb) {

        request.put(host + '/contacts/' + contact.id)
            .send(contact)
            .end(function(error, result) {
                AppDispatcher.handleServerAction({
                    type: ContactListConstants.UPDATE_CONTACT_SUCCESS,
                    rawNode: contact
                });
                if(cb) {
                    cb(contact)
                }
            });
    },

    deleteContact: function(contact, cb) {

        request.del(host + '/contacts/' + contact.id)
            .end(function(error, result) {
                AppDispatcher.handleServerAction({
                    type: ContactListConstants.DELETE_CONTACT_SUCCESS,
                    rawNode: contact
                });
                if(cb) {
                    cb(contact)
                }
            });
    }

};
