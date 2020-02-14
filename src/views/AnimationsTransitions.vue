<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br>
                <br>
                <button class="btn btn-primary" @click="show = !show">Alert</button>
                <br>
                <br> 
                <transition :name="alertAnimation">
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                <transition :name="alertAnimation" type="animation" appear>
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                <transition enter-active-class="animated bounce" leave-active-class="animated shake">
                    <div v-if="show" class="alert alert-info">This is some info</div>
                </transition>
                <br>
                <transition :name="alertAnimation" mode="out-in">
                    <div v-if="show" class="alert alert-info" key="info">This is some info</div>
                    <div v-else class="alert alert-warning" key="warning">This is some warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
                <br><br>
                <transition 
                @before-enter="beforeEnter" 
                @enter="enter" 
                @after-enter="afterEnter" 
                @enter-canceled="enterCancelled"
                
                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-canceled="leaveCancelled"
                :css="false">
                    <div style="width:300px; height: 100px; background-color: lightgreen" v-if="load"></div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="selectedComponent == 'app-success' ? selectedComponent = 'app-danger' : selectedComponent = 'app-success'">Toggle Component</button>
                <hr>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add item</button>
                <hr>
                
                    <ul class="list-group">
                        <transition-group name="slide">
                        <li :key="number" class="list-group-item" v-for="(number, index) in numbers" @click="removeItem(index)" style="cursor:pointer">{{ number }}</li>
                        </transition-group>
                    </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
import { setInterval } from 'timers';
import Danger from '@/components/animationTransitions/danger'
import Success from '@/components/animationTransitions/success'
    export default {
        data() {
            return {
                show: true,
                alertAnimation: 'fade',
                load: true,
                elWidth: 100,
                selectedComponent: 'app-success',
                numbers: [1,2,3,4,5]
            }
        },
        components: {
            'app-danger': Danger,
            'app-success': Success
        },
        methods: {
                beforeEnter(el) {
                    console.log('beforeEnter');
                    this.elWidth = 100;
                    el.style.width = this.elWidth + 'px';
                },
                enter(el, done) {
                    console.log('enter');
                    let round = 1;
                    const interval = setInterval(() => {
                        el.style.width = (this.elWidth  + round * 10) + 'px';
                        round++;
                        if(round > 20){
                            clearInterval(interval);
                            done();
                        }
                    }, 20);
                },
                afterEnter(el){
                    console.log('afterEnter');
                },
                enterCancelled (el){
                    console.log('enterCancelled');
                },
                beforeLeave(el) {
                    console.log('beforeLeave');
                    this.elWidth = 300; 
                    el.style.width = this.elWidth + 'px';
                },
                leave(el, done) {
                    console.log('leave');
                    let round = 1;
                    const interval = setInterval(() => {
                        el.style.width = (this.elWidth  - round * 10) + 'px';
                        round++;
                        if(round > 20){
                            clearInterval(interval);
                            done();
                        }
                    }, 20);
                },
                afterLeave(el) {
                    console.log('afterLeave');
                },
                leaveCancelled(el){
                    console.log('leaveCancelled');
                },
                addItem() {
                    const position = Math.floor(Math.random() * this.numbers.length);
                    this.numbers.splice(position, 0, this.numbers.length + 1);
                },
                removeItem(index) {
                    this.numbers.splice(index,1);
                }
            }
    }
</script>

<style>
 .fade-enter {
     opacity: 0;

 }
 .fade-enter-active {
     transition: opacity 1s;
 }
 /* .fade-leave {
     opacity: 1s;
 } */
 .fade-leave-active {
     transition: opacity 1s;
     opacity: 0;
 }
 .slide-enter {
     opacity: 0;
 }
 .slide-enter-active {
     animation: slide-in 1s ease-out forwards;
     transition: opacity .5s;
 }
 /* .slide-leave {

 } */
 .slide-leave-active {
     animation: slide-out 1s ease-out forwards;
     transition: opacity 1s;
     opacity:0;
     position: absolute;
 }
 .slide-move {
     transition: transform 1s;
 }
 @keyframes slide-in {
     from {
         transform: translateY(20px);
     }
     to {
         transform: translateY(0);

     }
 }
  @keyframes slide-out {
     from {
         transform: translateY(0);
     }
     to {
         transform: translateY(20px);

     }
 }

</style>
