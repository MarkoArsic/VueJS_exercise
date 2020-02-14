<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input class="form-control" type='text' v-model="user.username">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" type='email'  v-model="user.email">
                </div>
                <button @click="submitIT" class="btn btn-primary">Submit</button>
                <hr>
                <button @click="getData" class="btn btn-primary">Get Data</button>
                <br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="u in users">
                        {{u.username}} - {{u.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users:[]
            }
        },
        methods: {
            submitIT(){
                this.axios.post('https://vuejs-http-b7ac7.firebaseio.com/users.json', this.user)
                .then((response) => {
                console.log(response.data)
                }, ((error) => {
                    console.log(error);
                }));
            },
            getData(){
                const self = this;
                this.axios.get('https://vuejs-http-b7ac7.firebaseio.com/users.json')
                .then((response) => {
                    this.users = response.data;
                console.log(response.data)
                }, ((error) => {
                    console.log(error);
                }));
            }
        }

    }
</script>

<style>
</style>
