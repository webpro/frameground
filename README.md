# JS Framework Playground

## Goals

The main goal of this project is to try various frontend JS frameworks, and get a feeling for what can be accomplished with any framework in areas, including:

* Developer experience & learning curve
* Framework best practices
* Testability
* Tooling & Workflow
* Device & Browser support
* Performance
    * Footprint/size/boot
    * Play well with server-side rendering
    * Lazy-load modules
* Accessibility
* Web Components integration
* Support for "offline first" apps
* Support for responsive and "mobile first" apps

If a framework doesn't support something out of the box, a sensible solution will be used (e.g. standard plugin, add-on, etc), e.g. for templating, routing, Ajax.

## Frameworks

Framework | Setup | Render List | Use XHR/API | Routing | CRUD | Tests
:--|:-:|:-:|:-:|:-:|:-:|:-:
Angular | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ⬓ | ✘
Backbone | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘
Ember (CLI) | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ⬓ | ✘
React + Flux | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘
Vue.js | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ⬓ | ✘

Possible additions:

* Polymer
* Ampersand.js

## Application

The application consists of a main "Contact List" module, which has an initial view of contacts and has CRUD features. Additionally there is a "breadcrumbs" Web Component (shared across the apps).

The apps are using an actual endpoint ([example](http://frameground.webpro.nl/contacts)), but this API is a dummy, read-only server (using [dyson](http://webpro.github.io/dyson/)).

## Installation

    git clone https://github.com/webpro/frameground.git
    cd frameground
    npm install

### Angular
    
No installation needed, just point a webserver somewhere at [localhost](http://localhost/path/to/frameground/src/angular/).

### Backbone, React+Flux, Vue



    cd src/backbone # Or src/react etc.
    npm install
    npm start

Point a webserver somewhere at [localhost](http://localhost/path/to/frameground/src/react-flux/).

### Ember

You'll need to have [Ember CLI](http://www.ember-cli.com/) installed (`npm install -g ember-cli`).

    cd src/ember
    npm install
    bower install
    npm start

The application runs at [localhost:4200](http://localhost:4200).

## Running instances

You can also run the hosted applications:

* [Angular](http://webpro.github.io/frameground/src/angular/)
* [Backbone](http://webpro.github.io/frameground/src/backbone/)
* [Ember](http://webpro.github.io/frameground/src/ember/dist/)
* [React + Flux](http://webpro.github.io/frameground/src/react-flux/)
* [Vue.js](http://webpro.github.io/frameground/src/vue/)

## License

[MIT](http://webpro.mit-license.org/)
