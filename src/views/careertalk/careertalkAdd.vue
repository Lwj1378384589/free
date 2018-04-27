<template>
     <div id="backIndex" style="float:left; min-height:750px;">
         <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                申请宣讲会
             </div>
            <form   style="margin:10px auto;text-align:center; ">
                <div class="renZheng">
                    <div class="renDetail">
                        <div class="xiaoM">宣讲会标题：</div>
                        <div class="xiaoT">
                          <el-input name="subject" id="subject" placeholder="请输入内容" v-model="subject"></el-input>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲会内容：</div>
                        <div class="xiaoT">
                          <el-input name="content"  placeholder="请输入内容" v-model="content"></el-input>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲省份：</div>
                        <div class="xiaoT">
                          <el-select class="w500" v-model="provinceSelect"  placeholder="请选择"  id="province"  v-on:change="change">
                            <el-option v-for="item in provinceList" :key="item.code" :value="item.code" :label="item.name" ></el-option>
                          </el-select>
                        </div>
                      </div>
                      
                      <div class="renDetail" id="cityBlock" style="display:none;" >
                        <div class="xiaoM">宣讲城市：</div>
                        <div class="xiaoT">
                          <el-select class="w500"  v-model="citySelect" placeholder="请选择"  id="city" >
                            <el-option v-for="item in cityList" :key="item.code" :value="item.code" :label="item.name"></el-option>
                          </el-select>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲地点：</div>
                        <div class="xiaoT">
                          <el-input name="address" placeholder="请输入内容" v-model="address"></el-input>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">所在学校：</div>
                        <div class="xiaoT">
                          <el-input name="school" placeholder="请输入内容" v-model="school"></el-input>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲时间：</div>
                        <div class="xiaoT">
                            <el-date-picker class="w500" name="time" v-model="time" type="datetime" placeholder="选择日期时间"></el-date-picker>
                        </div>
                      </div>
                      
                      <div class="renDetail">
                        <div class="xiaoM">宣讲人：</div>
                        <div class="xiaoT">
                          <el-input name="contact" placeholder="请输入内容" v-model="contact"></el-input>
                        </div>
                      </div>
                      
                       <div class="renDetail">
                        <div class="xiaoM">电子邮箱：</div>
                        <div class="xiaoT">
                          <el-input name="email" placeholder="请输入内容" v-model="email"></el-input>
                        </div>
                      </div>
                
                  
                  <div class="renDetail" style="width:300px;margin-left:350px;">
                      <el-button type="primary" style="width:300px; " class="btncss" id="sub" @click="submit">提交</el-button>
                  </div>
            </div>
        </form>
         </div>
     </div>
</template>       
<script>
import { menus } from '@/utils/menus';
export default {
  data () {
    return {
      menus,
      openeds: ['1','2','3','4'],
      uniqueOpened: false
    }
  }
}

</script>

<script>

import store from '@/store/store.js'
import axiosApi from "@/api/public"
export default{
    data() {
        return {
            subject:'',
            address:'',
            content:'',
            school:'',
            time:'',
            contact:'',
            email:'',
            cityList:[],
            citySelect:'',
            provinceSelect:'',
            provinceList:[]
            
            
    
        }
    },
    mounted(){
			this.getProvinceList();
    },
    methods: {
      getProvinceList: function(){
        var _this=this;
        axiosApi.axiosGet('/apis/naf/code/xzqh/list?parent=000000&level=1'
        ).then(function(response){
            _this.provinceList=response.data.data;
        })
        .catch(function(res){
          if(res.data.errcode!=0)
          alert(res.data.errmsg)
        })
      },
      change:function(){
					var _this = this;
					var code=_this.provinceSelect;
					if(code=="110000"||code=="120000"||code=="310000"||code=="500000"||code=="710000"||code=="810000"||code=="820000"){
						$("#cityBlock").attr("style","display:none");
						return false;
					}
					$("#cityBlock").attr("style","display:block");
          axiosApi.axiosGet('/apis/naf/code/xzqh/list?parent='+code+'&level=2'
          ).then(function(response){
              _this.cityList=response.data.data;
          })
          .catch(function(res){
            if(res.data.errcode!=0)
            alert(res.data.errmsg)
          })
        },
        submit(){
          var _this=this;
          var cityCode='';
          if(_this.subject==""||_this.subject==null){
            alert("请填写宣讲会标题");
            return false;
          }
          if(_this.content==""||_this.content==null){
            alert("请填写宣讲会内容");
            return false;
          }
          if(_this.address==""||_this.address==null){
            alert("请填写宣讲会地址");
            return false;
          }
          if(_this.school==""||_this.school==null){
            alert("请填写所在学校");
            return false;
          }
          if(_this.time==""||_this.time==null){
            alert("请填写宣讲时间");
            return false;
          }
          if(_this.contact==""||_this.contact==null){
            alert("请填写宣讲人");
            return false;
          }
          if(_this.email==""||_this.email==null){
            alert("请填写电子邮箱");
            return false;
          }else{
            var emailReg=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            if(!emailReg.test(_this.email)){
                alert("请输入正确的邮箱");
                return false;
              } 
          }
          if(_this.citySelect!=''||_this.citySelect==null){
            cityCode=_this.citySelect;
          }else if(_this.provinceSelect!=''||_this.provinceSelect==null){
            cityCode=_this.provinceSelect;
          }else{
            alert('请选择省份城市');
          }
          axiosApi.axiosPost("/apis/api/post/jobs/campus/create?corp.id=session.userId&corp.name=session.username",
          {
            "subject":_this.subject,
            "content":_this.content,
            "city":{
                    "code":cityCode
                  },
            "address":_this.address ,
            "school":_this.school ,
            "time":_this.time ,
            "contact":_this.contact ,
            "email":_this.email ,
            "jobs":store.state.jobfairList
          }
          ).then(function(response){
            _this.$router.push({path:'/careertalk/careertalkList'})
          })
          .catch(function(res){
            alert(res.data.errmsg)
          })
        }
      },
    store,
    

}

</script>

<style>
body{
 background: #f5f5f5;
 font-size:16px;
}
.el-menu{
    border: 1px solid #ccc;
}
.renDetail{
  margin-left:250px;
  margin-bottom:15px;
}
.xiaoM{
  line-height: 40px;
}
#aside{
    width: 200px;
height: auto;
margin: 0;
margin-right:10px;
float: left;
    position: static;
}

</style>