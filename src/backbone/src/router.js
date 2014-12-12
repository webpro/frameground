var Backbone = require('backbone');

module.exports = Backbone.Router.extend({

    initialize: function(opts) {
        this.appView = opts.view;
    },

    routes: {
        '': contactList,
        'contacts': contactList,
        'contacts/create': contactCreate,
        'contacts/:id': contactDetails,
        'contacts/:id/edit': contactEdit
    }

});

function contactList() {
    this.appView.trigger('show:contactList');
}

function contactCreate() {
    this.appView.trigger('show:contactCreate');
}

function contactDetails(id) {
    this.appView.trigger('show:contactDetails', {id: id});
}

function contactEdit(id) {
    this.appView.trigger('show:contactEdit', {id: id});
}
