<template>
    <div>
        <el-dialog title="提示" :visible.sync="dialogVisible"  width="30%"  :before-close="handleClose">
         <el-form :model="testForm" ref="testForm"   class="renZheng" style="margin-left:50px;">
                <div class="renDetail" style="margin-left:0;">
                        <div prop="name" class="xiaoM">招聘职位：</div>
                        <div class="xiaoT">
                          <el-input  v-model="testForm.name" id="name"></el-input>
                        </div>
                      </div>
                 <div class="renDetail"  style="margin-left:0;">
                        <div  prop="count" class="xiaoM">招聘人数：</div>
                        <div class="xiaoT">
                          <el-input v-model="testForm.count" id="count"></el-input>
                        </div>
                 </div>
                 <div class="renDetail" style="margin-left:0;">
                        <div prop="requirement" class="xiaoM">招聘需求：</div>
                        <div class="xiaoT">
                          <el-input v-model="testForm.requirement" id="requirement"></el-input>
                        </div>
                 </div>
                
                <!-- <el-form-item 
                prop="name"
                label="招聘职位">
                <el-input v-model="testForm.name" id="name"></el-input>
                </el-form-item>
                
                <el-form-item 
                prop="count"
                label="招聘人数">
                <el-input v-model="testForm.count" id="count"></el-input>
                </el-form-item>
                
                <el-form-item 
                prop="requirement"
                label="招聘需求">
                <el-input v-model="testForm.requirement" id="requirement"></el-input>
                </el-form-item> -->
        
                <el-form-item>
                  <el-button type="primary" @click="save()" >保存</el-button>
                  <el-button v-on:click="resetForm('testForm')">重置</el-button>
                </el-form-item>
        
              </el-form>
            
            </el-dialog>


            <el-button type="primary" @click="dialogVisible=true">新增</el-button>
            <el-table
            :data="$store.state.jobfairList"
            style="width: 100%">
            
            <el-table-column
            v-for="(data,key) in tableTitle"
            :key="key"
            :label="data.title"
            :prop="data.display">
            </el-table-column>
            <!-- <el-table-column
            prop="name"
            label="职位">
            </el-table-column>
        
          <el-table-column
            prop="count"
            label="人数">
            </el-table-column>
            
            <el-table-column
            prop="requirement"
            label="需求">
            </el-table-column>
             -->
            <el-table-column
            label="操作">
            <template slot-scope="scope">
            <el-button
            size="mini"
            type="danger"
            v-on:click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>   
    </div>

</template>

<script>
import store from '@/store/store.js'
export default{
  props:["tableTitle"],
    data(){
        return{
            testForm:{
                    name:'',
                    count:'',
                    requirement:''
                    },
            dialogVisible : false
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
          this.dialogVisible = false;
       },
       handleDelete(index,row){
            this.$store.commit("jobfairListDelete",index);
        }, 
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    

    }

}

</script>