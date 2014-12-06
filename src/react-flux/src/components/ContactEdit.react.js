var React = require('react'),
    Router = require('react-router'),
    ReactPropTypes = React.PropTypes,
    ContactStore = require('../stores/ContactStore'),
    ContactFormMixin = require('./ContactForm.react');

var ContactEdit = React.createClass({

    mixins: [ContactFormMixin, Router.State, Router.Navigation],

    getStateFromStore: function() {
        var id = this.getParams().id;
        return ContactStore.getContact(id);
    },

    getInitialState: function() {
        return this.getStateFromStore();
    },

    componentDidMount: function() {
        ContactStore.addChangeListener(this.updateContact);
    },

    componentWillUnmount: function() {
        ContactStore.removeChangeListener(this.updateContact);
    },

    updateContact: function() {
        this.setState(this.getStateFromStore());
    },

    saveContact: function(event) {

        event.preventDefault();

        var contact = this.state;

        ContactStore.updateContact(contact, function(contact) {
            this.transitionTo('contacts');
        }.bind(this));

    },

    onSubmit: function() {
        this.saveContact.apply(this, arguments);
    }
});

module.exports = ContactEdit;
