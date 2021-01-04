import Vue from 'vue'
import App from './App'

//引入公共资源
import './styles/reset.css'
new Vue({
  render: h => h(App)
}).$mount('#app')
