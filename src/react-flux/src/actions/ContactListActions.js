var atomic = require('atomic')(global),
    ContactListConstants = require('../constants/ConactListConstants'),
    AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

    getContacts: function() {

        atomic.get('http://localhost:3000/contacts').success(function(result) {
            AppDispatcher.handleServerAction({
                type: ContactListConstants.REQUEST_CONTACTS_SUCCESS,
                rawNodes: result.contacts
            });
        });

    }

};