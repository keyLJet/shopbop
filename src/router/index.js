import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login,
      meta: {
        isHeaderHide: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        isHeaderHide: true
      }
    }
  ]
})
export default router