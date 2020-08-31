import Vue from 'vue'
import Store from './store'
import Vuex from 'vuex'
import router from './router'
import App from './App.vue'
import Loading from '@/globalComponent/loading/main.js';
Vue.prototype.$loading = Loading;

Vue.use(Vuex)
const store = new Vuex.Store(Store)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')