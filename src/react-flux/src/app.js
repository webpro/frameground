var React = require('react'),
    ContactListApp = require('./components/ContactListApp.react'),
    ContactListActions = require('./actions/ContactListActions');

ContactListActions.getContacts();

React.render(
    <ContactListApp />,
    document.getElementById('ContactList')
);
