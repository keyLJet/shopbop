import Vue from "vue";
import App from "./App.vue";
import router from './router'


//引入公共资源
import "./styles/reset.css";

import './plugins/element.js'

//引入mockjs
import './mock/mockServer'

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
