var Backbone = require('backbone'),
    Contacts = require('../models/contacts'),
    ContactView = require('./contact'),
    template = require('../templates/contactList.html');

module.exports = Backbone.View.extend({

    template: template,

    initialize: function() {
        this.collection = new Contacts();
        this.listenTo(this.collection, 'sync', this.render);
        this.collection.fetch();
    },

    render: function() {
        this.$el.html(this.template());
        this.$body = this.$('tbody');
        this.collection.each(this.renderContact, this);
        return this;
    },

    renderContact: function(model) {
        this.$body.append(new ContactView({model: model}).render().$el);
    }
});
