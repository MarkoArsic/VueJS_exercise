<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-another></app-another>
                <app-counter></app-counter>
                 <hr>
                <app-anotherC></app-anotherC>
                <hr>
                <input type="text" v-model="value" @input="updateValue">
                <p>{{value}}</p>
            </div>    
        </div>
    </div>
</template>

<script>
    import Counter from '@/components/vuex/Counter.vue';
    import Result from '@/components/vuex/Result.vue';
    import anotherResult from '@/components/vuex/anotherResult.vue';
    import anotherCounter from '@/components/vuex/anotherCounter.vue';

    export default {
        components: {
            appCounter: Counter,
            appResult: Result,
            appAnother: anotherResult,
            appAnotherC: anotherCounter
        },
        computed: {
            value: {
                get(){
                    return this.$store.getters.value;
                },
                set(value){
                    this.$store.dispatch('updateValue', value);
                }  
            }
        },
        methods: {
            updateValue(event){
                this.$store.dispatch('updateValue', event.target.value);
            }
        }
    }
</script>

