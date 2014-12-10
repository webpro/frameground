<template>
    <div class="pure-g">
        <div class="pure-u-1-3">
            <div v-component="{{view}}" v-with="params:params" keep-alive></div>
        </div>
        <div class="pure-u-2-3"></div>
    </div>
</template>

<script>
    var contactList = require('./contactList.vue'),
        contactDetails = require('./contactDetails.vue'),
        contactEdit = require('./contactEdit.vue'),
        contactCreate = require('./contactCreate.vue');

    module.exports = {
        data: {
            view: 'contactList',
            params: {
                currentContactId: null
            }
        },
        components: {
            contactList: contactList,
            contactDetails: contactDetails,
            contactEdit: contactEdit,
            contactCreate: contactCreate
        }
    };
</script>
