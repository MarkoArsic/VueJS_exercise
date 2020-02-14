<template>

            <li class="list-group-item" style="cursor: pointer" @click="showDetails">
                Server #{{ server.id }}
            </li>
</template>
<script>
import { serverBus } from '@/main';
export default {
    props: ['server'],
    methods: {
        showDetails(){
            serverBus.$emit('server', this.server);
        }
    }
}
</script>
<style scoped>

</style>