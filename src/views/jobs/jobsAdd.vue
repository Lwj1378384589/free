<template>
    <div id="backIndex" style="float:left; min-height:750px;">
     

         <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                发布招聘信息
             </div>
       
            <form action=""   style="margin-top:60px;text-align:center;">
                
                <div class="renZheng mb50">
                  <div class="renDetail jMb30">
                    <div class="xiaoM">招聘名称：</div>
                    <div class="xiaoT">
                      <el-input v-model= "title" name="title"></el-input>
                    </div>
                  </div>
                  <div class="renDetail jMb30">
                    <div class="xiaoM">招聘内容：</div>
                    <div class="xiaoT">
                      <el-input  v-model="content" name="content"></el-input>
                    </div>
                  </div>
                <div class="renDetail jMb30">
                    <div class="xiaoM">省份：</div>
                    <div class="xiaoT">
                      <input v-model="provinceSelect" name="code" id="provinceCode" type="hidden"/>
                      <el-select class="w500" v-model="provinceSelect"  placeholder="请选择"  id="province" @change="change()" >
                        <el-option v-for="item in provinceList" :key="item.code" :value="item.code" :label="item.name" ></el-option>
                      </el-select>
                    </div>
                  </div>
                    <div class="renDetail jMb30" id="cityBlock" style="display:none;" >
                    <div class="xiaoM">城市：</div>
                    <div class="xiaoT">
                      <input v-model="citySelect" name="code" id="cityCode" type="hidden"/>
                      <el-select class="w500"  v-model="citySelect" placeholder="请选择"  id="city">
                        <el-option v-for="item in cityList" :key="item.code" :value="item.code" :label="item.name"></el-option>
                      </el-select>
                    </div>
                  </div>  
                  <div class="renDetail"  style="width:300px;margin-left:350px;">                
                          <el-button type="primary" style="width:300px; " id="sub" v-on:click="up()">提交</el-button>
                  </div>
                </div>
            </form>
        </div>
         </div>
    
</template>
<script>
export default{
    data() {
        return {
          title:'',
          content:'',
          cityList:[],
          citySelect:'',
          provinceSelect:'',
          provinceList:[]
        };
  },
  mounted(){
		this.getProvinceList();
	},
  methods:{
    getProvinceList: function(){
      var _this = this;
			_this.$http.get(
				"/apis/api/getdata/naf/code/xzqh/list?parent=000000&level=1"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.provinceList = response.data.data;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			}
		},
		 change:function(){
      var _this = this;
			var code=_this.provinceSelect;
			if(code=="110000"||code=="120000"||code=="310000"||code=="500000"||code=="710000"||code=="810000"||code=="820000"){
				$("#cityBlock").attr("style","display:none");
				return false;
			}
      $("#cityBlock").attr("style","display:block");
      _this.$http.get(
        '/apis/api/getdata/naf/code/xzqh/list?parent='+this.provinceSelect+'&level=2'
      ).then((response)=>{
        _this.cityList=response.data.data;
      })
    
		},
    up:function(){
      var _this = this;
        var cityid = "";
        if(this.citySelect==""||this.citySelect==null){
          cityid =this.provinceSelect
        }else{
          cityid =this.citySelect
        }
        this.$http.post('/apis/api/post/jobs/jobinfo/create?corp.id=session.userId&corp.name=session.username',
        {
            "title":this.title,
            "content":this.content,
            "city": {
              "code": cityid
             } 
        }
        ).then(function(res){
            alert(res.data.errmsg)
            _this.$router.push({path:'/jobs/jobsList'})
        })
        .catch(function(res){
            alert(res.data.errmsg)
        })
    }
  }
}
</script>
<style>
.jMb30{
  margin-bottom:30px !important;
}
body {
  font-size:16px;
}
.renDetail{
  margin-left:250px;
  margin-bottom:15px;
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
