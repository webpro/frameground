var Backbone = require('backbone'),
    $ = require('jquery'),
    ContactList = require('./ContactList'),
    ContactDetails = require('./ContactDetails'),
    ContactCreate = require('./ContactCreate'),
    ContactEdit = require('./ContactEdit');

module.exports = Backbone.View.extend({

    el: '#ContactList',

    view: null,

    initialize: function() {
        this.on('show:contactList', this.showView.bind(this, ContactList));
        this.on('show:contactDetails', this.showView.bind(this, ContactDetails));
        this.on('show:contactCreate', this.showView.bind(this, ContactCreate));
        this.on('show:contactEdit', this.showView.bind(this, ContactEdit));
    },

    showView: function(View, params) {

        if(this.view) {
            this.view.off();
            this.view.remove();
        }

        this.view = new View({
            el: $('<div/>').appendTo(this.$el),
            params: params
        });

        this.view.on('all', this.navigate, this);

    },

    navigate: function(type) {
        switch(type) {
            case 'SAVE_CONTACT_SUCCESS':
            case 'UPDATE_CONTACT_SUCCESS':
                this.router.navigate('contacts', {trigger: true});
                break;
            default:
                break;
        }
    }
});
