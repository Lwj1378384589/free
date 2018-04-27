<template>
<center>
   <div>
    <div class="weui-tab" style="margin-top:10px; width:1200px; margin:0 auto;">
        <div class="weui-navbar" style="background: #FFFFFF;">
            
            <router-link class="weui-navbar__item nav-font" to="/www/recruitment">
                岗位信息
            </router-link>
            <router-link class="weui-navbar__item nav-font weui-bar__item--on" to="/www/campusTalkPage">
                校园宣讲会
            </router-link>
            <router-link class="weui-navbar__item nav-font" to="/www/campusRecruitmentPage">
                校园招聘会
            </router-link>
        </div>
        <div class="weui-tab__bd">
            <div id="tab2" class="weui-tab__bd-item weui-tab__bd-item--active">
                <div class="weui-search-bar " id="searchBar" style="margin-top: 15px;">
                    <form class="weui-search-bar__form">
                        <div class="weui-search-bar__box">
                            <i class="weui-icon-search"></i>
                            <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="请输入单位名称或举办学校" required="">
                            <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
                        </div>
                        <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                            <i class="weui-icon-search"></i>
                           <span>搜索</span>
                        </label>
                    </form>
                    <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
                </div>
                <div class="xiaoyuan">
                    <div class="xiao-l">
                        <div class="place">地区选择</div>
                        <ul  v-for="arealist in areaSelection">
                            <li><a href="">{{arealist.jbdq}}（近期：{{arealist.changci}}场）</a></li>
                        </ul>
                    </div>
                    <div class="xiao-r">
                    
                    
          <el-table :data="preachingPlace" style="width: 600xp">
              <el-table-column  prop="corp.name"   label="单位名称"     min-width="180"> </el-table-column>
                <el-table-column  prop="subject"   label="title"     min-width="180"> </el-table-column>
              <el-table-column  prop="meta.createdAt"   label="举办时间"     min-width="180"> </el-table-column>
                <el-table-column  fixed="right"  label="操作"  min-width="120"> <template slot-scope="scope">
                <el-button  v-on:click.native.prevent="find(scope.row._id)" size="small"> 详情 </el-button>
                </template> </el-table-column>
        </el-table>
                 <div class="block">
                    <el-pagination
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

            </div>
        </div>
    </div>

   </div>
   </center>
</template>

<script>
     $(".include").each(function(){
			    if(!!$(this).attr("file")) {
			        var $includeObj = $(this);
			        $(this).load($(this).attr("file"), function(html){
			            $includeObj.after(html).remove();   
			        })
			    }
            });
import axiosApi from "@/api/public"
var test;
export default{
    data() {
        return {
            areaSelection:[],
			preachingPlace:[],
			currentPage: 1,
		    pageSize:10,
		    total:100
        };
  },
  mounted(){
			this.getAreaSelection();
			this.getPreachingPlace();
		},
  methods:{
    getAreaSelection: function(){
        //地区列表
        var _this = this;
        axiosApi.axiosGet(
            "static/www/json/areaSelection.json"
        ).then((response) => {
            if(response.data.errcode===1){
                alert(response.data.errmsg);
            }else{
                _this.areaSelection = response.data.list;
            }
        }),function(error){
            $.alert('对不起，你的请求处理失败了!');   //失败处理
        };
    },
    getPreachingPlace: function(){
        //举办单位
        var _this = this;
        var page = _this.currentPage-1;
        axiosApi.axiosGet(
            "/apis/jobs/campus/simple?skip="+page+"&limit="+_this.pageSize
        ).then((response) => {
            if(response.data.errcode===1){
                alert(response.data.errmsg);
            }else{
                _this.preachingPlace = response.data.data;
                _this.total= response.data.total
            }
        }),function(error){
            $.alert('对不起，你的请求处理失败了!');   //失败处理
        };
    },
    find: function(_id){
        //按行业查看职业
        var _this =this;
                _this.$router.push({
                    path:'/www/companyDetailPage',
                    query: {
                     "_id": _id
                        }
                })
    },
    handleSizeChange(val) {
        var _this = this;
            test=val;
        var page = _this.currentPage-1;
        var url ="/apis/jobs/campus/simple?skip="+page+"&limit="+test
        axiosApi.axiosGet(
            url
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                     _this.postInformationList = response.data.data;
                    _this.pageSize=test;
                    _this.total= response.data.total
                }
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            } 
        },
        handleCurrentChange(val) {
            var _this = this;
                test=val;
                var page = val-1;
            var url ="/apis/jobs/campus/simple?skip="+page+"&limit="+this.pageSize
            axiosApi.axiosGet(
                url
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                     _this.postInformationList = response.data.data;
                    _this.currentPage=test
                    _this.total= response.data.total
                }	
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            } 
        }
  }

}
</script>
  <style>
    body {font-size:16px;}
    </style>