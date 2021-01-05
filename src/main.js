import Vue from 'vue';
import App from './App.vue';

import './plugins/element';

import "swiper/swiper-bundle.min.css";

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	render: (h) => h(App)
}).$mount('#app');
