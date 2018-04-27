import Vue from 'vue'

import backPage from './backPage.vue'

import router from '@/router2'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/store.js'
Vue.use(ElementUI);
Vue.prototype.$http = axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#backPage',
  router,
  store,
  components: { backPage },
  template: '<backPage/>'
})