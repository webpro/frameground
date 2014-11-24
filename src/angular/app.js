var app = angular.module('ContactList', [
    'ngRoute',
    'contacts',
    'services.contacts'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/contacts'
    });
}]);

app.controller('AppCtrl', function(){});
