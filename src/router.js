import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import App from './App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {title: 'Hollow Mask Maker - Avatar Creator'},
      children: [
        {
          path: '/about',
          name: 'about',
          component: Home,
          meta: {title: 'About - Hollow Mask Avatar Generator & Editor'}
        },
        {
          path: '/payment-success',
          name: 'success',
          meta: {title: 'Hollow Mask T-Shirt - Payment Success'},
          component: Home
        },
        {
          path: '/payment-declined',
          name: 'declined',
          meta: {title: 'Hollow Mask T-Shirt - Payment Declined'},
          component: Home
        },
        {
          path: '/:maskId',
          name: 'mask',
          // route's title is dynamically controlled in main.js
          component: Home
        }
      ]
    },
  ]
})