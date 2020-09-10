import Vue from 'vue'
import '@/assets/common.css'
import store from './store'
import router from './router'
import App from './App.vue'
import Loading from '@/globalComponent/loading/main.js';
import Alert from '@/globalComponent/alert/alert.js'
// 用于合并策略，加入到整个生命周期去。
// 优点是所有的定时或者判断条件只有一个！缺点是符合条件后需要遍历整棵组件树激活指定钩子
import etraCycle from '@/MergeStrategies';
Vue.use(etraCycle);

// 通用组件
Vue.prototype.$loading = Loading;
Vue.prototype.$alert = Alert;

setTimeout(() => {
  let id = Alert.info({ duration: 5, content: '我试试' });
  setTimeout(() => {
    Alert.close(id);
  }, 2000)
}, 2000)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app').trigger()