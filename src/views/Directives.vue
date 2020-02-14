<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-In Directives</h1>
                <p v-text> v-text</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Color This v-highlight</p>
                <p v-local-highlight:background.delayed.blink="{mainColor: 'red', secondColor: 'green', delay: 500}">Color This v-highlight locally</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom V-ON</h1>
                <button v-customON:click="clicked" class="btn btn-primary">Click</button>
                <hr>
                <div style="width:100px; height:100px; background-color: lightgrey"
                    v-customON:mouseenter="mouseEnter"
                    v-customON:mouseleave="mouseLeave"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                  bind(el, binding, vnode){
                    //el.style.backgroundColor = 'green';
                    // el.style.backgroundColor = binding.value;
                    var delay = 0;
                        if (binding.modifiers['delayed']){
                            delay = 3000;
                        }
                        if(binding.modifiers['blink']){
                            let mainColor = binding.value.mainColor;
                            let secondColor = binding.value.secondColor;
                            let currentColor = mainColor;
                            setTimeout(() => {
                                setInterval(()=>{
                                    currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                    if(binding.arg == 'background') {
                                        el.style.backgroundColor = currentColor;
                                    } else {
                                        el.style.color = currentColor;
                                    }
                                }, binding.value.delay);   
                            }, delay);
                        } else {
                            setTimeout(() => {
                                if (binding.arg == 'background'){
                                    el.style.backgroundColor = binding.value.mainColor;
                                } else {
                                    el.style.color = binding.value.mainColor;
                                }    
                            }, delay);
                        }


                }
            },
            // execute a function on click
            'customON': {
                bind(el, binding) {
                //    el.onclick = function(){
                //        binding.value();
                //    } 
                const type = binding.arg;
                const fn = binding.value;
                el.addEventListener(type, fn);
                }
            }

        },
        methods: {
            clicked(){
                alert("clicked!")
            },
            mouseEnter(){
                console.log('Mouse entered!')
            },
            mouseLeave(){
                console.log('Mouse leaved!')
            }
        }
    }
</script>

<style>

</style>