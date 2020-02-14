<template>
    <div class="container">
        <head-component></head-component>
        <hr>
        <div class="row">
            <servers />
            <server-details />
        </div>
        <hr>
        <footer-component></footer-component>
    </div>
</template>

<script>
import Header from '@/components/servers/header.vue';
import Footer from '@/components/servers/footer.vue';
import Servers from '@/components/servers/servers.vue';
import ServerDetails from '@/components/servers/serverDetails.vue';
    export default {
        components: {
        'head-component': Header,
        'footer-component': Footer,
        'servers': Servers,
        'server-details': ServerDetails
        }
    }
</script>

<style>

</style>
