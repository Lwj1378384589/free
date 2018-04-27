// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store.js'
import {routes} from './utils/menus'
import axiosApi from "@/api/public"
import {blackList} from "@/api/list"
Vue.use(ElementUI);
Vue.config.productionTip = false
// Vue.prototype.$http = axios
//登录验证  先查询是否登录,之后查询此路由地址是否需要登录
// router.beforeEach((to, from, next) => {
//     axiosApi.axiosGet('/apis/api/registLogin'
//     ).then(res=>{
//         if(res.data.errmsg=="请登录"){
//             for(var i=0;i<routes.length-1;i++){ // 判断该路由是否需要登录权限
//                 if(routes[i].path===to.path||to.path==="/backpage"){
//                     store.commit("loginBooleanChange","logout");
//                     next({ path: '/www/disLogin'})
//                     break;
//                 }
//             }
//             if(i==9){
//                 next();
//             }
//         }else{//登录情况
//             store.commit("loginBooleanChange",res.data);
//             next();
//         }
//     })
   

// })

//请求-登录验证     需要设置什么样的请求拦截,什么不需要拦截
// axios.interceptors.request.use(
//   config => {
//     var i=0
//       for(i;i<blackList.length;i++){
//           if(config.url.indexOf(blackList[i])>0){
//             axiosApi.axiosGet('/apis/api/registLogin'
//             ).then(res=>{
//                 if(res.data.errmsg=="请登录"){
//                     store.commit("loginBooleanChange","logout");
//                     alert("请登录")
//                     next({ path: '/www/disLogin'})
//                 }else{
//                     store.commit("loginBooleanChange",res.data);
//                     next();
//                 }
//             })
//           }
//       }
//       return config;
//   },
//   err => {
//       return Promise.reject(err);
//   });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
