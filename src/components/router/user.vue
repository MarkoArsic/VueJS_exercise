<template>
<div>
    <h1>The User Page</h1>
    <hr>
    <button class="btn btn-success" @click="navigateToHome">Go to home</button>
    <div class="qwe">
        <h3>
            Nested router components
        </h3>
        <transition name="slide" mode="out-in">
            <router-view></router-view> 
        </transition>
    </div>
</div>


</template>
<script>
export default {
    methods: {
        navigateToHome(){
            this.$router.push('/home')
        }
    }
}
</script>
<style lang="css" scoped>
    .qwe {
        border: 1px solid green;
        margin-top: 20px;
    }
</style>