import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import vant from "vant";
import "vant/lib/index.css";
import router from './router'
import store from './store'
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);
Vue.use(vant)
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
