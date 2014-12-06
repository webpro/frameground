var React = require('react'),
    Router = require('react-router'),
    Link = Router.Link,
    ReactPropTypes = React.PropTypes,
    ContactStore = require('../stores/ContactStore');

var Contact = React.createClass({

    mixins: [Router.State],

    getStateFromStore: function () {
        var id = this.getParams().id;
        return ContactStore.getContact(id)
    },

    getInitialState: function () {
        return this.getStateFromStore();
    },

    componentDidMount: function () {
        ContactStore.addChangeListener(this.updateContact);
    },

    componentWillUnmount: function () {
        ContactStore.removeChangeListener(this.updateContact);
    },

    componentWillReceiveProps: function () {
        this.setState(this.getStateFromStore());
    },

    updateContact: function () {
        this.setState(this.getStateFromStore());
    },

    render: function() {

        var contact = this.state || {};

        if(!contact.id) return null;

        return (
            <div>
                <dl>
                    <dt>{contact.name}</dt>
                    <dd>{contact.email}</dd>
                    <dd>{contact.phone}</dd>
                </dl>
                <Link to="contactEdit" params={contact} className="pure-button pure-button-primary">Edit</Link>
            </div>
        );
    }
});

module.exports = Contact;
