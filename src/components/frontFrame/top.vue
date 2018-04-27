<template>
    <div id="wrap">
        <div class="container1">
            <ul class="css-left">
                <li class="shouye">
                    <router-link to="/">网站首页</router-link>
                    <!-- <a href="index.html"></a> -->
                </li>
            </ul>
            <ul class="css-right" v-if="$store.state.loginBoolean">
                    <li >
                            欢迎<i>{{$store.state.username}}</i>
                        </li>
                        <li class="indexbg">
                            <router-link to="/backpage">后台首页</router-link>
                        </li>
                        <li class="indexbg">
                            <router-link to="/">网站首页</router-link>
                        </li>
                        <li class="regbg" @click="logout">
                            <router-link to="/" >注销</router-link>
                        </li>
            </ul>

            <ul class="css-right" v-else>
                    <li>
                        <router-link to="/www/disLogin"> 登录 </router-link>
                    </li>
                    <li>
                        <router-link to="/www/distRegist">免费注册 </router-link>
                    </li>
                    <li>
                        <router-link to="/www/help">帮助中心 </router-link>
                    </li>
                </ul>
        </div>
    </div>

</template>
<script>
import axiosApi from "@/api/public"
import store from '@/store/store.js'
export default{
    store,
   
methods:{
    // registLogin(){
    //         var _this=this;
    //         axiosApi.axiosGet('/apis/api/registLogin'
    //     ).then(function(res){
    //         if(res.data.errmsg=="请登录"){
    //             _this.$store.commit("loginBooleanChange","logout");
    //         }else{
    //             _this.$store.commit("loginBooleanChange",res.data);
    //         }
    //     })
    //     },
    logout(){
        var _this=this;
        axiosApi.axiosGet("/apis/api/logout"
        ).then(function(res){
            if(res.data.errmsg==="已注销"){
            alert(res.data.errmsg);
            _this.$store.commit("loginBooleanChange","logout")
            _this.$router.push({path:'/'})
            }else{
                alert("注销失败请重新尝试")
            }
        })
    }
}
}

</script>