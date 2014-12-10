var React = require('react'),
    ContactStore = require('../stores/ContactStore'),
    Contact = require('./Contact.react'),
    Router = require('react-router'),
    Link = Router.Link;

function getContactState() {
    return {
        contacts: ContactStore.getContacts()
    };
}

var ContactList = React.createClass({

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

        if (this.state.contacts.length < 1) {
            return null;
        }

        var contacts = this.state.contacts.map(function(contact) {
            return <Contact key={contact.id} contact={contact} />
        });

        return (
            <div>
                <Link to="contactCreate" className="pure-button pure-button-primary">Create contact</Link>
                <table className="pure-table pure-table-striped contact-list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts}
                    </tbody>
                </table>
            </div>
        );
    },

    _onChange: function() {
        this.setState(getContactState());
    }

});

module.exports = ContactList;
