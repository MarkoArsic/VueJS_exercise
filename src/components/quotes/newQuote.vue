<template>
<div class="row">
    <br>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3" style="text-align:left">
        <label for="comment">Quote:</label>
        <textarea class="form-control" rows="5" v-model="quote"></textarea>
    </div>
    <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
        <button @click.prevent="addQuote" type="button" class="btn btn-primary">Add Quote</button>
    </div>
</div>
</template>
<script>
import { quoteBus } from '@/main';
export default {
    props:{
        maxQuotes: Number,
        quoteAdded: Number
    }
    ,
    data(){
        return{
            quote: ''
        }
    },
    methods:{
        addQuote(){
            if(this.quoteAdded >= this.maxQuotes){
                alert('Max quote limit 10!');
            } else {
                quoteBus.$emit('newQuote', this.quote);
            }
            
        }
    }
}
</script>
<style scoped>

    div{
        padding-bottom: 10px;
    }
    span {
        text-align: left;
    }
</style>