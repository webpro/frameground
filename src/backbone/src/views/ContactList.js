var Backbone = require('backbone'),
    _ = require('underscore'),
    Contacts = require('../models/contacts'),
    template = require('../templates/contactList.html');

module.exports = Backbone.View.extend({
    collection: new Contacts(),
    template: template,
    initialize: function() {
        this.listenTo(this.collection, 'sync', this.render);
        this.collection.fetch();
    },
    render: function() {
        this.$el.html(this.template({
            contacts: this.collection.toJSON()
        }));
        return this;
    }
});
