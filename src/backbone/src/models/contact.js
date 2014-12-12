var Backbone = require('backbone');

var host = 'http://frameground.webpro.nl';

module.exports = Backbone.Model.extend({
    urlRoot: host + '/contacts',
    parse: function(response, options) {
        if (options.xhr.status === 204) return this.attributes;
        return response.contact || response;
    }
});
