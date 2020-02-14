<template>
    <div class="col-xs-12 col-sm-6">
        <span v-if="!server">
            <p>Please select server</p>
        </span>
        <span v-else>
            <p>SERVER ID: {{server.id}}</p> 
                <br>
            <p>SERVER STATUS: {{server.status}}</p>
        </span>
        <hr>
        <button @click="resetStatus">Set To Normal</button>

    </div>
</template>
<style scoped>
    
</style>
<script>
import { serverBus } from '@/main';
export default {
    data() {
        return {
            server: null
        }
    },
    created(){
        serverBus.$on('server', (server)=> {
                this.server = server;
            });
    },
    methods: {
        resetStatus(){
            this.server.status = 'Normal';
        }
    }
}
</script>
<style scoped>
p{
    display: flex;
    align-items: center;
    margin: auto auto;
}
    
</style>