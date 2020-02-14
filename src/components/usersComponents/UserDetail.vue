<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Reset name</button>
        <!-- use resetFn from Parent -->
        <button @click="resetFn()">Reset name(propF)</button>
    </div>
</template>

<script>
import { eventBus } from '@/main';
export default {
        // props: ['name'], for validatin use object
        // props:{
        //     name: String
        // },
        // prima name prop kao svoju variablu
        props:{
            name: {
                type: String,
                required: true  
            },
            resetFn: Function,
            userAge: Number 
        },
        methods: {
            switchName(){
                return this.name.split("").reverse().join("");
            },
            resetName(){
                this.name = 'Max';
                // emmit custom event('eventName', value)
                this.$emit('nameWasReseted', this.name);
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age)=> {
                this.userAge = age;
            });
        }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
