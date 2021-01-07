import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入公共样式
import './style/reset.css'
// 字体图标
import './style/iconfont.css'
// 轮播图 
import "swiper/swiper-bundle.css";


// 引入elementUi
import './plugins/element.js'

// 引入包含所有接口请求函数模块的API对象
import * as API from "@/api";

import './plugins/element';

import "swiper/swiper-bundle.min.css";

Vue.config.productionTip = false;

Vue.prototype.$API = API;
Vue.prototype.$BASE_API = process.env.VUE_APP_BASE_API;


// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
