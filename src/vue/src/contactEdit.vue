<script>
    var Store = require('./store');

    module.exports = {
        data: function() {
            return {
                params: {
                    currentContactId: null
                },
                contact: {}
            };
        },
        attached: function() {
            this.getContact();
        },
        methods: {
            getContact: function() {
                Store.getContact(this.params.currentContactId, function(contact) {
                    this.contact = contact;
                }.bind(this))
            },
            save: function(contact) {
                Store.updateContact(contact, function() {
                    window.location.hash = '/contacts';
                }.bind(this));
            }
        }
    };
</script>

<template src="./contactForm.html"/>
