<template>
    <div class="reg" style="padding-top: 40px;">
        <div class="css-main-u">
            <div class="css-log-banner">
                <div class="css-container">
                        <div class="css-text"> <!-- class="css-text" -->
                        <p class="css-p1">
                            慧安&nbsp;&nbsp;(HuiAn)
                        </p>
                        <p class="css-p1" style="padding-top: 0;">
                            智慧就业云平台
                        </p>
                        <p class="css-p2">
                            在这里
                        </p>
                        <p class="css-p2">
                            连接
                        </p>
                        <p class="css-p2">
                            职场精英
                        </p>
                    </div>
                    <div class="logConbox">
                        
                        <div class="logTitle">学生登录</div>
                        <form action="" id="loginForm"  class="logForm">
                            <div class="logInput">
                                <div class="logTit">学号</div>
                                <el-input v-model="username"  placeholder="请输入学号" class="logGroup" type="text"></el-input>
                            </div>
                            <div class="logInput">
                                <div class="logTit">密码</div>
                                <el-input v-model="password"  placeholder="请输入密码" class="logGroup" type="password"></el-input>
                            </div>
                            <a class="logBtn"  id="showTooltips" @click="login">登录</a>
                             <div class="logInput" style="margin-top:10px; text-align:center;" >
                            <a href="ForgetPassword.html"  > 密码忘记了？<span style="color:#00abd8;">立即找回</span></a>
                            </div>
                        </form>
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
<style>
.el-input__inner{
    height:35px;
}
</style>