var EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    ContactListConstants = require('../constants/ConactListConstants'),
    AppDispatcher = require('../dispatcher/AppDispatcher');

var CHANGE_EVENT = 'change';

var contacts = [];

var ContactStore = assign({}, EventEmitter.prototype, {

    getAll: function() {
        return contacts;
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
            contacts = action.rawNodes;
            ContactStore.emitChange();
            break;

        default:
            return true;
    }

    return true;
});

module.exports = ContactStore;
