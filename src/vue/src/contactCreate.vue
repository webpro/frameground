<script>
    var Store = require('./store');

    module.exports = {
        data: function() {
            return {
                contact: {}
            };
        },
        methods: {
            save: function(contact) {
                Store.createContact(contact, function() {
                    window.location.hash = '/contacts';
                }.bind(this));
            }
        }
    };
</script>

<template src="./form.html"/>