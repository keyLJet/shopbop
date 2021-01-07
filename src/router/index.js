import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import(/* webpackChunkName: "Home-foo" */ '../views/Home')
const ShopList = () => import(/* webpackChunkName: "ShopList-foo" */ '../views/Home/ShopList/ShopList.vue')
const Hearts = () => import(/* webpackChunkName: "Hearts-foo" */ '../views/Hearts')
const WishList = () => import(/* webpackChunkName: "WishList-foo" */ '../views/WishList')
const Login = () => import(/* webpackChunkName: "Login-foo" */ '../views/Login')
const Register = () => import(/* webpackChunkName: "Register-foo" */ '../views/Register')


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
    },
    {  
      path: '/hearts',
      component: Hearts
    },
    {
      path: '/wishlist',
      component: WishList
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }
  ]
})

export default router