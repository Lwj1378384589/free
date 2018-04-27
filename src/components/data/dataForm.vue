<template>
    <el-form :model="testForm" ref="testForm" class="demo-dynamic" >
        <div class="renZheng" style="margin-top:0;" >
                <div class="renDetail">
                    <div prop="name" class="xiaoM">招聘职位：</div>
                    <div class="xiaoT">
                      <el-input v-model="testForm.name" id="name"></el-input>
                    </div>
                </div>
                <div class="renDetail">
                    <div prop="count" class="xiaoM">招聘人数：</div>
                    <div class="xiaoT">
                      <el-input  v-model="testForm.count" id="count"></el-input>
                    </div>
                </div>

                <div class="renDetail">
                    <div  prop="requirement" class="xiaoM">招聘需求：</div>
                    <div class="xiaoT">
                      <el-input  v-model="testForm.requirement" id="requirement"></el-input>
                    </div>
                </div>
                <div class="renDetail"  style="width:300px;margin-left:350px;">                
                          <el-button  type="primary" @click="save()" style="width:300px; " >保存</el-button>
                  </div>

                  <div class="renDetail"  style="width:300px;margin-left:350px;">                
                          <el-button v-on:click="resetForm('testForm')"  style="width:300px; ">重置</el-button>
                  </div>
        </div>

      </el-form>


</template>


<script>
import store from '@/store/store.js'
export default{
    data(){
        return{
            testForm:{
                    name:'',
                    count:'',
                    requirement:''
                    },
        } 

    },
    store,
    methods:{
       save(){
            var map={};
            var count=this.testForm.count;
            var numReg=/^[0-9]*$/ ;
            if(count==""||count==null){
                return false;
                }else{
                    if(!numReg.test(count)){
                        alert("请输入数字")
                        return false
                    }
                }
            var name=this.testForm.name;
            if(name==""||name==null){
                return false;
              }
          map["name"]=name;
          $("#name").val("");
          map["count"]=count;
          $("#count").val("");
          var requirement=this.testForm.requirement;
          if(requirement==""||requirement==null){
              return false;
            }
          map["requirement"]=requirement;
          $("#requirement").val(""); 
          this.$store.commit("jobfairListAdd",map)
       }

    }

}

</script>
<style>
.xiaoM{
    line-height:40px;
}
body {
    font-size:16px;
}
.renZheng{
    margin-top:60px;
}
.jMb30{
  margin-bottom:30px !important;
}
</style>
<style>
body{
 background: #f5f5f5;
 font-size:16px;
}
.el-menu{
    border: 1px solid #ccc;
}
.renDetail{
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
