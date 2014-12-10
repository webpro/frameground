var Backbone = require('backbone');

var host = 'http://frameground.webpro.nl';

module.exports = Backbone.Model.extend({
    urlRoot: host + '/contacts',
    parse: function(response) {
        return response.contact || response;
    }
});
