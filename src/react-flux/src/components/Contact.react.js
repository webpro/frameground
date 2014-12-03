var React = require('react'),
    ReactPropTypes = React.PropTypes;

var Contact = React.createClass({

    propTypes: {
        contact: ReactPropTypes.object.isRequired
    },

    render: function() {

        var contact = this.props.contact;

        var url = {
            details: '#/contacts/' + contact.id,
            edit: '#/contacts/' + contact.id + '/edit'
        };

        return (
            <tr key={contact.id}>
                <td>
                    <a href={url.details}>{contact.name}</a>
                </td>
                <td>
                    <a href={url.edit}>
                        <i className="fa fa-edit"></i>
                    </a>
                </td>
                <td>
                    <button className="button-warning pure-button">
                        <i className="fa fa-remove"></i>
                    </button>
                </td>
            </tr>
        );
    }
});

module.exports = Contact;
