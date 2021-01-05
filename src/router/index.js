import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import(/* webpackChunkName: "Home-foo" */ '../views/Home')
const ShopList = () => import(/* webpackChunkName: "ShopList-foo" */ '../views/Home/ShopList/ShopList.vue')


Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {
      path: '/',
      component: Home
    },
    {
      path: '/shoplist',
      component: ShopList
    }
  ]
})

export default router