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
								<div class="logTitle">企业登录</div>
								<form action="" id="loginForm"  class="logForm">
									<div class="logInput">
										<div class="logTit">单位全称</div>
										<el-input v-model="entName" placeholder="单位全称" class="logGroup" type="text"></el-input>
									</div>
									<div class="logInput">
										<div class="logTit">登录密码</div>
										<el-input v-model="entPassword" placeholder="登录密码" class="logGroup" type="password" @keyup.enter="login"></el-input>
									</div>
									<a class="logBtn" href="javascript:" id="showTooltips" @click.keyup.enter="login">登录</a>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
</template>
<script>
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
          _this.$http.post(
            "/apis/platform/corp/login", 
            {
                username: _this.entName,
                password: _this.entPassword
            },
            {
              emulateJSON: true
            }
          ).then((response) => {
            if(response.data.errcode!=0){
            }else{
            //   $.hideLoading();
               if(response.data.data.status=="1"){
                alert("请完善您的信息");
                _this.$router.push({path:'/frontPage/UnitReg2',query: {id: response.data.data._id}})
              }else if(response.data.data.status=="2"){
                alert("审核中,请您耐心等待");
                _this.$router.push({path:'/'})
              }else if(response.data.data.status=="3"){
                alert("您的账号未通过审核");
                /* window.location.href="/ent/login"; */
              }else if(response.data.data.status=="0"){
                _this.$router.push({path:'/backpage'})
              }else{
                alert("您还没有注册,请注册");
                location.href="UnitReg.html"
              } 
            }
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