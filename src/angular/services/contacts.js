var host = 'http://frameground.webpro.nl';

angular.module('services.contacts', ['ngResource'])
    .factory('services.contacts', ['$resource', function($resource) {
        return $resource(host + '/contacts/:id', { id: '@id' }, {
            query: {
                method: 'GET',
                transformResponse: function(value) {
                    var data = JSON.parse(value);
                    return data.contacts;
                },
                isArray: true
            },
            get: {
                method: 'GET',
                transformResponse: function(value) {
                    var data = JSON.parse(value);
                    return data.contact;
                }
            },
            create: {
                method: 'POST'
            },
            edit: {
                method: 'PUT'
            },
            delete: {
                method: 'DELETE'
            }
        });
    }]
);
