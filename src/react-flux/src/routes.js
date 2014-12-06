var React = require('react'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    DefaultRoute = ReactRouter.DefaultRoute,
    App = require('./components/ContactListApp.react'),
    ContactList = require('./components/ContactList.react'),
    ContactDetails = require('./components/ContactDetails.react'),
    ContactCreate = require('./components/ContactCreate.react'),
    ContactEdit = require('./components/ContactEdit.react');

module.exports = (
    <Route handler={App}>
        <DefaultRoute handler={ContactList}/>
        <Route name="contacts" path="/contacts" handler={ContactList}/>
        <Route name="contactEdit" path="/contacts/:id/edit" handler={ContactEdit}/>
        <Route name="contactCreate" path="/contacts/create" handler={ContactCreate}/>
        <Route name="contactDetails" path="/contacts/:id" handler={ContactDetails}/>
    </Route>
);
