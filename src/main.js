import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//引入公共资源
import './styles/reset.css'
//引入路由
import router from './router'
//引入elementui库
import './plugins/element.js'
//引入vuex
import store from './store'
new Vue({
  //使用组件
  router,
  store,
  render: h => h(App)

}).$mount('#app')
