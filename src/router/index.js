import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "Home-foo" */ "../views/Home");
const ShopList = () =>
  import(
    /* webpackChunkName: "ShopList-foo" */ "../views/Home/ShopList/ShopList.vue"
  );
const Hearts = () =>
  import(/* webpackChunkName: "Hearts-foo" */ "../views/Hearts");
const WishList = () =>
  import(/* webpackChunkName: "WishList-foo" */ "../views/WishList");
const Login = () =>
  import(/* webpackChunkName: "Login-foo" */ "../views/Login");
const Register = () =>
  import(/* webpackChunkName: "Register-foo" */ "../views/Register");

const Shoppingcart = () =>
  import(/* webpackChunkName: "Shoppingcart-foo" */ "../views/Shoppingcart");
const ProductPage = () =>
  import(
    /* webpackChunkName: "ProductPage-foo" */ "../components/ProductPage.vue"
  );

Vue.use(VueRouter);

//为了解决编程式导航重复点击时报错的问题：
//重写push和replace方法,它在VueRouter构造函数的原型上
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    //如果用户要处理失败
    return push.call(this, location, onComplete, onAbort);
  }
  //如果用户不处理失败，则给默认值空函数
  return push.call(this, location, onComplete, () => {});
};

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete && onAbort) {
    //如果用户要处理失败
    return replace.call(this, location, onComplete, onAbort);
  }
  //如果用户不处理失败，则给默认值空函数
  return replace.call(this, location, onComplete, () => {});
};

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/shoplist",
      component: ShopList,
    },
    {
      path: "/hearts",
      component: Hearts,
    },
    {
      path: "/wishlist",
      component: WishList,
    },
    {
      path: "/login",
      component: Login,
      meta: {
        isHeaderFooterHide: true,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        isHeaderFooterHide: true,
      },
    },
    {
      path: "/productPage",
      component: ProductPage,
    },
    {
      path: "/shoppingcart",
      component: Shoppingcart,
    },
  ],
  //设置切换前端路由时，滚动条的初始位置
  scrollBehavior() {
    return {
      x: 0,
      y: 0,
    };
  },
});

export default router;
