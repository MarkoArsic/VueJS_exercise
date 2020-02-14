<template>
    <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key="index" @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>
<script>
import Quote from './quote.vue';
import { deleteBus } from '@/main';
export default {
    props: ['quotes'],
    components: {
        appQuote: Quote
    },
    methods: {
        deleteQuote(index){
            //deleteBus.$emit('quoteDeleted', index)
            this.$emit('quoteDeleted', index);
        }
    }
}
</script>
<style scoped>
div {
    margin-top: 5px;
}
</style>