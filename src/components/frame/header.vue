<template>
    <div id="backHeader">
        <div id="wrap" style="height:80px; background:#fff; position:static; ">
        <div class="container1" >
                <ul class="css-left">
                     <router-link class="logo" style="margin-top:10px;" to="/" title="惠安智慧就业平台"></router-link>
                    
                </ul>
                <ul class="css-right" style="height:80px; line-height:80px;" v-if="$store.state.loginBoolean">
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
                            <router-link to="/backpage">注销</router-link>
                        </li>
                </ul>
        </div>	
        </div>

    </div>
    

</template>
<script>
import axiosApi from "@/api/public"
import store from '@/store/store.js'
import { routes } from '@/utils/menus';
export default{
    store,
    data(){
        return{
            username:'',
        }
    },
    mounted(){
    //   this.registLogin();
    },
    methods:{
        // registLogin(){
        //     var _this=this;
        //     axiosApi.axiosGet('/apis/api/registLogin'
        // ).then(function(res){
        //     if(res.data.errmsg=="请登录"){
        //         alert("请登录")
        //         _this.$store.commit("loginBooleanChange","logout");
        //     _this.$router.push({path:'/www/disLogin'})
        //     }else{
        //         _this.$store.commit("loginBooleanChange",res.data);
        //     }
        // })
        
        // },
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
<style>


</style>