<template>
    <div class="container">
        <app-header :maxQuotes="maxQuotes" :quoteAdded="quoteAdded"></app-header>
        <app-newquote :maxQuotes="maxQuotes" :quoteAdded="quoteAdded"></app-newquote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid> <!--listen to custom event from quote grid(no need to pass (index))-->
        <app-footer></app-footer>
        <div  style="height: 700px">

            <p id="qwe">down scroolll</p>
        </div>
    </div>
</template>

<script>

import { deleteBus } from '@/main';
import { quoteBus } from '@/main';
import QuoteGrid from '@/components/quotes/quoteGrid'
import Header from '@/components/quotes/heading'
import Footer from '@/components/quotes/footer'
import NewQuote from '@/components/quotes/newQuote'

    export default {
       data(){
           return {
               quotes: [],
               maxQuotes: 10,
               quoteAdded: 0
           }
       },
       components: {
           appQuoteGrid: QuoteGrid,
           appHeader: Header,
           appFooter: Footer,
           appNewquote: NewQuote
       },
       created(){
            quoteBus.$on('newQuote', (newQuote)=> {
                this.quotes.unshift(newQuote);
                this.quoteAdded += 1;
             })
            // deleteBus.$on('quoteDeleted', (index)=> {
            //     this.quotes.splice(index, 1);
            //     this.quoteAdded -= 1;
            // })
        },
        methods: {
            deleteQuote(index){
                this.quotes.splice(index, 1);
                this.quoteAdded -= 1;
            }
        }
    }

</script>

<style>
</style>
