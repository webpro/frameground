
;define("frameground-ember/app", 
  ["ember","ember/resolver","ember/load-initializers","frameground-ember/config/environment","ember-data","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];
    var DS = __dependency5__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
        modulePrefix: config.modulePrefix,
        podModulePrefix: config.podModulePrefix,
        Resolver: Resolver,
        ApplicationAdapter: DS.RESTAdapter.extend({
            host: 'http://frameground.webpro.nl'
        })
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
;define("frameground-ember/controllers/contact", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({});
  });
;define("frameground-ember/controllers/contacts", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ArrayController.extend({});
  });
;define("frameground-ember/controllers/contacts/create", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({
        needs: ['contact'],
        actions: {
            save: function(contact) {
                contact.save();
                this.transitionToRoute('contacts');
            }
        }
    });
  });
;define("frameground-ember/controllers/contacts/details", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({
        needs: ['contact']
    });
  });
;define("frameground-ember/controllers/contacts/edit", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({
        needs: ['contact'],
        actions: {
            save: function() {
                this.get('model').save();
                this.transitionToRoute('contacts');
            }
        }
    });
  });
;define("frameground-ember/controllers/contacts/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ArrayController.extend({
        needs: ['contacts'],
        sortProperties: ['name'],
        sortAscending: true,
        actions: {
            "delete": function(contact) {
                contact.deleteRecord();
                contact.save();
                this.transitionToRoute('contacts');
            }
        }
    });
  });
;define("frameground-ember/initializers/export-application-global", 
  ["ember","frameground-ember/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
;define("frameground-ember/models/contact", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    var attr = DS.attr;

    __exports__["default"] = DS.Model.extend({
        name: attr('string'),
        email: attr('string'),
        phone: attr('string')
    });
  });
;define("frameground-ember/router", 
  ["ember","frameground-ember/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

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

    __exports__["default"] = Router;
  });
;define("frameground-ember/routes/contact", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
        model: function(params) {
            return this.store.find('contacts', params.id);
        }
    });
  });
;define("frameground-ember/routes/contacts", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
        model: function() {
            return this.store.find('contact');
        }
    });
  });
;define("frameground-ember/routes/contacts/create", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
        model: function() {
            return this.store.createRecord('contact');
        }
    });
  });
;define("frameground-ember/routes/contacts/details", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
        model: function(params) {
            return this.store.find('contact', params.id);
        }
    });
  });
;define("frameground-ember/routes/contacts/edit", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
        model: function(params) {
            return this.store.find('contact', params.id);
        }
    });
  });
;define("frameground-ember/routes/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
        beforeModel: function(){
            this.transitionTo('contacts');
        }
    });
  });
;define("frameground-ember/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("<app-breadcrumbs></app-breadcrumbs>\n\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
;define("frameground-ember/templates/contacts", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("<div class=\"pure-g\">\n    <div class=\"pure-u-1-3\">\n        ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </div>\n    <div class=\"pure-u-2-3\"></div>\n</div>");
      return buffer;
      
    });
  });
;define("frameground-ember/templates/contacts/create", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push("<form class=\"pure-form pure-form-aligned\">\n    <fieldset>\n        <div class=\"pure-control-group\">\n            <label for=\"name\">Username</label>\n            ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("name"),
        'placeholder': ("Username")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        </div>\n\n        <div class=\"pure-control-group\">\n            <label for=\"email\">Email</label>\n            ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("email"),
        'placeholder': ("Email")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        </div>\n\n        <div class=\"pure-control-group\">\n            <label for=\"phone\">Phone</label>\n            ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("phone"),
        'placeholder': ("Phone")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        </div>\n\n        <div class=\"pure-controls\">\n            <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", "model", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"pure-button pure-button-primary\">Create</button>\n        </div>\n    </fieldset>\n</form>\n");
      return buffer;
      
    });
  });
;define("frameground-ember/templates/contacts/details", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("Edit");
      }

      data.buffer.push("<dl>\n    <dt>");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</dt>\n    <dd>");
      stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</dd>\n    <dd>");
      stack1 = helpers._triageMustache.call(depth0, "phone", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</dd>\n</dl>\n\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("pure-button pure-button-primary")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "contacts.edit", "model", options) : helperMissing.call(depth0, "link-to", "contacts.edit", "model", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      
    });
  });
;define("frameground-ember/templates/contacts/edit", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push("<form class=\"pure-form pure-form-aligned\">\n    <fieldset>\n        <div class=\"pure-control-group\">\n            <label for=\"name\">Username</label>\n            ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("name")
      },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        </div>\n\n        <div class=\"pure-control-group\">\n            <label for=\"email\">Email</label>\n            ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("email")
      },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        </div>\n\n        <div class=\"pure-control-group\">\n            <label for=\"phone\">Phone</label>\n            ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("phone")
      },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        </div>\n\n        <div class=\"pure-controls\">\n            <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", "contact", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"pure-button pure-button-primary\">Save</button>\n        </div>\n    </fieldset>\n</form>\n");
      return buffer;
      
    });
  });
;define("frameground-ember/templates/contacts/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        <tr>\n            <td>\n                ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "contacts.details", "contact", options) : helperMissing.call(depth0, "link-to", "contacts.details", "contact", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n            </td>\n            <td>\n                ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "contacts.edit", "contact", options) : helperMissing.call(depth0, "link-to", "contacts.edit", "contact", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n            </td>\n            <td>\n                <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "delete", "contact", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"button-warning pure-button\">\n                    <i class=\"fa fa-remove\"></i>\n                </button>\n            </td>\n        </tr>\n        ");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n                    ");
      stack1 = helpers._triageMustache.call(depth0, "contact.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n                ");
      return buffer;
      }

    function program4(depth0,data) {
      
      
      data.buffer.push("\n                    <i class=\"fa fa-edit\"></i>\n                ");
      }

    function program6(depth0,data) {
      
      
      data.buffer.push("Create contact");
      }

      data.buffer.push("<table class=\"pure-table pure-table-striped contact-list\">\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th></th>\n            <th></th>\n        </tr>\n    </thead>\n\n    <tbody>\n        ");
      stack1 = helpers.each.call(depth0, "contact", "in", "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </tbody>\n</table>\n\n");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("pure-button pure-button-primary")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "contacts.create", options) : helperMissing.call(depth0, "link-to", "contacts.create", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      
    });
  });
;define("frameground-ember/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/controllers/contact.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/contact.js should pass jshint', function() { 
      ok(true, 'controllers/contact.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/controllers/contacts.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/contacts.js should pass jshint', function() { 
      ok(true, 'controllers/contacts.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/controllers/contacts/create.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/contacts');
    test('controllers/contacts/create.js should pass jshint', function() { 
      ok(true, 'controllers/contacts/create.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/controllers/contacts/details.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/contacts');
    test('controllers/contacts/details.js should pass jshint', function() { 
      ok(true, 'controllers/contacts/details.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/controllers/contacts/edit.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/contacts');
    test('controllers/contacts/edit.js should pass jshint', function() { 
      ok(true, 'controllers/contacts/edit.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/controllers/contacts/index.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/contacts');
    test('controllers/contacts/index.js should pass jshint', function() { 
      ok(true, 'controllers/contacts/index.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/frameground-ember/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - frameground-ember/tests/helpers');
    test('frameground-ember/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'frameground-ember/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/frameground-ember/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - frameground-ember/tests/helpers');
    test('frameground-ember/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'frameground-ember/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/frameground-ember/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - frameground-ember/tests');
    test('frameground-ember/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'frameground-ember/tests/test-helper.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/helpers/resolver", 
  ["ember/resolver","frameground-ember/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
;define("frameground-ember/tests/helpers/start-app", 
  ["ember","frameground-ember/app","frameground-ember/router","frameground-ember/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var App;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Router.reopen({
        location: 'none'
      });

      Ember.run(function() {
        App = Application.create(attributes);
        App.setupForTesting();
        App.injectTestHelpers();
      });

      App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

      return App;
    }
  });
;define("frameground-ember/tests/models/contact.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/contact.js should pass jshint', function() { 
      ok(true, 'models/contact.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/routes/contact.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/contact.js should pass jshint', function() { 
      ok(true, 'routes/contact.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/routes/contacts.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/contacts.js should pass jshint', function() { 
      ok(true, 'routes/contacts.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/routes/contacts/create.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes/contacts');
    test('routes/contacts/create.js should pass jshint', function() { 
      ok(true, 'routes/contacts/create.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/routes/contacts/details.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes/contacts');
    test('routes/contacts/details.js should pass jshint', function() { 
      ok(true, 'routes/contacts/details.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/routes/contacts/edit.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes/contacts');
    test('routes/contacts/edit.js should pass jshint', function() { 
      ok(true, 'routes/contacts/edit.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/routes/index.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/index.js should pass jshint', function() { 
      ok(true, 'routes/index.js should pass jshint.'); 
    });
  });
;define("frameground-ember/tests/test-helper", 
  ["frameground-ember/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
/* jshint ignore:start */

define('frameground-ember/config/environment', ['ember'], function(Ember) {
  var prefix = 'frameground-ember';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */


});

if (runningTests) {
  require('frameground-ember/tests/test-helper');
} else {
  require('frameground-ember/app')['default'].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
