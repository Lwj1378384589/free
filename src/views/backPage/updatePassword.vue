<template>
    <div id="backIndex" style=" float:left; min-height:750px; ">
         <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                修改密码
             </div>
            <div style="padding:50px;">
                <form action=""   style="margin-top:30px;text-align:center;">
                   
                    <table id="tab" class="tablecss" style="padding-left:130px;">
                        <tr><td><input type="hidden" th:value="${session._id}" id="_id" name="_id"/></td></tr>
                       <div style="margin-bottom:15px !important;"> <tr><td style="padding-right: 10px; ">原&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;:</td>	<td><el-input name="oldpass" id="oldpass" v-model='oldpass'></el-input> </td></tr></div>
                       <div style="margin-bottom:15px !important;"><tr><td style="padding-right: 10px; ">新&nbsp;&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;码&nbsp;&nbsp;:</td>	<td><el-input name="newpass" id="newpass" v-model='newpass'></el-input> </td></tr></div>
                        <div style="margin-bottom:15px !important;"><tr><td style="padding-right: 10px; ">确认新密码&nbsp;&nbsp;:</td>	<td><el-input name="comfirmpass" id="comfirmpass" v-model='comfirmpass'></el-input> </td></tr></div>
                        <div style="margin-left:105px !important;"><tr><td colspan="2"><el-button type="primary" style="width:214px;" id="sub" v-on:click="up()">提交</el-button> </td></tr></div>
                    </table>
                </form>
            </div>

        </div>

    </div>
    <!-- <el-main  style="width:1000px;height:800px; background:none;">
        <div class="css-text">
            <form action="" class="formcss"  style="margin-top:30px;text-align:center;">
            <p class="pcss">修改密码</p>
            <table id="tab" class="tablecss" style="padding-left:130px;">
            <tr><td><input type="hidden" th:value="${session._id}" id="_id" name="_id"/></td></tr>
            <tr><td>原密码:</td>	<td><el-input name="oldpass" id="oldpass" v-model='oldpass'></el-input> </td></tr>
            <tr><td>新密码:</td>	<td><el-input name="newpass" id="newpass" v-model='newpass'></el-input> </td></tr>
            <tr><td>确认新密码:</td>	<td><el-input name="comfirmpass" id="comfirmpass" v-model='comfirmpass'></el-input> </td></tr>
            <tr><td colspan="2"><el-button type="primary" id="sub" v-on:click="up()">提交</el-button> </td></tr>
            </table>
            </form>
        </div>
    </el-main> -->
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
import axiosApi from "@/api/public"
export default{
    data() {
        return {
            oldpass:'',
            newpass:'',
            comfirmpass:''
           
        };
  },
  methods:
  {
    next() {
        if (this.stepActive++ > 2) this.stepActive = 0;
        this.dialogVisible=true;
      },
    up:function(){
        var _this=this;
        const _id=$('#_id').val();
        if(this.oldpass==""||this.oldpass==null){
            alert("请输入原密码")
            return false;
        }
        if(this.newpass==""||this.newpass==null){
            alert("请输入新密码")
            return false;
        }
        if(this.comfirmpass!=this.newpass){
            alert("两次输入的密码不一致,请重新输入")
            return false;
        }
        axiosApi.axiosPost('/apis/api/post/platform/corp/passwd?_id=5a9e2ed7a44cd66c81cfcf61',
        {
            'oldpass':this.oldpass,
            'newpass':this.newpass

        }
        ).then(function(res){
            if(res.data.errcode==0){
            _this.$router.push({path:'/backpage'})
            }
        })
        .catch(function(res){
            console.log(res.data.errmsg)
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
#aside{
    width: 200px;
height: auto;
margin: 0;
margin-right:10px;
float: left;
    position: static;
}

</style>