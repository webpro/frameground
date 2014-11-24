var BreadcrumbsPrototype = Object.create(HTMLElement.prototype);

BreadcrumbsPrototype.createdCallback = function() {
    window.addEventListener('hashchange', this.render.bind(this));
    this.render();
};

BreadcrumbsPrototype.attachedCallback = function() {};
BreadcrumbsPrototype.detachedCallback = function() {};
BreadcrumbsPrototype.attributeChangedCallback = function(attributeName) {};

BreadcrumbsPrototype.render = function() {
    this.innerHTML = this.getBreadcrumbs().map(function(crumb, index, crumbs) {
        var last = index === crumbs.length - 1;
        return '<span>' +
            (last ? '' : '<a href="#' + crumb.path + '">') +
            crumb.name +
            (last ? '' : '</a>') +
            '</span>';
    }).join(' / ');
};

BreadcrumbsPrototype.getBreadcrumbs = function() {
    return location.hash.replace(/^#/, '').split('/')
        .filter(function(item) {
            return item;
        })
        .map(function(item, index, items) {
            return {
                name: item,
                path: '/' + (items.slice(0, index + 1)).join('/')
            }
        });
};

document.registerElement('app-breadcrumbs', {
    prototype: BreadcrumbsPrototype
});
