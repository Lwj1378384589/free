import Vue from 'vue'

import jobfair from './jobfair.vue'

import router from '@/router3'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/store.js'
Vue.use(ElementUI);
Vue.prototype.$http = axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#jobfair',
  router,
  store,
  components: { jobfair },
  template: '<jobfair/>'
})