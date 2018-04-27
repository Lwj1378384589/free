<template>
    <div id="backIndex" style="float:left; min-height:750px;">
        
        <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                申请招聘会
             </div>
            <form   style="margin:10px auto; margin-top:60px; text-align:center; ">
                
                <DataForm></DataForm>
                <DataTable></DataTable>
                <div class="renDetail1">
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
import axiosApi from "@/api/public"
export default{
    data(){
        return{
            id:this.$route.query._id,
        }
    },
    store,
    components:{
      DataForm,DataTable
    },
    methods:{
        submit(){
            var _this=this;
            var _id='5aaa24e61ab25764103600a2';
            axiosApi.axiosPost("/apis/api/post/jobs/jobfair/corp/apply?corp.id=session.userId&corp.name=session.userName&_id="+_id,
            {
                "jobs":store.state.jobfairList
            })
            .then(function(response){
                if(response.data.errcode==0){
                _this.$router.push({path:'/jobfair/jobfairList'})
                }
                _this.$store.commit("jobfairListInit")
            })
            // .catch(function(res){
            //     alert(res.data.errmsg)
            // })

        }
    }

}

</script>
<style>
.jMb30{
  margin-bottom:30px !important;
}
.renDetail{
  margin-left:250px;
  margin-bottom:15px;
}
.renDetail1{
  margin-left:150px;
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