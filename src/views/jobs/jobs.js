import Vue from 'vue'

import jobs from './jobs.vue'

import router from '@/router5'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/store.js'
Vue.use(ElementUI);
Vue.prototype.$http = axios
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#jobs',
  router,
  store,
  components: { jobs },
  template: '<jobs/>'
})