var Backbone = require('backbone'),
    Contact = require('./contact');

var host = 'http://frameground.webpro.nl';

module.exports = Backbone.Collection.extend({
    model: Contact,
    url: host + '/contacts',
    parse: function(response) {
        return response.contacts;
    }
});
