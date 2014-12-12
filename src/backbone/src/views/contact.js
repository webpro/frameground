var Backbone = require('backbone'),
    template = require('../templates/contact.html');

module.exports = Backbone.View.extend({
    tagName: 'tr',
    template: template,
    events: {
        'click button.delete': 'onDelete'
    },
    render: function() {
        this.$el.html(this.template({
            contact: this.model.toJSON()
        }));
        return this;
    },
    onDelete: function(event) {
        this.model.destroy();
        this.off();
        this.remove();
    }
});
