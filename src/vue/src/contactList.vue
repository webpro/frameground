<script>
    var Store = require('./store'),
        contact = require('./contact.vue');

    module.exports = {
        replace: true,
        components: {
            contact: contact
        },
        data: function() {
            return {
                contacts: []
            };
        },
        created: function() {
            this.$on('DELETE_CONTACT_SUCCESS', this.getContacts.bind(this));
        },
        attached: function() {
            this.getContacts();
        },
        methods: {
            getContacts: function() {
                Store.getContacts(function(contacts) {
                    this.contacts = contacts;
                }.bind(this));
            }
        }
    }
</script>

<template>
    <div>
        <a href="#/contacts/create" class="pure-button pure-button-primary">Create contact</a>
        <table class="pure-table pure-table-striped contact-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-repeat="contacts | orderBy 'name'" v-component="contact"></tr>
            </tbody>
        </table>
    </div>
</template>
