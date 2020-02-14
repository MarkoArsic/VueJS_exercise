<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change name</button>
        <p>Name is {{name}}</p>   <!-- display value from custom emitted event -->
        <p>Age is: {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- proslejuje se name i resetFn u UserDetail.vue kao PROPs -->
                <app-user-detail 
                :name="name" 
                @nameWasReseted="name = $event"
                :resetFn="resetName"
                :userAge='age'
                ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge='age' @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        data (){
            return{
                name: 'Max',
                age: 27
            }
        },
        methods: {
            changeName() {
                this.name = 'Anna'
            },
            resetName() {
                this.name = 'Max'
            }
        }

    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
