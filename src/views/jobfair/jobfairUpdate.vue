<template>
   <div id="backIndex" style="float:left; min-height:750px;">
         <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                修改招聘会职位
             </div>
            <form style="margin:10px auto; margin-top:60px;text-align:center; ">
                <!-- <DataForm></DataForm>
                <DataTable></DataTable> -->
                <digTable></digTable>
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
export default{
    data(){
        return{
            id:this.$route.query._id
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
            this.$http.get('/apis/jobs/jobfair/fetch?_id='+_this.jobs,
        ).then(function(response){
            var arr=response.data.data.corps[0].jobs;
            _this.$store.commit("jobfairListSearchInJobfair",arr); 
        })
        .catch(function(res){
        })
        

      },
        submit(){
            var _this=this;
            _this.id='5aaa24e61ab25764103600a2';
            var corpname='福瑞科技';
            this.$http.post("/apis/jobs/jobfair/corp/update?corp.id=session.userid&_id="+_this.id,
            {
                "jobs":store.state.jobfairList
            })
            .then(function(response){
                alert(response.data.errmsg)
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