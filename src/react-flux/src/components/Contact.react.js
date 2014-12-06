var React = require('react'),
    ReactPropTypes = React.PropTypes,
    Router = require('react-router'),
    Link = Router.Link,
    ContactStore = require('../stores/ContactStore');

var Contact = React.createClass({

    propTypes: {
        contact: ReactPropTypes.object.isRequired
    },

    deleteContact: function() {
        ContactStore.deleteContact(this.props.contact);
    },

    render: function() {

        var contact = this.props.contact;

        return (
            <tr key={contact.id}>
                <td>
                    <Link to="contactDetails" params={contact}>{contact.name}</Link>
                </td>
                <td>
                    <Link to="contactEdit" params={contact}>
                        <i className="fa fa-edit"></i>
                    </Link>
                </td>
                <td>
                    <button className="button-warning pure-button" onClick={this.deleteContact}>
                        <i className="fa fa-remove"></i>
                    </button>
                </td>
            </tr>
        );
    }
});

module.exports = Contact;
