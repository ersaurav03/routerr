import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import user1 from './components/User/user1.vue';
// import user2 from './components/User/user2.vue';
// import user3 from './components/User/user3.vue';
// import user4 from './components/User/user4.vue';
// import nestchild from './components/User/nestchild.vue';
// import Header from './components/Header.vue';

const user1 = resolve => {
require.ensure(['./components/User/user1.vue'], () => {
resolve(require('./components/User/user1.vue'));
});
} ;

const user2 = resolve => {
  require.ensure(['./components/User/user2.vue'],() => {
  resolve(require('./components/User/user2.vue'));
  });
};

const user3 = resolve => {
  require.ensure(['./components/User/user3.vue'],() => {
  resolve(require('./components/User/user3.vue'));
  });
};

const user4 = resolve => {
  require.ensure(['./components/User/user4.vue'],() => {
  resolve(require('./components/User/user4.vue'));
  });
};

const nestchild = resolve => {
  require.ensure(['./components/User/nestchild.vue'],() => {
  resolve(require('./components/User/nestchild.vue'));
  });
};

const Header = resolve => {
  require.ensure(['./components/Header.vue'],() => {
  resolve(require('./components/Header.vue'));
  });
};
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
    { path:'/user2', component:user2 },
    { path:'/user3',component:user3 }
    // {path:'/user4',component:user4} ia m not inerited the user4 4 due to this it is not working
    ]},
    
    {
    path: '/user2/:id',
    // name: 'user2',
    components: {
      default: user2,
      'header-top':Header
    }
    },

    {
      path: '/user3/:id',
      // name:'user3',
      components: {
      default: user3,
      'header-bottom':Header
    },
    
    {
      path:'/user4/:id',
      name:'user4',
      component:user4
    },
    {
      path:'*',
      redirect:'/'
    },
    { path:'redirect-me',redirect:'/user1'}
  ]
}),
router.beforeEach((to,from,next) => {
  console.log('global beforeEach');
  next();
});
