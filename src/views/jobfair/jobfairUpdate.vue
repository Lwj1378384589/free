<template>
   <div id="backIndex" style="float:left; min-height:750px;">
         <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                修改招聘会职位
             </div>
             <form action=""   style="margin-top:60px;text-align:center;">
                    <div class="renZheng mb50">
                        <div class="renDetail">
                            <div class="xiaoM">招聘会简介：</div>
                            <div class="xiaoT">
                                <el-input v-model= "content" name="title" readonly></el-input>
                            </div>
                        </div>

                        <div class="renDetail">
                            <div class="xiaoM">招聘会类型：</div>
                            <div class="xiaoT">
                                <el-input v-model= "type" name="title" readonly></el-input>
                            </div>
                        </div>

                        <div class="renDetail">
                            <div class="xiaoM">所在省市：</div>
                            <div class="xiaoT">
                                <el-input v-model= "city" name="title" readonly></el-input>
                            </div>
                        </div>
                    </div>
            </form>
            <form style="margin:10px auto; margin-top:60px;text-align:center; ">
                <!-- <DataForm></DataForm>
                <DataTable></DataTable> -->
                <digTable v-bind:tableTitle="tableTitle"></digTable>
                <div class="renDetail"  style="margin-bottom:30px; margin-top:30px; margin-left:135px;">
                    <el-button type="primary" class="btncss" id="sub" @click="submit">提交</el-button>
                </div>
            </form>
        </div>
   </div>
</template>

<script>
import store from '@/store/store.js'
import DataForm from "@/components/data/dataForm"
import DataTable from "@/components/data/dataTable"
import digTable from "@/components/data/digTable"
import axiosApi from "@/api/public"
export default{
    data(){
        return{
            content:'',
            type:'',
            city:'',
            id:this.$route.query._id,
            tableTitle:[
                {title:"职位",display:"name"},
                {title:"人数",display:"count"},
                {title:"需求",display:"requirement"}],
        }
    },
    store,
    components:{
      DataForm,DataTable,digTable
    },
    mounted(){
      this.getjobfairList();
    },
    methods:{
        
        getjobfairList(){
            var _this=this;
            _this.id="5aaa24e61ab25764103600a2";
            axiosApi.axiosGet('/apis/jobs/jobfair/fetch?_id='+_this.id,
        ).then(function(response){
            _this.content=response.data.data.content
            _this.type=response.data.data.type
            _this.city=response.data.data.city.name
            var arr=response.data.data.corps[0].jobs;
            _this.$store.commit("jobfairListSearchInJobfair",arr); 
        })
        .catch(function(res){
        })
        

      },
        submit(){
            var _this=this;
            var corpname='福瑞科技';
            axiosApi.axiosPost("/apis/api/post/jobs/jobfair/corp/update?corp.id=session.userid&_id="+_this.id,
            {
                "jobs":store.state.jobfairList
            })
            .then(function(response){
            _this.$router.push({path:'/jobfair/jobfairList'})
            })
            .catch(function(res){
                alert(res.data.errmsg)
            })

        }
    }

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
.el-table td, .el-table th.is-leaf {
    padding-left:50px;
}

</style>