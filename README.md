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
Ember (CLI) | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ⬓ | ✘
React + Flux | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘

Currently, I think this list includes interesting frameworks to add:

* Vue.js
* Polymer
* Ampersand.js
* Backbone

## Application

The application consists of a main "Contact List" module, which has an initial view of contacts and has CRUD features. Additionally there is a "breadcrumbs" Web Component (shared across the apps).

The apps are using an actual endpoint ([example](http://frameground.webpro.nl/contacts)), but this API is a dummy, read-only server (using [dyson](http://webpro.github.io/dyson/)).

## Installation

    git clone https://github.com/webpro/frameground.git
    cd frameground
    npm install

### Angular
    
Just point a webserver to http://localhost/path/to/frameground/src/angular/.

### Ember

You'll need to have [Ember CLI](http://www.ember-cli.com/) installed (`npm install -g ember-cli`).

    cd src/ember
    npm install
    bower install
    npm run start

The application runs at http://localhost:4200.

### React + Flux

    cd src/flux
    npm install
    npm start

Point a webserver at http://localhost/path/to/frameground/src/react-flux/.

## Running instances

You can also run the hosted applications:

* [Angular](http://webpro.github.io/frameground/src/angular/)
* [Ember](http://webpro.github.io/frameground/src/ember/dist/)
* [React + Flux](http://webpro.github.io/frameground/src/react-flux/)

## License

[MIT](http://webpro.mit-license.org/)
