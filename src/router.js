import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import ServerStatus from './views/ServerStatus.vue'
import Components from './views/Components.vue'
import ComponentsProject from './views/ComponentsProject'
import ColorTemplates from './views/ColorTemplates'
import Quotes from './views/QuotesApp'
import Forms from './views/Forms'
import Directives from './views/Directives'
import Filters from './views/FiltersAndMixins'
import AnimationsTransitions from './views/AnimationsTransitions.vue'
import QuizzApp from './views/QuizzApp.vue'
import Http from './views/HTTP.vue'
import RouterPage from './views/Router'
import HomeUser from './components/router/home'
//import User from './components/router/user'
//import UserStart from './components/router/userStart'
//import UserDetail from './components/router/userDetail'
// import UserEdit from './components/router/userEdit'

//------- LAZy LOADING -------grouping => 'user'//
const User = resolve => {
  require.ensure(['./components/router/user'], () => {
    resolve(require('./components/router/user'));
  }, 'user');
};
const UserStart = resolve => {
  require.ensure(['./components/router/userStart'], () => {
    resolve(require('./components/router/userStart'));
  },'user');
};
const UserDetail = resolve => {
  require.ensure(['./components/router/userDetail'], () => {
    resolve(require('./components/router/userDetail'));
  },'user');
};
const UserEdit = resolve => {
  require.ensure(['./components/router/userEdit.vue'], () => {
    resolve(require('./components/router/userEdit.vue'));
  },'user');
};
const Vuex = resolve => {
  require.ensure(['./views/Vuex.vue'], () => {
    resolve(require('./views/Vuex.vue'));
  });
};
//--------------------//
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from , savedPosition) {
    if(savedPosition){
      return savedPosition;
    }
    if(to.hash) {
      return { selector: to.hash};
    }
    return {x:0, y:0};
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/monstergame',
      name: 'monstergame',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/MonsterGame.vue')
    },
    {
      path: '/server-status',
      name: 'server-status',
      component: ServerStatus
    },
    {
      path: '/components',
      name: 'components',
      component: Components
    },
    {
      path: '/componentsProject',
      name: 'componentsProject',
      component: ComponentsProject
    },
    {
      path: '/colorTemplates',
      name: 'colorTemplates',
      component: ColorTemplates
    },
    {
      path: '/quotes',
      name: 'quotes',
      component: Quotes
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    },
    {
      path: '/directives',
      name: 'directives',
      component: Directives
    },
    {
      path: '/filters-mixins',
      name: 'filtersMixins',
      component: Filters
    },
    {
      path: '/animations-transitions',
      name: 'animations-transitions',
      component: AnimationsTransitions
    },
    {
      path: '/quizz-app',
      name: 'quizz-app',
      component: QuizzApp
    },
    {
      path: '/http',
      name: 'http',
      component: Http
    },
    {
      path: '/router',
      name: 'router',
      component: RouterPage,
      children: [
        {
          path: '/home',
          name: 'homeUser',
          component: HomeUser
        },
        {
          path: '/user',
          name: 'user',
          component: User,
          children:[
            {
              path: '',
              name: 'UserStart',
              component: UserStart
            },
            {
              path: ':id',
              name: 'UserDetail',
              component: UserDetail,
              beforeEnter: (to, from , next) => {
                console.log('inside route setup');
                next();
              }
            },
            {
              path: ':id/edit',
              name: 'UserEdit',
              component: UserEdit
            }
          ]
        }
      ]
    },
    {
      path: '/redirect-me',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/vuex',
      name: 'Vuex',
      component: Vuex
    }
  ]
})
