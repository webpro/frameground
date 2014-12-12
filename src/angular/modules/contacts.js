angular.module('contacts', ['services.contacts']).config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/contacts', {
            templateUrl: 'templates/contact.tpl.html'
        })
        .when('/contacts/create', {
            templateUrl: 'templates/contactEdit.tpl.html',
            controller: 'ContactCreateCtrl'
        })
        .when('/contacts/:contactId', {
            templateUrl: 'templates/contactDetails.tpl.html',
            controller: 'ContactDetailCtrl'
        })
        .when('/contacts/:contactId/edit', {
            templateUrl: 'templates/contactEdit.tpl.html',
            controller: 'ContactEditCtrl'
        })

}]).controller('ContactListCtrl', ['$scope', '$location', 'services.contacts', function($scope, $location, Contacts) {

    $scope.contacts = Contacts.query();
    $scope.orderProp = 'name';

    $scope.delete = function(contact) {
        contact.$delete().then(function() {
            $location.path('/contacts');
        });
    }

}]).controller('ContactCreateCtrl', ['$scope', '$location', 'services.contacts', function($scope, $location, Contacts) {

    $scope.submitText = 'Create';

    $scope.save = function(contact) {
        Contacts.create(contact).$promise.then(function() {
            $location.path('/contacts');
        });
    }

}]).controller('ContactDetailCtrl', ['$scope', '$routeParams', 'services.contacts', function($scope, $routeParams, Contacts) {

    $scope.contact = Contacts.get({ id: $routeParams.contactId });

}]).controller('ContactEditCtrl', ['$scope', '$routeParams', '$location', 'services.contacts', function($scope, $routeParams, $location, Contacts) {

    $scope.contact = Contacts.get({ id: $routeParams.contactId });
    $scope.submitText = 'Update';

    $scope.save = function(contact) {
        contact.$edit().then(function() {
            $location.path('/contacts');
        })
    }
}]);
