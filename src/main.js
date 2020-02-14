import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {store} from './store/store'

router.beforeEach((to, from, next) => {
  console.log('global before each');
  // to and from are both route objects. must call `next`.
  next();
})

Vue.use(VueAxios, axios)

Vue.config.productionTip = true

// global filter
Vue.filter('to-lowercase', function (value) {
   return value.toLowerCase();
});
 
// Global mixin
Vue.mixin({
  created(){
    console.log('Global mixin created');
  }
})

// global directive
Vue.directive('highlight', {
  bind(el, binding, vnode){
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
     } else {
       el.style.color = binding.value;
     }    
    }, delay);

  }
});

export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age);
    }
  }
});

export const serverBus = new Vue();
export const quoteBus = new Vue();
export const deleteBus = new Vue();


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

