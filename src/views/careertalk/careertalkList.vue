<template>
         <div id="backIndex" style="float:left; min-height:750px;">
            <Aside></Aside>
          <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
             <div style="width:968px; padding-left:20px; font-size:16px; border-bottom:1px solid #ccc; height:56px; line-height:56px;">
                宣讲会列表
             </div>
                <div style=" margin-bottom:50px; background:#fff;width:988px; ">
                     <el-table :data="tableData" style="width:988px; ">
                          <el-table-column style=" border-bottom:1px solid red;" prop="subject"  label="宣讲会标题" min-width="180"> </el-table-column>
                          <el-table-column  prop="meta.createdAt"   label="开始时间"     min-width="180"> </el-table-column>
                          <el-table-column  prop="corp.name"   label="发布公司" min-width="180"> </el-table-column>
                          <el-table-column  fixed="right"  label="操作"  min-width="120"> <template slot-scope="scope">
                            <el-button  v-on:click.native.prevent="listRow(scope.row._id)" type="text" size="small"> 详情  </el-button>
                           </template> </el-table-column>
                    </el-table>
                </div>

                <div class="block">
                    <el-pagination
                     style="text-align:center;"
                      v-on:size-change="handleSizeChange"
                      v-on:current-change="handleCurrentChange"
                      :current-page="currentPage"
                      :page-sizes="[1, 2, 3, 4,5,6,7,8,9,10]"
                      :page-size="pageSize"
                      layout="total, sizes, prev, pager, next, jumper"
                      :total="total">
                    </el-pagination>
            </div>
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
export default{
    data(){
        return{
            tableData:[],
            currentPage: 1,
            pageSize:10,
            total:400,
            test:''
            
        }
    },
    store,
    mounted(){
		this.getData();
    },
    methods:{
        listRow(_id) {
            var _this =this;
            _this.$router.push({
                path:'/careertalk/careertalkUpdate',
                query: {
                 "_id": _id
                    }
            })
          },
        getData(){
            var _this = this;
            this.$http.get('/apis/api/getdata/jobs/campus/simple?skip='+(this.currentPage-1)+'&limit='+this.pageSize
            ).then(function(response){
                _this.tableData = response.data.data;
                _this.allSize = response.data
                _this.total = response.data.total
            })
            .catch(function(res){
                alert(res.data.errmsg)
            })
				
            },
        handleSizeChange(val) {
            var _this = this;
            _this.test=val;
                _this.$http.get(
                "/apis/api/getdata/jobs/jobfair/simple?corp.id=5a9e2ed7a44cd66c81cfcf61&skip="+(this.currentPage-1)+"&limit="+_this.test
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                     _this.tableData = response.data.data;
                    _this.pageSize=_this.test;
                }
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            } 
            },
        handleCurrentChange(val) {
            var _this = this;
                _this.test=val;
            _this.$http.get(
                "/apis/api/getdata/jobs/jobfair/simple?corp.id=5a9e2ed7a44cd66c81cfcf61&skip="+(val-1)+"&limit="+_this.pageSize
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                     _this.tableData = response.data.data;
                    _this.currentPage=_this.test
                }	
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            } 
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
  margin-bottom:15px;
}
.xiaoM{
  line-height: 40px;
}
.el-table td, .el-table th.is-leaf {
    padding-left:50px;
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