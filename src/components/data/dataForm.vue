<template>
    <el-form :model="testForm" ref="testForm" class="demo-dynamic" >
        <div class="renZheng" style="margin-top:0;" >
            
                <!-- <el-form-item  prop="name" label="招聘职位">
                <el-input  class="xiaoT" v-model="testForm.name" id="name"></el-input>
                </el-form-item> -->

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

           
        
        <!-- <el-form-item 
        prop="count"
        label="招聘人数">
        <el-input v-model="testForm.count" id="count"></el-input>
        </el-form-item> -->
        
        <!-- <el-form-item 
        prop="requirement"
        label="招聘需求">
        <el-input v-model="testForm.requirement" id="requirement"></el-input>
        </el-form-item> -->

        <!-- <el-form-item>
          <el-button type="primary" @click="save()" >保存</el-button>
          <el-button v-on:click="resetForm('testForm')">重置</el-button>
        </el-form-item> -->

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
            var name=this.testForm.name;
            if(name==""||name==null){
                return false;
              }
          map["name"]=name;
          $("#name").val("");
          var count=this.testForm.count;
          if(count==""||count==null){
              return false;
            }
          map["count"]=count;
          $("#count").val("");
          var requirement=this.testForm.requirement;
          if(requirement==""||requirement==null){
              return false;
            }
          map["requirement"]=requirement;
          $("#requirement").val(""); 
          this.$store.commit("jobfairListAdd",map)
        //   this.jobList.push(map);
        //  const num=this.jobList.length;
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
