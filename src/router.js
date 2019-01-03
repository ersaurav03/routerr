import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import user1 from './components/User/user1.vue';
import user2 from './components/User/user2.vue';
import user3 from './components/User/user3.vue';
import user4 from './components/User/user4.vue';
import nestchild from './components/User/nestchild.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
    path: '/user1/:id',
    name: 'user1',
    component: user1,
    children: [
    {
      path:'',
      component: nestchild
    },
    { path:':id', component:user2 },
    { path:':id/user3',component:user3 }
    ]},
    
    {
    path: '/user2/:id',
    name: 'user2',
    component: user2
    },

    {
      path: '/user3/:id',
      name:'user3',
      component:user3
    },
    
    {
      path:'/user4/:id',
      name:'user4',
      component:user4
    }
  ]
})
