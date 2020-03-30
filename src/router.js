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
          meta: {title: 'About - Hollow Mask Maker & Editor | Mask Avatars & T-Shirts'}
        },
        {
          path: '/payment-success',
          name: 'success',
          component: Home
        },
        {
          path: '/payment-declined',
          name: 'declined',
          meta: {title: 'Hollow Mask Maker - Avatar Creator'},
          component: Home
        },
        {
          path: '/:maskId',
          name: 'mask',
          // meta: (route) => ({ title: 'Hollow Mask ID: ' + route.params.maskId }),
          
          // meta: ({ title: 'Hollow Mask ID: ' }),
          component: Home
        }
      ]
    },
  ]
})