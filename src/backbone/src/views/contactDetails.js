var Backbone = require('backbone'),
    _ = require('underscore'),
    Contact = require('../models/contact'),
    template = require('../templates/contactDetails.html');

module.exports = Backbone.View.extend({

    template: template,

    initialize: function(options) {
        this.model = new Contact({
            id: options.params.id
        });
        this.listenTo(this.model, 'sync', this.render);
        this.model.fetch();
    },

    render: function() {
        this.$el.html(this.template({
            contact: this.model.toJSON()
        }));
        return this;
    }
});
