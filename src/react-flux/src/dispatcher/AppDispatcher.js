var Dispatcher = require('flux').Dispatcher,
    assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {

    handleServerAction: function(action) {
        this.dispatch({
            source: 'SERVER_ACTION',
            action: action
        });
    },

    handleViewAction: function(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }

});

module.exports = AppDispatcher;
