var React = require('react'),
    ContactStore = require('../stores/ContactStore'),
    ContactList = require('./ContactList.react');

function getContactState() {
    return {
        contacts: ContactStore.getAll()
    };
}

var ContactListApp = React.createClass({

    getInitialState: function() {
        return getContactState();
    },

    componentDidMount: function() {
        ContactStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ContactStore.removeChangeListener(this._onChange);
    },

    render: function() {

        return (
            <div className="pure-g">
                <div className="pure-u-1-3">
                    <ContactList contacts={this.state.contacts} />
                    <a href="#/contacts/create" className="pure-button pure-button-primary">Create contact</a>
                </div>
                <div className="pure-u-2-3"></div>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getContactState());
    }

});

module.exports = ContactListApp;
