var React = require('react'),
    ReactPropTypes = React.PropTypes,
    Contact = require('./Contact.react');

var ContactList = React.createClass({

    propTypes: {
        contacts: ReactPropTypes.array.isRequired
    },

    render: function() {

        if (this.props.contacts.length < 1) {
            return null;
        }

        var contacts = this.props.contacts.map(function(contact) {
            return <Contact key={contact.id} contact={contact} />
        });

        return (
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
        );
    }

});

module.exports = ContactList;
