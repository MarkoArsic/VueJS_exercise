<template>
        <div>
            <h1>Filters & Mixins</h1>
                <hr>
            <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
        </div>
</template>

<script>
    import { fruitMixin } from '@/mixins/fruitMixin.js'
    export default {
        mixins: [fruitMixin],
        created() {
            console.log('created List')
        }
    }
</script>

<style>

</style>
