var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    ContactListConstants = require('../constants/ConactListConstants'),
    ContactListActions = require('../actions/ContactListActions'),
    AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'change';

var contacts = [];

var ContactStore = assign({}, EventEmitter.prototype, {

    init: function() {
        ContactListActions.getContacts();
    },

    getContact: function(id) {
        return contacts[id] || null;
    },

    getContacts: function() {
        return contacts;
    },

    _setContacts: function(data) {
        data.forEach(function (contact) {
            contacts[contact.id] = contact;
        });
        this.emitChange();
    },

    _setContact: function(id, contact) {
        contacts[id] = contact;
        this.emitChange();
    },

    _deleteContact: function(id) {
        delete contacts[id];
        this.emitChange();
    },

    addContact: function (contact, cb) {
        ContactListActions.createContact(contact, cb);
    },

    updateContact: function (contact, cb) {
        ContactListActions.updateContact(contact, cb);
    },

    deleteContact: function (contact, cb) {
        ContactListActions.deleteContact(contact, cb);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(payload) {

    var action = payload.action;

    switch (action.type) {

        case ContactListConstants.REQUEST_CONTACTS_SUCCESS:
            ContactStore._setContacts(action.rawNodes);
            break;

        case ContactListConstants.SAVE_CONTACT_SUCCESS:
            ContactStore._setContact(action.rawNode.id, action.rawNode);
            break;

        case ContactListConstants.UPDATE_CONTACT_SUCCESS:
            ContactStore._setContact(action.rawNode.id, action.rawNode);
            break;

        case ContactListConstants.DELETE_CONTACT_SUCCESS:
            ContactStore._deleteContact(action.rawNode.id, action.rawNode);
            break;

        default:
            return true;
    }

    return true;
});

module.exports = ContactStore;
