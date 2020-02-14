<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUpper | to-lowercase}}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <filter-list></filter-list>
        </div>    
    </div>
</template>

<script>
import { fruitMixin } from '@/mixins/fruitMixin.js'

import FilteredList from './FilteredList.vue'

    export default {
        mixins: [fruitMixin], 
        components:{
            'filter-list': FilteredList
        },
        data() {
            return {
            text: 'Hello There!'
            }
        },
        filters: {
            toUpper(value) {
                return value.toUpperCase();
            }
        }
    }
</script>

<style>

</style>
