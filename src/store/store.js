import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 定义接收变量
const state={
    jobfairList:[],
}

//写方法
const mutations = {
    jobfairListAdd(state,data){
        state.jobfairList.push(data);
    },
    jobfairListDelete(state,index){
        state.jobfairList.splice(index,1);
    },
    jobfairListSearch(state,data){
        state.jobfairList=data;
        
    },
    jobfairListSearchInJobfair(state,data){
        state.jobfairList=data;
    },

}


//返回
export default new Vuex.Store({

    state,mutations

})