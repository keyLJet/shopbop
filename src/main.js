import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入公共样式
import './style/reset.css'
import './style/iconfont.css'

// 引入elementUi
import './plugins/element.js'


Vue.config.productionTip = false

// Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
