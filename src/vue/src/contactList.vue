<script>
    var request = require('superagent'),
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
        compiled: function () {
            this.getContacts();
        },
        methods: {
            getContacts: function() {
                request.get('http://localhost:3000/contacts', function(res) {
                    this.contacts = res.body.contacts;
                }.bind(this));
            }
        }
    }
</script>

<template>
    <div>
        <table class="pure-table pure-table-striped contact-list">
            <thead>
                <tr>
                    <th>Name</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody v-repeat="contacts | orderBy 'name'" v-component="contact"></tbody>
        </table>
    </div>
</template>
