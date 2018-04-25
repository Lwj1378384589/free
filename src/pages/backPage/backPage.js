import Vue from 'vue'

import backPage from './backPage.vue'

Vue.config.productionTip = false

 

/* eslint-disable no-new */

new Vue({

el: '#backPage',

  render: h => h(backPage)

})