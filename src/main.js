import Vue from 'vue'
import '@/assets/common.css'
import store from './store'
import router from './router'
import App from './App.vue'
import Loading from '@/globalComponent/loading/main.js';
Vue.prototype.$loading = Loading;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')