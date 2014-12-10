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
            }
        }

    };
</script>

<template>
    <div>
        <dl>
            <dt>{{contact.name}}</dt>
            <dd>{{contact.email}}</dd>
            <dd>{{contact.phone}}</dd>
        </dl>
        <a href="#/contacts/{{contact.id}}/edit" class="pure-button pure-button-primary">Edit</a>
    </div>
</template>
