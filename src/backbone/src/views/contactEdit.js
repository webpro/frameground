var Backbone = require('backbone'),
    _ = require('underscore'),
    Contact = require('../models/contact'),
    template = require('../templates/contactForm.html');

module.exports = Backbone.View.extend({

    template: template,

    events: {
        'click button': 'onSubmit'
    },

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
    },

    onSubmit: function(event) {

        event.preventDefault();

        var values = this.$('form').serializeArray(),
            contact = _.object(_.pluck(values, 'name'), _.pluck(values, 'value'));

        this.model.set(contact);

        this.model.save(null, {
            success: function() {
                this.trigger('UPDATE_CONTACT_SUCCESS');
            }.bind(this),
            error: function() {}
        });
    }
});
