var React = require('react'),
    Router = require('react-router'),
    ReactPropTypes = React.PropTypes,
    ContactStore = require('../stores/ContactStore'),
    ContactFormMixin = require('./ContactForm.react');

var ContactCreate = React.createClass({

    mixins: [ContactFormMixin, Router.Navigation],

    createContact: function(event) {

        event.preventDefault();

        var contact = this.state;

        ContactStore.addContact(contact, function() {
            this.transitionTo('contacts');
        }.bind(this));

    },

    onSubmit: function() {
        this.createContact.apply(this, arguments);
    }
});

module.exports = ContactCreate;
