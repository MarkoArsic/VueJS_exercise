<template>
    <div class="container">
        <h2>ROUTING</h2>    
        <div >
            <ul class="nav nav-tabs centered">
                <app-nav2></app-nav2> 
            </ul> 
        </div>
        <transition name="slide" mode="out-in">
            <router-view></router-view> 
        </transition>
    </div>
</template>

<script>
import Nav2 from '@/components/navbar2.vue'
    export default {
        components: {
            'app-nav2': Nav2
        }
    }
</script>

<style>

 .slide-leave-active {
     animation: slide-out 1s ease-out forwards;
     transition: opacity 1s ease;
     opacity:0;
     position: relative;
 }
 .slide-leave {
     opacity:1;
     transform: translateX(0);
 }
 .slide-enter-active {
     animation: slide-in 1s ease-out forwards;
 }

 @keyframes slide-in {
     0% {
         transform: translateY(-30px);
     }
     100% {
         transform: translateY(0);

     }
 }
  @keyframes slide-out {
     0% {
         transform: translateY(0);
     }
     100% {
         transform: translateY(-30px);

     }
 }
</style>
