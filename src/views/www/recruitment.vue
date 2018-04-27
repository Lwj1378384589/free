<template>
<center>
        <div id="cen">
            <div class="weui-tab" style="margin-top: 10px;">
					<div class="weui-navbar" style="background: #FFFFFF;">
						<router-link class="weui-navbar__item nav-font weui-bar__item--on"
							to="/www/recruitment"> 岗位信息 </router-link> <router-link
							class="weui-navbar__item nav-font" to="/www/campusTalkPage">
							校园宣讲会 </router-link> <router-link class="weui-navbar__item nav-font"
							to="/www/campusRecruitmentPage"> 校园招聘公告 </router-link>
					</div>
                    <div class="weui-tab__bd">
                        <div id="tab1" class="weui-tab__bd-item weui-tab__bd-item--active">
                                <div class="chazhao">
                                    <div class="chazhao-t">
                                        <ul>
                                            <li>关键词</li>
                                            <li>行业类别</li>
                                            <li>职能类别</li>
                                            <li>工作地区</li>
                                        </ul>
                                    </div>
                                    <div class="shuru">
                                        <form action="" method="post">
                                            <input type="text" /> 
                                            <div id="shuru" style="display:inline-block;">
                                                <select class="select">
                                                    <option value="请选择">请选择</option>
                                                    <option v-for="pitem in positionIndustry" :key="pitem._id"
                                                        :value="pitem.code">{{pitem.name}}</option>
                                                </select> 
                                                <select class="select">
                                                    <option value="请选择">请选择</option>
                                                    <option v-for="posiem in positionType" :key="posiem.name"
                                                        :value="posiem.name">{{posiem.name}}</option>
                                                </select>  
                                            </div>
                                            <input type="text" id="city" class="cittty" value="请选择" /> 
                                            <input class="shuru-s" type="submit" value="搜索">
                                        </form>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
                
        <div class="demo">
											
                <ul class="select">
                    <li class="select-list">
                        <dl id="select1">
                            <dt>薪资待遇：</dt>
                            <dd class="select-all selected"><a href="#">不限</a></dd>
                            <dd><a href="#">1500以下</a></dd>
                            <dd><a href="#">1500-1999</a></dd>
                            <dd><a href="#">2000-2999</a></dd>
                            <dd><a href="#">3000-4499</a></dd>
                            <dd><a href="#">4500-5999</a></dd>
                            <dd><a href="#">6000-7999</a></dd>
                            <dd><a href="#">10000-14999</a></dd>
                            <dd><a href="#">15000-19999</a></dd>
                            <dd><a href="#">20000及以上</a></dd>
                        </dl>
                    </li>
                    <li class="select-list">
                        <dl id="select2">
                            <dt>学历要求：</dt>
                            <dd class="select-all selected"><a href="#">不限</a></dd>
                            <dd><a href="#">大专</a></dd>
                            <dd><a href="#">本科</a></dd>
                            <dd><a href="#">硕士</a></dd>
                            <dd><a href="#">博士</a></dd>
                        </dl>
                    </li>
                    <li class="select-list">
                        <dl id="select3">
                            <dt>单位性质：</dt>
                            <dd class="select-all selected"><a href="#">不限</a></dd>
                            
                            <del v-for="dwxz in dwxzlist">
                            <dd><a href="#">{{dwxz.name}}</a></dd></del>
                        </dl>
                    </li>
                    <li class="select-list">
                        <dl id="select4">
                            <dt>单位规模：</dt>
                            <dd class="select-all selected"><a href="#">不限</a></dd>
                            <del v-for="dwgm in dwgmlist">
                            <dd><a href="#">{{dwgm.name}}</a></dd></del>
                        </dl>
                    </li>
                    <li class="select-result">
                        <dl>
                            <dt>已选条件：</dt>
                            <dd class="select-no">暂时没有选择过滤条件</dd>
                        </dl>
                    </li>
                </ul>
                </div>
                <div class="gangwei" style="background: #FFFFFF;">
                        <div class="gangwei-more"
                            v-for="joblist in postInformationList">
                            <div class="gangwei-left">
                                <p>
                                    
                                    <router-link :to="{path:'/www/recruitmentDetailPage',query:{_id: joblist._id}}">{{joblist.title}}</router-link>
                                </p>
                                <ul>
                                    <li>时间：{{joblist.meta.createdAt}}</li>
                                    <li></li>
                                </ul>
                            </div>
                            <div class="gangwei-middle">
                                <p>
                                    <a :href="['companyDetailPage.html?id='+joblist._id]">{{joblist.corp.name}}</a><img
                                        src="static/www/imgs/vip.gif">
                                </p>
                                <!-- <p>行业：{{joblist.hy}}</p>
                                <p>性质：{{joblist.dwxz}}</p> -->
                            </div>
                            <div class="gangwei-right">
                                <div class="gangwei-sq">
                                    <router-link to="/www/disLogin">申请职位</router-link>
                                </div>
                                <p>
										<router-link to="/www/disLogin">置顶</router-link><router-link to="/www/disLogin">收藏</router-link>
                                </p>
                            </div>
                        </div>
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
        </center>
    </template>
    
    <script>
	import axiosApi from "@/api/public"
	var test;
    export default{
        data() {
            return {
            dwxzlist:[],
            postInformationList:[],
			currentPage: 1,
		    pageSize:5,
		    total:100,
            positionIndustry:[],
			positionType:[],
			//salarylist:[],
			dwgmlist:[]    
            };
      },
      mounted(){
        this.getPostInformationList();
		this.getDwxz();
		this.getDwgm();
        this.getPositionIndustry();
        this.getPositionType();
        //this.getSalary();
	},
      methods: {
        getPositionIndustry: function(){
				//按行业查看职位
				var _this = this;
				axiosApi.axiosGet(
					"/apis/naf/code/items/35/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.positionIndustry = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getSalary: function(){
				//获取热招职位列表
				var _this = this;
				axiosApi.axiosGet(
					"/apis/naf/code/items/37/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.salarylist = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				}
			},
			getPositionType: function(){
				//按类别查看职位
				var _this = this;
				axiosApi.axiosGet(
					"static/www/json/positionType.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.positionType = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
        getDwxz: function(){
			//获取单位性质列表
			var _this = this;
			axiosApi.axiosGet(
				"/apis/naf/code/items/36/list"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.dwxzlist = response.data.data;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			}
		},
        getDwgm: function(){
			//获取单位规模列表
			var _this = this;
			axiosApi.axiosGet(
				"/apis/naf/code/items/37/list"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.dwgmlist = response.data.data;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			}
		},
        getPostInformationList: function(){
				//岗位信息列表
				var _this = this;
				var page = _this.currentPage-1;
				var url ="/apis/jobs/jobinfo/simple?skip="+page+"&limit="+_this.pageSize
					axiosApi.axiosGet(
					url
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						 _this.postInformationList = response.data.data;
						_this.pageSize=test;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				} 
			},
            handleSizeChange(val) {
				var _this = this;
				 test=val;
				var page = _this.currentPage-1;
				var url ="/apis/jobs/jobinfo/simple?skip="+page+"&limit="+test
					axiosApi.axiosGet(
					url
					).then((response) => {
						if(response.data.errcode===1){
							alert(response.data.errmsg);
						}else{
							 _this.postInformationList = response.data.data;
							_this.pageSize=test;
						}
					}),function(error){
						$.alert('对不起，你的请求处理失败了!');   //失败处理
					} 
		      },
		      handleCurrentChange(val) {
		    	  var _this = this;
					 test=val;
					 var page = val-1;
					var url ="/apis/jobs/jobinfo/simple?skip="+page+"&limit="+this.pageSize
						axiosApi.axiosGet(
						url
					).then((response) => {
						if(response.data.errcode===1){
							alert(response.data.errmsg);
						}else{
							 _this.postInformationList = response.data.data;
							_this.currentPage=test
						}	
					}),function(error){
						$.alert('对不起，你的请求处理失败了!');   //失败处理
					} 
		      }
      }
    
    }
    </script>
    <style>
#cen {
    width: 1200px;
    margin: 0 auto;
}

._citys {
	background-color: #fff;
	width: 450px;
	display: inline-block;
	border: 2px solid #eee;
	padding: 5px;
	position: relative;
}

._citys span {
	color: #56b4f8;
	height: 15px;
	width: 15px;
	line-height: 15px;
	text-align: center;
	border-radius: 3px;
	position: absolute;
	right: 10px;
	top: 10px;
	border: 1px solid #56b4f8;
	cursor: pointer;
}

._citys0 {
	width: 100%;
	height: 34px;
	display: inline-block;
	border-bottom: 2px solid #56b4f8;
	padding: 0;
	margin: 0;
}

._citys0 li {
	display: inline-block;
	line-height: 34px;
	font-size: 15px;
	color: #888;
	width: 80px;
	text-align: center;
	cursor: pointer;
}

.citySel {
	background-color: #56b4f8;
	color: #fff !important;
}

._citys1 {
	background-color: #fff;
	width: 100%;
	display: inline-block;
	padding: 10px 0;
}

._citys1 a {
	width: 83px;
	height: 35px;
	display: inline-block;
	background-color: #f5f5f5;
	color: #666;
	margin-left: 6px;
	margin-top: 3px;
	line-height: 35px;
	text-align: center;
	cursor: pointer;
	font-size: 13px;
	overflow: hidden;
}

._citys1 a:hover {
	color: #fff;
	background-color: #56b4f8;
}

.AreaS {
	background-color: #56b4f8 !important;
	color: #fff !important;
}
</style>