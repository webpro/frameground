<template>
    <div className="pure-g">
        <div className="pure-u-1-3">
            <div v-component="{{view}}"></div>
        </div>
        <div className="pure-u-2-3"></div>
    </div>
</template>

<script>
    module.exports = {
        data: {
            view: 'contactList'
        }
    };
</script>
