import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../components/SignIn.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    component: () => import('../views/Error')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == true){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == true){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/ico',
    name: 'ICO',
    component: () => import('../views/ICO'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == true){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/admin/User'),
    beforeEnter: (to, from, next) => {
      if(store.state.adminAuthentication == false){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import('../views/admin/AdminTransaction'),
    beforeEnter: (to, from, next) => {
      if(store.state.adminAuthentication == false){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/distribution',
    name: 'Distributions',
    component: () => import('../views/admin/Distribution'),
    beforeEnter: (to, from, next) => {
      if(store.state.adminAuthentication == false){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false && store.state.adminAuthentication == false){
        next('/start');
      }else{
        next();
      }
    }
  },
  {
    path: '/admin-home',
    name: 'Home',
    component: () => import('../views/admin/AdminHome'),
    beforeEnter: (to, from, next) => {
      if(store.state.adminAuthentication == false){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/success/:id',
    name: 'Success',
    props: true,
    component: () => import('../views/Success'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/start');
      }else{
        next();
      }
    }
  },

  {
    path: '/pay',
    name: 'Form',
    props: true,
    component: () => import('../views/Form'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/start');
      }else{
        next();
      }
    }
  },
  {
    path: "/loader",
    component: () => import('../components/Loader')
  },
  {
    path: '/coin',
    name: 'Coin',
    props: true,
    component: () => import('../views/Coin'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/start');
      }else{
        next();
      }
    }
  },
  {
    path: '/refferals',
    name: 'Refferals',
    component: () => import('../views/Refferals'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/start');
      }else{
        next();
      }
    }
  },
  {
    path: '/start',
    name: 'Start',
    component: () => import('../views/Start'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == true && store.state.adminAuthentication == true){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/buy-transaction',
    name: 'Buy Transaction',
    component: () => import('../views/Transaction'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/');
      }else{
        next();
      }
    }
  },

  {
    path: '/withdrawal-transaction',
    name: 'With Transaction',
    component: () => import('../views/WithTransaction'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/');
      }else{
        next();
      }
    }
  },

  {
    path: '/refferal-transaction',
    name: 'Transaction',
    component: () => import('../views/BuyTransaction'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/');
      }else{
        next();
      }
    }
  },

  {
    path: '/mog',
    name: 'Mag',
    component: () => import('../views/Mog'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/start');
      }else{
        next();
      }
    }
  },

  {
    path: '/transfer',
    name: 'Transfer',
    component: () => import('../views/Transfer'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/');
      }else{
        next();
      }
    }
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/plan-history',
    name: 'Deposit',
    component: () => import('../views/Plan'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/');
      }else{
        next();
      }
    }
  },

  {
    path: '/deposit',
    name: 'Deposit',
    component: () => import('../views/Deposit'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/');
      }else{
        next();
      }
    }
  },

  {
    path: '/withdrawal',
    name: 'Deposit',
    component: () => import('../views/Withdrawal'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == false){
        next('/');
      }else{
        next();
      }
    }
  },
  
  {
    path: '/sign-in',
    name: 'Sign In',
    component: SignIn,
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == true){
        next('/');
      }else{
        next();
      }
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SignUp'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == true){
        next('/');
      }else{
        next();
      }
    }
  },

  {
    path: '/sign-up/:id',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SignUp'),
    beforeEnter: (to, from, next) => {
      if(store.state.authenticated == true){
        next('/');
      }else{
        next();
      }
    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})




export default router
