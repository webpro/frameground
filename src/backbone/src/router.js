var Backbone = require('backbone');

module.exports = Backbone.Router.extend({

    initialize: function(opts) {
        this.appView = opts.view;
    },

    routes: {
        "": "contactList",
        "contacts": "contactList"
    },

    contactList: function() {
        this.appView.trigger('show:contactList');
    }

});
