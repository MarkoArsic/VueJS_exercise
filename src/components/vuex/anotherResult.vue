<template>
<div>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Number of clicks: {{ stringCounter }}</p>
    <p>Added computed: {{ ownComputed }}</p>
</div>

</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapGetters([
            'doubleCounter',
            'stringCounter'
            ]),
            ownComputed(){
                return 'our own computed';
            }
        }
    }
</script>