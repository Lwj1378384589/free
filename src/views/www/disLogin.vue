<template>
    <div class="reg" style=" padding: 40px 0 0 0;min-width: 1200px;" >
        <div class="css-main-u">
            <div class="login-backgroundimg">
                <!-- <div class="">
                    <router-link to="/www/StudentLogin"class="css-link" style="color: #ffffff;">学生登录</router-link>
                    <router-link to="/www/unitLogin"class="css-link" style="color: #ffffff;">企业登录</router-link>
                </div> -->
                <div class="login-contain">
                    <div class="classify">
                        <div  class="classify1"><router-link to="/www/unitLogin">企业登录</router-link></div>
                        <div  class="classify2" style="color: #1296db;">学生登录</div>
                    </div>
                    <form action="" id="loginForm"  >
                            <el-input v-model="username" style="width:270px;" placeholder="请输入学号" class="login-text" type="text"></el-input>                        
                            <el-input v-model="password" style="width:270px;"   placeholder="请输入密码" class="login-pass" type="password"></el-input>
                        <!-- <a href="ForgetPassword.html"  > 密码忘记了？<span style="color:#00abd8;">立即找回</span></a> -->
                        <div class="login-passmore"> 
                            <div class="zidong"><input type="checkbox" value="自动登录">自动登录</div>
                            <div class="forget">忘记密码？</div>
                        </div>
                        <div class="login-btn">
                        <a  id="showTooltips" @click="login">登录</a>
                        </div>
                    </form>
                    <div class="login-sign">
                        <p><router-link to="/www/StuReg">立即注册</router-link></p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import axiosApi from "@/api/public"
export default{
    data() {
        return {
            username:'',
            password:'',
        }
    },
    methods:{
        login(){
            if(this.username===''){
               alert("请输入学号！", "text");
               return false;
            }else if(this.password===''){
                alert("请输入密码！", "text");
                return false;
            }else{
                var id="5a741e52ddccf17e5562d188"
                axiosApi.axiosPost('/apis/platform/user/member/passwd?_id='+id,
                {
                    "username": this.username,
                    "password": this.password
                }).then(function(res){
                    alert(res.data)
                })
            }
        }
    }
}
</script>

<style scoped>
</style>
