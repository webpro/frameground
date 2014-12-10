<script>
    var Store = require('./store');

    module.exports = {
        replace: true,
        methods: {
            deleteContact: function(contact) {
                Store.deleteContact(contact, function(contact) {
                    this.$dispatch('DELETE_CONTACT_SUCCESS');
                }.bind(this));
            }
        }
    }
</script>

<template>
    <tr>
        <td>
            <a href="#/contacts/{{id}}">{{name}}</a>
        </td>
        <td>
            <a href="#/contacts/{{id}}/edit"><i class="fa fa-edit"></i></a>
        </td>
        <td>
            <button class="button-warning pure-button" v-on="click: deleteContact(this)">
                <i class="fa fa-remove"></i>
            </button>
        </td>
    </tr>
</template>
