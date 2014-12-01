import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {

    this.resource('contacts', function() {

        this.route('details', {path: '/:id'});

        this.route('edit', {path: '/:id/edit'});

        this.route('create', {path: '/create'});

    });

});

export default Router;
