<template>
        <div class="reg" style="padding-top:40px;">
				<div class="css-main-u">
					<div class="css-reg-banner">
						<div class="css-container">
							<div class="css-conbox" style="margin-top:100px;">
								<div class="stu">单位注册</div>
								<form action="" class="css-form" style="height:400px;" id="form">
									<div class="css-input inPut" style="margin-bottom:20px;">
										<div class="css-tit">登录名称</div>
										<el-input v-model="corpname" class="css-group" type="text" name="corpname" v-on:change="checkCorpname"></el-input>
										<div class="jingGao">请输入登录名称</div>
									</div>
									<div class="css-input inPut" style="margin-bottom:20px;">
										<div class="css-tit">登录密码</div>
										<el-input v-model="password" class="css-group" type="password" name="password" ></el-input>
										<div class="jingGao">请输入您的密码</div>
									</div>
									<div class="css-input inPut" style="margin-bottom:20px;">
										<div class="css-tit">确认密码</div>
										<el-input v-model="comfirmPassword" class="css-group" type="password" ></el-input>
										<div class="jingGao">请确认您的密码</div>
									</div>
									<div class="css-input inPut" style="margin-bottom:40px;">
										<div class="css-tit">电子邮箱</div>
										<el-input v-model="email" class="css-group" type="text" name="email" ></el-input>
										<div class="jingGao">请确保接受通知和找回密码</div>
									</div>
									<!-- <div class="css-input inPut" style="margin-bottom:30px;">
										<div class="css-tit" id="v_container">验证码</div>
										<input type="text" class="css-group" id="code_input" value="" />
										<div class="jingGao">请输入您接收的验证码</div>
									</div> -->
									<!-- <div class="css-input">
									<div id="v_container" style="width: 170px;height: 50px;"></div>
										<input type="text" id="code_input" value="" placeholder="请输入验证码"/>
									</div> -->
									<a @click="submit(0)" style="color: #ffffff;margin-bottom:30px;" class="css-btn">注册</a>

									<a @click="submit(1)" style="color: #ffffff;margin-bottom:30px;" class="css-btn">完善信息</a>
								</form>
							</div>
						</div>
					</div>
				</div>

			</div>

</template>
<script>
// var verifyCode = new GVerify("v_container");
//         document.getElementById("code_input").onblur = function(){
//             var res = verifyCode.validate(document.getElementById("code_input").value);
//             if(res){
//             }else{
//                 alert("验证码错误");
//             }
// }

export default{
	data() {
        return {
			corpname:'',
			password:'',
			comfirmPassword:'',
			email:'',
			checkCorpnameState:'',
			checkPasswordState:'',
			checkComfirmPasswordState:'',
			checkEmailState:''
		}
	},
	methods:{
		checkCorpname(){
			//企业名称验证
			var _this=this;
			if(_this.corpname===''||_this.corpname===null){
				alert("请填写企业名称");
				_this.checkCorpnameState="请填写企业名称";
				return false;
			}else{
				_this.$http.post('/apis/platform/corp/register/check',
					{
						'corpname':_this.corpname

					}
					).then(function(res){
						if(res.data.result!="ok"){
							alert("用户名已存在");
							_this.checkCorpnameState="用户名已存在";
							_this.corpname='';
							return false;
						}else{
							_this.checkCorpnameState='ok';
						}
						
					})
			}
		},
		submit(direction){
			var _this=this;
			if(_this.corpname===''||_this.corpname===null){
				alert("请填写企业名称");
				_this.checkCorpnameState="请填写企业名称";
				return false;
			}else{
				_this.$http.post('/apis/platform/corp/register/check',
					{
						'corpname':_this.corpname

					}
					).then(function(res){
						if(res.data.result!="ok"){
							alert("用户名已存在");
							_this.checkCorpnameState="用户名已存在";
							_this.corpname='';
							return false;
						}else{
							_this.checkCorpnameState='ok';
						}
						
					})
			}
			
			//密码验证
			if(this.password==''||this.password==null){
				alert("请输入密码")
				this.checkPasswordState="请输入密码";
				return false;
			}else{
				this.checkPasswordState='ok';
			}


			//重复密码验证
			if(this.comfirmPassword==''||this.comfirmPassword==null){
				alert("请输入确认密码")
				this.checkComfirmPasswordState="请输入确认密码";
				return false;
			}else{
				if(this.comfirmPassword!=this.password){
					alert("两次密码输入不一致,请确认后重新输入")
					this.checkComfirmPasswordState="两次密码输入不一致,请确认后重新输入";
					this.comfirmPassword='';
					return false;
				}else{
					this.checkComfirmPasswordState='ok';
				}
			}
			
			//邮箱验证
			var reg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
			if(this.email==''||this.email==null){
			alert("请输入邮箱")
			this.checkEmailState="请输入邮箱";
			return false;
			}else{
				if(reg.test(this.email)){
					this.checkEmailState='ok';
				}else{
					alert("请输入正确的邮箱")
					this.email='';
					this.checkEmailState="请输入正确的邮箱";
					return false;
				}
			}

			
			if(_this.checkCorpnameState=="ok"&&_this.checkPasswordState=="ok"&&_this.checkComfirmPasswordState=="ok"&&_this.checkEmailState=="ok"){
				this.$http.post('/apis/platform/corp/register/create',
					{
						'corpname':_this.corpname,
						"email": _this.email,
  						"password":_this.password
					}).then(function(res){
						if(res.data.errmsg=="ok"){
							alert("注册成功")
							
							if(direction==1){
								 _this.$router.push({path:'/frontPage/UnitReg2',query: {id: res.data.data._id}})
							}else{
								_this.$router.push({path:'/frontPage'})
							}
						}else{
							alert(res.data.errmsg);
							return false;
						}
						
					})
			}else{
				if(_this.checkCorpnameState!='ok'){
					alert(this.checkCorpnameState+'/'+this.corpname)
					alert("企业:"+this.checkCorpnameState)
				}else if(_this.checkPasswordState!="ok"){
					alert(_this.checkPasswordState)
				}else if(_this.checkComfirmPasswordState!="ok"){
					alert(_this.checkComfirmPasswordState)
				}else if(_this.checkEmailState!="ok"){
					alert(_this.checkEmailState)
				}
			}
		},
	}


}

</script>
<style>
.el-input__inner{
    height:35px;
}
</style>