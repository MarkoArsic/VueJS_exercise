<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote'">Quote</button>
                <button @click="selectedComponent = 'app-author'">Author</button>
                <button @click="selectedComponent = 'app-new'">New</button>
                    <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <p>Deafult component text</p>
                    </component>
                </keep-alive>

               <!-- <app-quote>
                   <h1 slot="title">{{ quoteTitle }} </h1>
                   <p slot="content">asdasdadasd asda dasda asd adas adassda </p>
               </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from '@/components/slot-dynComp/quote.vue';
import Author from '@/components/slot-dynComp/author.vue';
import New from '@/components/slot-dynComp/new.vue';

    export default {
        data() {
            return {
                quoteTitle: 'The Quote',
                selectedComponent: 'app-quote'
            }
        },
        components: {
            'app-quote': Quote,
            'app-author': Author,
            'app-new': New
        }
    }
    
</script>

<style>
</style>
