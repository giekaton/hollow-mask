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
      children: [
        {
          path: '/payment-success',
          name: 'success',
          component: Home
        },
        {
          path: '/payment-declined',
          name: 'declined',
          component: Home
        },
        {
          path: '/:maskId',
          name: 'mask',
          component: Home
        }
      ]
    },
  ]
})
