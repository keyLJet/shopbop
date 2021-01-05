import Vue from 'vue'
import VueRouter from 'vue-router'


const Hearts = () => import(/* webpackChunkName: "Hearts-foo" */ '../views/Hearts')
const WishList = () => import(/* webpackChunkName: "WishList-foo" */ '../views/WishList')


Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/hearts',
      component: Hearts
    },
    {
      path: '/wishlist',
      component: WishList
    }
  ]
})

export default router