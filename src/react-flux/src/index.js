var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes');

Router.run(routes, function (Handler, state) {
    var params = state.params;
    React.render(<Handler params={params}/>, document.getElementById('ContactList'));
});
