var React = require('react'),
    ReactRouter = require('react-router'),
    RouteHandler = ReactRouter.RouteHandler,
    ContactStore = require('../stores/ContactStore');

var ContactListApp = React.createClass({

    componentDidMount: function() {
        ContactStore.init();
    },

    render: function() {

        return (
            <div className="pure-g">
                <div className="pure-u-1-3">
                    <RouteHandler/>
                </div>
                <div className="pure-u-2-3"></div>
            </div>
        );
    }

});

module.exports = ContactListApp;
