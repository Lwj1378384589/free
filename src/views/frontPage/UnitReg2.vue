<template>
        <div class="reg" style="padding-top: 40px;">
                <div class="css-main-u">
                    <div class="css-reg-banner bg2">
                        <div class="css-container">
                            <div class="css-conbox" style="width:1000px;">
                                <div class="stu" style="width:980px;">单位注册-完善信息</div>
                                <form action="" style="width:1000px;  height:720px; margin-top: 30px;" id="form">
                               <input  name="_id" id="_id" type="hidden">
                                 <!-- <div class="wanS">
                                     <div class="wanTit">企业法人</div>
                                     <el-input v-model="legalPerson" style="width:220px; float:left;" type="text" name="legalPerson" id="legalPerson"></el-input>

                                 </div>
                                 <div style="width:400px; float:left; height:35px; margin-bottom:10px; background:red;">
                                     <div style="width: 135px;height: 35px;line-height: 35px;text-align: right;margin-right: 30px;float: left;" class="css-tit">企业法人</div>
                                     <el-input v-model="legalPerson" style="width:220px; float:left;" type="text" name="legalPerson" id="legalPerson"></el-input>

                                 </div> -->
                                 
                                 <div class="wanS">
                                        <div class="wanTit">企业法人</div>
                                        <el-input v-model="legalPerson" style="width:260px; float:left;" type="text" name="legalPerson" id="legalPerson"></el-input>
                                       <!--  <div class="jingGao">请输入法人真实姓名</div> -->
                                 </div>
                                 
                                 <div class="wanS">
                                        <!-- <div class="css-tit">注册时间</div>
                                         <el-input v-model='registerTime' name="registerTime" class="css-group" type="text" id="registerTime" onClick="WdatePicker()" /></el-input><br/>
                                        <div class="jingGao">请输入营业执照上注册时间</div> -->
                                                <span class="wanTit">默认</span>
                                                <el-date-picker
                                                 style="width:260px; float:left;"
                                                  v-model="registerTime"
                                                  type="date"
                                                  placeholder="选择日期">
                                                </el-date-picker>
                                 </div>
                                 
                                 <div class="wanS">
                                        <div class="wanTit">注册资金</div>
                                        <el-input v-model='registerMoney'  style="width:260px; float:left;" type="text" name="registerMoney" id="registerMoney"></el-input>
                                        <!-- <div class="jingGao">请输入营业执照上注册资金</div> -->
                                 </div>
                                 
                                 <div class="wanS">
                                        <div class="wanTit">企业性质</div>
                                        <el-select v-model='natureSelect' style="width:260px; float:left;" class="css-group" name="code" id="ent_nature">
                                        <el-option value="" selected="true" disabled="disabled">请选择企业性质</el-option>
                                        <el-option v-for="item in natureList" :key="item.code" :value="item.code" :label="item.name"></el-option>
                                        </el-select>
                                         <!-- <div class="jingGao">请选择企业性质</div> -->
                                    </div>
                                 
                                  <div class="wanS">
                                        <div class="wanTit">企业行业</div>
                                        <el-select v-model="industrySelect" style="width:260px; float:left;" class="css-group" name="code" id="ent_industry">
                                        <el-option value="" selected="true" disabled="disabled">请选择企业行业</el-option>
                                        <el-option v-for="item in industryList" :key="item.code" :value="item.code" :label="item.name"></el-option>
                                        </el-select>
                                         <!-- <div class="jingGao">请选择企业行业</div> -->
                                    </div>
                                   <div class="wanS">
                                        <div class="wanTit">企业规模</div>
                                        <el-select v-model="scaleSelect" style="width:260px; float:left;" class="css-group" name="code" id="ent_scale">
                                        <el-option value="" selected="true" disabled="disabled">请选择企业规模</el-option>
                                        <el-option v-for="item in scaleList" :key="item.code" :value="item._id" :label="item.name"></el-option>
                                        </el-select>
                                         <!-- <div class="jingGao">请选择企业规模</div> -->
                                    </div>
                                    
                                 <div class="wanS">
                                        <div class="wanTit">所在省</div>
                                        <el-select v-model="provinceSelect" style="width:260px; float:left;" class="css-group" name="code"  v-on:change="changeCity" id="province">
                                        <el-option value="" selected="true" disabled="disabled">请选择省份</el-option>
                                        <el-option v-for="item in provinceList" :key="item.code" :value="item.code" :label="item.name"></el-option>
                                        </el-select>
                                        <!-- <div class="jingGao">请选择企业所在城市</div> -->
                                    </div>
                                    
                                    <div class="wanS" id="cityBlock" style="display:none;">
                                        <div class="wanTit">所在市</div>
                                        <el-select v-model="citySelect" style="width:260px; float:left;" class="css-group" name="code" id="city" >
                                        <el-option value="" selected="true" disabled="disabled" >请选择市</el-option>
                                        <el-option v-for="item in cityList" :key="item.code" :value="item.code" :label="item.name"></el-option>
                                        </el-select>
                                    </div>
                                    
                                
                                 
                                 <div class="wanS">
                                        <div class="wanTit">姓名</div>
                                        <el-input v-model="person"  style="width:260px; float:left;" type="text" name="person" id="person"></el-input>
                                        <!-- <div class="jingGao">请输入真实姓名</div> -->
                                 </div>
                                
                                <div class="wanS">
                                        <div class="wanTit">手机</div>
                                        <el-input v-model="mobile"  style="width:260px; float:left;" type="text" name="mobile" id="mobile" ></el-input>
                                       <!--  <div class="jingGao">请输入真实的手机号</div> -->
                                </div>
                                
                                <div class="wanS">
                                        <div class="wanTit">电话</div>
                                        <el-input v-model="phone"  style="width:260px; float:left;" type="text" name="phone" id="phone" placeholder="请输入(区号-电话号码)格式"></el-input>
                                       <!--  <div class="jingGao">请输入真实的电话号</div> -->
                                </div>
                                
                                <div class="wanS">
                                        <div class="wanTit">企业网址</div>
                                    <el-input v-model="url"  style="width:260px; float:left;" type="text" name="url" id="url"></el-input>
                                    <!-- <div class="jingGao">请确保网址可以访问</div> -->
                                </div>
                                
                                <div class="wanS">
                                    <div class="wanTit">企业邮箱</div>
                                    <el-input v-model="email"  style="width:260px; float:left;" type="text" name="c" id="email"></el-input>
                                    <!-- <div class="jingGao">请确保接受通知和找回密码</div> -->
                                </div>
                                
                                <div class="wanS">
                                    <div class="wanTit">单位地址</div>
                                    <el-input v-model="address"  style="width:260px; float:left;" type="text" name="address" id="address"></el-input>
                                    <!-- <div class="jingGao">请输入单位真实地址</div> -->
                                </div>

                                <div class="wanS">
                                    <div class="wanTit">邮编</div>
                                    <el-input v-model="postcode"  style="width:260px; float:left;" type="text" name="postcode" id="postcode"></el-input>
                                    <!-- <div class="jingGao">请输入单位真实地址</div> -->
                                </div>
                                
                                <div class="css-input inPut" style="height:400px; float:left;">
                                <div class="css-tit">公司简介</div>
                                <textarea style="height:230px;  width:322px; border: 1px solid #CCCCCC;"  name="description" id="description"></textarea>
                                    
                                </div>
                                 
                                 <!-- <div class="css-input inPut"  style="height:35px;">
                                     <div class="css-tit">营业执照图片</div>
                                     <input  class="css-group" name="file" type="file" style="border: none; height:35px; ">
                                     <div class="jingGao">请确保图片清晰</div>
                                 </div>
                                 
                                 <div class="css-input inPut" style="height:35px;">
                                     <div class="css-tit">组织机构代码证</div>
                                     <input  class="css-group" name="file" type="file" style="border: none; height:35px;">
                                     <div class="jingGao">请确保图片清晰</div>
                                 </div>
                                 
                                 <div class="css-input inPut" style="height:35px;">
                                 <div class="css-tit">税务登记证</div>
                                 <el-button size="large" @click="submit">上传</el-button>
                                 <el-upload
                                  class="avatar-uploader"
                                  action=""
                                  name="swdjzPath"
                                  ref="upload"	
                                  :show-file-list="true"
                                  :on-success="success"
                                  :before-upload="beforeUpload"
                                  :on-error="error"
                                  :on-remove="remove"
                                  :limit="1"
                                  :on-exceed="exceed"
                                  list-type="picture-card">
                                  <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible" size="tiny">
                                    <img width="100%" :src="dialogImageUrl" alt="">
                                </el-dialog>
                                     <div class="jingGao">请确保图片清晰</div>
                                 </div>
                                 <div class="css-input inPut" style="height:35px;">
                                     <div class="css-tit">社保缴纳通知</div>
                                     <input  class="css-group" name="file" type="file" style="border: none; height:35px;">
                                     <div class="jingGao">请确保图片清晰</div>
                                 </div> -->
                                <a @click="submit" style="color: #ffffff; width:550px; float:left; margin-bottom:30px; " class="css-btn">确认注册</a>
                                 
                               
                                 
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
            legalPerson:'',
            registerTime:'',
            registerMoney:'',
            natureSelect:'',
            industrySelect:'',
            scaleSelect:'',
            person:'',
            mobile:'',
            phone:'',
            url:'',
            email:'',
            address:'',
            description:'',
            postcode:'',
            provinceSelect:'',
            citySelect:'',
            allProvinceList:[],
            provinceList:[],
            cityList:[],
			scaleList:[],
			natureList:[],
			industryList:[],
			dialogImageUrl: '',
            dialogVisible:false,
            id:''
        }
    },
    mounted(){
			this.getAllProvinceList();
			this.getScaleList();
			this.getNatureList();
            this.getIndustryList();
            CKEDITOR.replace("description", {height: "300px", width: "100%", toolbar: "Full"});
            var editor = CKEDITOR.instances.editor2;
    },
    methods: {
        getAllProvinceList: function(){
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/xzqh/list?parent=000000&level=1"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.allProvinceList = response.data.data;
						var reg=/^[0-9][0-9]0{4}$/;
						var mid="";
						for(var i=0;i<_this.allProvinceList.length;i++){
							if(reg.test(_this.allProvinceList[i].code)){
							mid=_this.allProvinceList[i];
							_this.provinceList.push(mid);
							}
						}
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				}
			},
			getScaleList: function(){
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/items/37/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.scaleList = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				}
			},
				
			getNatureList: function(){
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/items/36/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.natureList = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				}
			},
				
			getIndustryList: function(){
				var _this = this;
				_this.$http.get(
					"/apis/naf/code/items/35/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.industryList = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				}
            },
            changeCity(){
                var _this = this;
                var code=_this.provinceSelect;
                if(code=="110000"||code=="120000"||code=="310000"||code=="500000"||code=="710000"||code=="810000"||code=="820000"){
                    $("#cityBlock").attr("style","display:none");
                    return false;
                }
                $("#cityBlock").attr("style","display:block");
                this.$http.get('/apis/naf/code/xzqh/list?parent='+code+'&level=2'
                ).then(function(response){
                    _this.cityList=response.data.data;
                })
                .catch(function(res){
                if(res.data.errcode!=0)
                alert(res.data.errmsg)
                })

            },
            submit(){
                //获取id
                this.id=this.$route.query.id;
                //验证
                if(this.legalPerson==""||this.legalPerson==null){
                    alert("请输入法人姓名");
                    return false;
                }
                if(this.registerTime==""||this.registerTime==null){
                    alert("请输入注册时间");
                    return false;
                }
                if(this.registerMoney==""||this.registerMoney==null){
                    alert("请输入注册资金");
                    return false;
                }
                if(this.natureSelect==""||this.natureSelect==null){
                    alert("请选择企业性质");
                    return false;
                }
                if(this.industrySelect==""||this.industrySelect==null){
                    alert("请选择企业行业");
                    return false;
                }
                if(this.scaleSelect==""||this.scaleSelect==null){
                    alert("请选择企业规模");
                    return false;
                }
                var city='';
                if(this.citySelect==""||this.citySelect==null){
                    if(this.provinceSelect==""||this.provinceSelect==null){
                        alert("请选择企业所在省份");
                        return false;
                    }else if(this.provinceSelect=="110000"||this.provinceSelect=="120000"||this.provinceSelect=="310000"||this.provinceSelect=="500000"||this.provinceSelect=="710000"||this.provinceSelect=="810000"||this.provinceSelect=="820000"){
                    city=this.provinceSelect;
                    }else{
                        alert("请选择企业所在城市");
                        return false;
                    }
                }else{
                    city=this.citySelect;
                }
                if(this.person==""||this.person==null){
                    alert("请输入姓名");
                    return false;
                }
                //手机验证
                var mobileReg=/^[1][3,4,5,7,8][0-9]{9}$/;  
                if(this.mobile==""||this.mobile==null){
                    alert("请输入手机号");
                    return false;
                }else if(!mobileReg.test(this.mobile)){
                        alert("请输入正确的手机号");
                        return false;
                }
                //验证电话
                var phoneReg= /^\d{2,4}-[1-9]\d{6,8}$/;
                if(this.phone==""||this.phone==null){
                    alert("请输入电话号");
                    return false;
                }else if(!phoneReg.test(this.phone)&&!mobileReg.test(this.phone)){
                    alert("输入正确的电话号");
                    return false;
                } 
                //验证网址
                var urlReg=/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;
                if(this.url==""||this.url==null){
                    alert("请输入网址");
                    return false;
                }else if(!urlReg.test(this.url)){
                    alert("输入正确的网址");
                    return false;
                } 
                //邮箱验证
                var emailReg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
                if(this.email==""||this.email==null){
                    alert("请输入邮箱");
                    return false;
                }else if(!emailReg.test(this.email)){
                    alert("请输入正确的邮箱");
                    return false;
                } 
                
                if(this.address==""||this.address==null){
                    alert("请输入地址");
                    return false;
                }
                var postcodeReg = /^[0-9]{6}$/;
                if(this.postcode==""||this.postcode==null){
                    alert("请输入邮编");
                    return false;
                }else if(!postcodeReg.test(this.postcode)){
                    alert("请输入正确的邮编");
                    return false;
                }
                var mid=CKEDITOR.instances.description.getData();
                this.description=mid;
                if(this.description==""||this.description==null){
                    alert("请输入公司简介");
                    return false;
                }
                var _this=this;
                _this.$http.get(
					"/apis/platform/corp/register/complete?_id="+this.id,
                    {
                        "description":this.description,
                        "info": {
                            "scale":{
                                "code":this.scaleSelect
                            },
                            "nature": {
                                "code": this.natureSelect
                            }, 
                            "industry": {
                                "code": this.industrySelect
                            }, 
                            "city": {
                                "code":this.city
                            }, 
                            "legalPerson": this.legalPerson,
                            "registerTime": this.registerTime,
                            "registerMoney":this.registerMoney
                            },
                        "contact": {
                            "person": this.person,
                            "mobile": this.mobile,
                            "phone": this.phone,
                            "email": this.email,
                            "url": this.url,
                            "postcode": this.postcode,
                            "address": this.address
                        },
                        "credentials": {
                            "yyzz": "营业执照.jpg",
                            "zzjgdmz": "组织机构代码证.jpg",
                            "swdjz": "税务登记证.jpg",
                            "sbjntz": "社保缴纳通知.jpg"
                        }
            
                    }
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				}

            }

    }
}

</script>
<style>
.el-input__inner{
    height:35px;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>