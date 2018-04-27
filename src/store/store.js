import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 定义接收变量
const state={
    jobfairList:[],
    loginBoolean:false,
    username:'',
    userid:'',
    state:'',
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
    jobfairListInit(state){
        state.jobfairList.splice(0,state.jobfairList.length);
    },
    loginBooleanChange(state,data){
        if(data=="logout"){
            state.loginBoolean=false;
            state.username='';
            state.userid='';
            state.state='';
        }else{
            state.loginBoolean=true;
            state.username=data.corpname;
            state.userid=data.corpid;
            state.state=data.states;
        }
        
    },
       

}


//返回
export default new Vuex.Store({

    state,mutations

})