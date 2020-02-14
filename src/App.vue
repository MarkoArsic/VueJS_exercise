<template>
  <div id="app">
    <app-navbar></app-navbar>
    <transition name="slide" mode="out-in">
    <router-view/>
    </transition>
  </div>
</template>
<script>
import Navbar from './components/navbar'
export default {
  components:{
    'app-navbar': Navbar
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
