var Backbone = require('backbone'),
    ContactList = require('./ContactList');

module.exports = Backbone.View.extend({
    el: '#ContactList',
    view: null,
    initialize: function() {
        this.on('show:contactList', this.showView.bind(this, ContactList), this);
    },
    showView: function(View) {
        this.view && this.view.remove();
        this.view = new View({
            el: this.$('.app-view')
        });
    }
});
