<template>
  <div class="reg" style="padding-top: 40px;">
    <div class="css-main-u">
      <div class="login-backgroundimg">
        <div class="login-contain">
          <div class="classify">
            <div  class="classify1" style="color: #1296db;">企业登录</div>
            <div  class="classify2"><router-link to="/www/disLogin">学生登录</router-link></div>
          </div>
          <form action="" id="loginForm" >
            <el-input v-model="entName" style="width:270px;"  class="login-text" placeholder="单位全称"  type="text"></el-input>
            <el-input v-model="entPassword" style="width:270px;"  placeholder="登录密码" class="login-pass" type="password" @keyup.enter.native="login"></el-input>
            <div class="login-passmore"> 
              <div class="zidong"><input type="checkbox" value="自动登录">自动登录</div>
              <div class="forget">忘记密码？</div>
            </div>
            <div class="login-btn">
            <a href="javascript:" id="showTooltips" @click.keyup.13="login">登录</a>
            <!-- <input type="button" value="登录" class="login-btn"/> -->
            </div>
          </form>
          <div class="login-sign">
            <p>立即注册</p>
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
            entName: '',
              entPassword: ''
        };
    },
    methods: {
      login: function(){
        var _this = this;
        if(_this.entName===''){
            alert("请输入企业名称！");
        }else if(_this.entPassword===''){
            alert("请输入企业密码！");
        }else{
          axiosApi.axiosPost('/apis/platform/corp/login',
          {
                username: _this.entName,
                password: _this.entPassword
          
          // unitLogin(
          //   {
          //       username: _this.entName,
          //       password: _this.entPassword
            }).then((response) => {
               //   $.hideLoading();
               if(response.data.status=="1"){
                alert("请完善您的信息");
                _this.$router.push({path:'/www/UnitReg2',query: {id: response.data.data._id}})
              }else if(response.data.data.status=="2"){
                alert("审核中,请您耐心等待");
                _this.$router.push({path:'/'})
              }else if(response.data.data.status=="3"){
                alert("您的账号未通过审核");
                /* window.location.href="/ent/login"; */
              }else if(response.data.data.status=="0"){
                  window.location.href="backPage.html"                // _this.$router.push({path:'/backpage'})
               } 
              // else{
              //   alert("您还没有注册,请注册");
              //   _this.$router.push({path:'/www/distRegist'})
              // }
           
          }),function(error){
            // $.hideLoading();
            alert('对不起，你的请求处理失败了!');   //失败处理
          };
            // setTimeout(function() {
            //   // $.hideLoading();
            //  alert('您和服务器的链接不稳定，请重新进入登录!');   //设置30000毫秒超时认为请求失败。
            // }, 30000);
        }
      }
    }
  }
</script>

<style scoped>
</style>
