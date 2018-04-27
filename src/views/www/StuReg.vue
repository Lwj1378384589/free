<template>
    <div class="reg" style="padding-top: 40px;">
        <div class="css-main-u">
            <div class="css-reg-banner">
                <div class="css-container">
                    <div class="css-conbox">
                        <div class="stu">学生注册</div>
                        <form id="form" class="css-form">
                            <div class="css-input">
                                <div class="css-tit">姓名</div>
                                <el-input v-model='xm' name="xm"  class="css-group" ></el-input>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">性别</div>
                                <el-select v-model="xb"  class="css-group" style="width:222px;" name="xb">
                                    <el-option value="男">男</el-option>
                                    <el-option value="女">女</el-option>
                                </el-select>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">身份证号</div>
                                <el-input v-model="sfzh"  name="sfzh" class="css-group"></el-input>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">登录密码</div>
                                <el-input v-model="password"  name="password" class="css-group"></el-input>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">手机号</div>
                                <el-input  v-model="phone" name="phone" class="css-group"></el-input>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">邮箱</div>
                                <el-input v-model="email"  name="email" class="css-group"></el-input>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">QQ号</div>
                                <el-input v-model="qq"  name="qq" class="css-group"></el-input>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">微信号</div>
                                <el-input  v-model="weixin" name="weixin" class="css-group"></el-input>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">邮编</div>
                                <el-input v-model="postcode"  name="postcode" class="css-group"></el-input>
                            </div>
                            <div class="css-input">
                                <div class="css-tit">住址</div>
                                <el-input v-model="address"  name="address" class="css-group"></el-input>
                            </div>
                            <input type="button" @click="submit" style="color: #ffffff;" class="css-btn" value="注册">
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
            xm:'',
            xb:'',
            sfzh:'',
            password:'',
            phone:'',
            email:'',
            qq:'',
            weixin:'',
            postcode:'',
            address:'',
        }
    },
    methods: {
        submit(){
            //判断姓名是否为空
			if(this.xm==null||this.xm==""){
				alert("姓名不能为空，请输入")
				return false;
			}
			
			//判断身份证号是否为空
			if(this.sfzh==null||this.sfzh==""){
				alert("身份证号不能为空，请输入")
				return false;
			}
		 	
			//判断密码是否为空
			if(this.password==null||this.password==""){
				alert("密码不能为空，请输入")
				return false;
			}
			
			//手机号不能为空
			var tele = /^1[0-9]{10}$/;
			if(this.phone==null||this.phone==""){
				alert("手机号不能为空，请输入")
				return false;
			}else if(!tele.test(this.phone)){
				alert("请输入正确的手机格式")
				return false;
			}
			
		 	//邮箱验证
			var emailReg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
			if(this.email==null||this.email==''){
                alert("邮箱不能为空,请输入")
                return false;
            }else if(!emailReg.test(this.email)){
				alert("请输入正确的邮箱格式");
				return false;
			}
			
			//qq验证
			var q = /^[0-9]{4,11}$/;
			if(this.qq==null||this.qq==""){
				alert("qq不能为空，请输入")
				return false;
			}else if(!q.test(this.qq)){
				alert("请输入正确的qq格式")
				return false;
			}
			
			//判断微信是否为空
			if(this.weixin==null||this.weixin==""){
				alert("微信不能为空，请输入")
				return false;
			}
		 	
		 	//邮编不能为空
			var tele = /^[0-9]{6}$/;
			if(this.postcode==null||this.postcode==""){
				alert("邮编不能为空，请输入")
				return false;
			}else if(!tele.test(this.postcode)){
				alert("请输入正确的邮编格式")
				return false;
			}
			
			//判断地址是否为空
			if(this.address==null||this.address==""){
				alert("地址不能为空，请输入")
				return false;
            }
            axiosApi.axiosPost('/apis/platform/user/member/create',
            {
                "xm": this.xm,
                "xb":this.xb,
                "sfzh": this.sfzh,
                "password": this.password,
                "contact": {
                    "phone": this.phone,
                    "email": this.email,
                    "qq": this.qq,
                    "weixin": this.weixin,
                    "postcode": this.postcode,
                    "address": this.address
                }
            }).then(function(res){
                alert(res.data)
            })

        }
    }
}
</script>
<style>
.el-input__inner{
    height:35px;
}
</style>
