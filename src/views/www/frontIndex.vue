<template>
    <div>
        <div class="css-main-index">
				<div  style="padding-top:40px;"><!-- class="css-out-content" -->
					<div class="css-header"  style="font-size:16px;">
						<div class="container" style="padding-bottom:0;">
							<router-link to="/www/frontIndex" title="惠安智慧就业平台"> 
							<!-- <a href="index.html" title="惠安智慧就业平台"> -->
								<img src="static/www/imgs/a.jpg" class="css-logo pull-left" style="width:230px; height:40px;" >
							<!-- </a> --></router-link>
							<div class="css-subwebsite pull-left"  style="background: url('imgs/enterr.png') no-repeat left 5px;">
								<router-link to="/www/SchoolList"><b>进入子站</b><span class="text-primary">[切换分站]</span> </router-link>
							</div>
							<div class="css-right pull-right">
								<div class="css-search pull-right">
									<form id="search" action="">
										<ul class="css-list-inline pull-right css-hot">
											<li>欢迎您使用本网站</li>
										</ul>
										<ul class="css-list-inline pull-right">
											<li><input class="css-submit" value="" type="button"></li>
											<li>
												<input name="keyword"  type="text" placeholder="请输入查询关键词">
											</li>
										</ul>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="css-nav">
						<div class="container">
							<div class="pull-left css-usernav">
								<span onmouseover="seen()" onmouseout="disn()">用户功能频道</span>
							</div>
							<ul class="pull-left css-navbar">
								<li><router-link to="/">平台首页</router-link></li>
								<li><router-link to="/www/StudentLogin">学生用户</router-link></li>
							</ul>
						</div>  
				</div>
					<div class="container clearfix">
						<div class="css-channel pull-left">
							<div class="css-menu" id="css-menu">
								<div onmouseover="lul_list()" onmouseout="lul_out()" class="cr_li">
									<router-link to="/" class="li_a">平台首页</router-link>
									<!-- <a href="index.html" class="li_a">平台首页 </a> -->
									<div class="box1" id="box1">
										<div class="list-left">
											<ul  class="lt-ul">
												<li><router-link to="/www/recruitment">岗位信息</router-link></li>
												<li><router-link to="/www/campusTalkPage">校园宣讲会</router-link></li>
												<li><router-link to="/www/campusRecruitmentPage">校园招聘公告</router-link></li>
											</ul>
										</div>
										<div class="list-con">
											<ul class="cn-ul">
												<p class="txt">按行业查看职位</p>
												 <div v-for="pitem in positionIndustry">
												 <li><router-link to="#this" @click="find(pitem)">{{pitem.name}}</router-link></li>
												 </div>
											</ul>
										</div>
										<div class="list-bg"></div>
										<div class="list-right">
											<ul class="cn-ul">
												<p class="txt">按类别查看职位</p>
												<div v-for="ptyim in positionType">
												<li><router-link to="#this" @click="find(ptyim)">{{ptyim.name}}</router-link></li>
												</div>
											</ul>
										</div> 
									</div>
								</div>
								<div onmouseover="lul_list1()" onmouseout="lul_out1()" class="cr_li stubg">
									<router-link to="/" class="li_a">学生服务</router-link>
									<div class="box1" id="box2">
										<div class="css-subMenu">
											<div class="top-M">就业信息</div>
											<ul class="Mul">
												<li><router-link to="/www/recruitment">岗位信息</router-link></li>
												<li><router-link to="/www/campusTalkPage">校园宣讲会</router-link></li>
												<li><router-link to="/www/campusRecruitmentPage">校园招聘公告</router-link></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">职业辅导</div>
											<ul class="Mul">
												<li><router-link to="/www/guidance">政策法规</router-link></li>
												<li><router-link to="/www/guidance">就业心得</router-link></li>
												<li><router-link to="/www/guidance">辅导活动</router-link></li>
												<li><router-link to="/www/guidance">职业课程</router-link></li>
												<li><router-link to="/www/guidance">专家咨询</router-link></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">就业服务</div>
											<ul class="Mul">
												<li><router-link to="/www/StudentLogin">学历学位认证</router-link></li>
												<li><router-link to="/www/StudentLogin">电子图像校对</router-link></li>
												<li><router-link to="/www/StudentLogin">报到证查询</router-link></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">用户中心</div>
											<ul class="Mul">
													<li><router-link to="/www/StudentLogin">推荐表注册</router-link></li>
													<li><router-link to="/www/StudentLogin">简历管理</router-link></li>
													<li><router-link to="/www/StudentLogin">职位收藏夹</router-link></li>
													<li><router-link to="/www/StudentLogin">职位申请记录</router-link></li>
													<li><router-link to="/www/StudentLogin">我的日程表</router-link></li>
													<li><router-link to="/www/StudentLogin">账号设置</router-link></li>
											</ul>
										</div>
									</div>
								</div>
								<div onmouseover="lul_list2()" onmouseout="lul_out2()" class="cr_li danwbg">
									<router-link class="li_a" to="/">单位服务</router-link>
									<div class="box1" id="box3">
										<div class="css-subMenu">
											<div class="top-M">基础服务</div>
											<ul class="Mul">
												<li><router-link to="/www/UnitReg">单位注册</router-link></li>
												<li><router-link to="/www/UnitReg">职位发布</router-link></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">充值服务</div>
											<ul class="Mul">
												<li><router-link to="/www/unitLogin">广告申请</router-link></li>
												<li><router-link to="/www/unitLogin">职位置顶</router-link></li>
												<li><router-link to="/www/unitLogin">定向发布</router-link></li>
												<li><router-link to="/www/unitLogin">下载简历</router-link></li>
												<li><router-link to="/www/unitLogin">职位邀请</router-link></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">会员服务</div>
											<ul class="Mul">
													<li><router-link to="/www/unitLogin">充值服务所有内容</router-link></li>
													<li><router-link to="/www/unitLogin">校园统一认证</router-link></li>
													<li><router-link to="/www/unitLogin">生源专业查询</router-link></li>
													<li><router-link to="/www/unitLogin">招聘会展位优选</router-link></li>
													<li><router-link to="/www/unitLogin">专属在线客服</router-link></li>
											</ul>
										</div>
									</div>
								</div>
								<div  onmouseover="lul_list3()" onmouseout="lul_out3()" class="cr_li schoolbg">
									<router-link class="li_a" to="/">学校服务</router-link>
									<div class="box1" id="box4">
										<div class="css-subMenu">
											<div class="top-M">就业管理</div>
											<ul class="Mul">
												<li><router-link to="/www/disLogin">推荐表审核</router-link></li>
												<li><router-link to="/www/disLogin">协议书审核</router-link></li>
												<li><router-link to="/www/disLogin">电子图像校对</router-link></li>
											</ul>
										</div>

										<div class="css-subMenu">
											<div class="top-M">常用链接</div>
											<ul class="Mul">
												<li><a href="http://www.baidu.com/">长春毕业生就业网</a></li>
											</ul>
										</div>
									</div>
								</div>
								<div class="cr_li schoolLbg">
									<!-- <a href="SchoolList.html" class="li_a">高校分站点</a> -->
									<router-link class="li_a" to="/www/SchoolList">高校分站点</router-link>
								</div>
							</div>
						</div>
						<div class="css-slide">
								<div class="xmK mb50">
									<div class="lB" id="lB">
										<div v-for="carim in carouselFigure">
											<router-link :to="carim.url"  class="aimg" onmouseover="ba_move()" onmouseout="ba_out()" style="display: block;">
												<img v-bind:src ="carim.name"/>
											</router-link>
										</div>
										<div class="dian_ul1">
											<div class="Txin" style="float: left;">
												<ul class="Tul" id="Tul">
													<div v-for="poim in photoAnnotate">
														<li style="display: block;">{{poim.name}}</li>
													</div>
												</ul>
											</div>

										</div>
										<ul class="dian_ul"  id="dian_ul">
											<li onmousemove="dian_list(0)" onmouseout="ba_out()" class="dian_li_bg"></li>
											<li onmousemove="dian_list(1)" onmouseout="ba_out()"></li>
											<li onmousemove="dian_list(2)" onmouseout="ba_out()"></li>
											<li onmousemove="dian_list(3)" onmouseout="ba_out()"></li>
											<li onmousemove="dian_list(4)" onmouseout="ba_out()"></li>
										</ul>
									</div>
								</div>
						</div>
						<div class="css-login-notice">
							<div class="css-login">
								<div class="css-welcome">
									<img src="static/www/imgs/vv.jpg">
									<ul class="Wul">
										<li>Hi,你好...</li>
										<li>找工作，招人才...</li>
									</ul>
								</div>
								<ul>
									<li class="css-btnlogin"><router-link to="/www/disLogin">用户登录</router-link></li>
									<li class="css-btnregister"><router-link to="/www/distRegist">免费注册</router-link></li>
								</ul>
							</div>
							<div class="css-notice">
								<div class="css-caption">
									<div class="Clt">公告</div>
									<div class="css-more"><router-link to="/www/distRegist">MORE > </router-link></div>
								</div>
								<ul class="Nul">
									<div v-for="notice in noticeList">
										<li><a href="#this" @click="findthe(notice)">{{notice.name}}</a></li>
										
									</div>
								</ul>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="css-imggroup">
							<ul>
								<div v-for="advers in advertisingPosition">
								<li>
									<a @click="findadv(advers)" target="_blank">
									<img :src ="advers.img" :title="advers.titles"></a>
								</li>
								</div>
							</ul>
						</div>
						<div class="css-imgline" style="background: red;">
								<router-link to="/www/noticePage"  target="_blank"><img src="static/www/imgs/bigI.jpg" alt="大图片"></router-link>
						</div>
						<div class="clearfix"></div>
						<div class="css-imggroup">
							<ul>
								<div v-for="advers in advertisingPosition">
								<li>
									<a @click="findadv(advers)" target="_blank">
									<img :src ="advers.img" :title="advers.titles"></a>
								</li>
								</div>
							
							</ul>
						</div>
						<div class="clearfix"></div>
						<div class="css-jobfair pull-left">
							<div class="box">
								<ul class="tabs clearfix">
									<li v-for="(tab,index) in tabsName">
										<a v-bind:href="tab.url" class="tab-link" @mouseover="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">{{tab.name}}</a>
									</li>
									<div style="float: left; height: 48px; line-height: 48px; width:80px; margin-left: 150px;  "><router-link to="/www/campusTalkPage"> MORE>></router-link></div>
								</ul>

								<div class="cards">
									<div class="tab-card" style="display: block;" >
										<ul class="ulC">
											<div v-for="ctim in campusPreachlist"><!-- 校园宣讲会 -->
												<li><a href="#this" @click="findly(ctim)">
													<span class="css-col400">{{ctim.subject}}</span>
													<span class="css-col200">{{ctim.corp.name}}</span>
													<span class="tim">{{ctim.meta.createdAt}}</span>
												</a></li>
											</div>
										</ul>
									</div>
									<div class="tab-card">
										<ul class="ulC">
											<div v-for="dtim in campusRecruitlist">
												<li><a href="#this" @click="find(dtim)"><!-- 校园宣招聘公告 -->
													<span class="css-col400">{{dtim.subject}}</span>
													<span class="css-col200">{{dtim.tenant}}</span>
													<span class="tim">{{dtim.meta.createdAt}}</span>
												</a></li>
											</div>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div class="css-calendar pull-right" style="position: relative;">
							<!--<div style="width: 387px; height: 400px; background: #bfe9e7; position: relative; margin: 0 auto; margin-top: 100px;" >-->
								<div class="css-caption1" style="width:347px; height:50px; background: #00B8EC url('imgs/rili.png') no-repeat 10px 13px;; color: #ffffff; padding-left: 40px; font-size: 18px; line-height: 50px;">
									就业日历
								</div>
								<div id='schedule-box'  class="boxshaw" >

								</div>

								<div class="css-job" id="css-job">
									<div class="job-top">
										<div class="top-left" id='h3Ele'>
											<!--2017-03-01-->
										</div>
										<div onclick="jobclose()" class="top-right">
											X
										</div>
									</div>
									<div class="job-box">
											<p><router-link to="/www/campusTalkPage">校园宣讲会：<span style="color:#00B8EC ">1场</span></router-link></p>

									</div>
								</div>
							</div>
						<!--</div>-->
						<div class="clearfix"></div>
						<!-- 拒绝诈骗-->
						<div class="css-imgline" style="margin-top: 0;">
							<img src="static/www/imgs/refuse.jpg" alt="拒绝诈骗图片" style="margin-top: 0;">
						</div>
						<div class="clearfix"></div>
						<div class="css-hotjob">
							<div class="css-caption">
								<div><img src="static/www/imgs/jobList.png">最新职位</div>
								<span><a href="recruitment.html" target="_blank" class="css-more">MORE&nbsp;&gt;&gt;</a></span>
							</div>
							<div class="css-content">
								<div class="css-ujobs clearfix">
									<div v-for="jobs in newJobs">
										<div v-if="(jobs.vip=='1')">
										<ul>
											<li>
												{{jobs.company}}
												<img src="static/www/imgs/vip.gif" title="VIP">
											</li>
											<li>
												<a href="recruitmentDetailPage.html"  target="_blank" class="text-blue">{{jobs.position}}</a>
												<a href="recruitmentDetailPage.html"  target="_blank" class="text-blue">{{jobs.position2}}</a>
												<a href="recruitmentDetailPage.html" target="_blank" class="text-blue">{{jobs.position3}}</a>
											</li>
										</ul>
										</div>
									</div>
									
								</div>
								<div class="css-njobs">
								<div v-for="jobs in newJobs">
									<div v-if="(jobs.vip=='0')">
									<ul>
										<li>{{jobs.company}}</li>
										<li>
											<a href="recruitmentDetailPage.html" target="_blank" class="text-blue">{{jobs.position}}</a>
											<a href="recruitmentDetailPage.html" target="_blank" class="text-blue">{{jobs.position2}}</a>
											<a href="recruitmentDetailPage.html" target="_blank" class="text-blue">{{jobs.position3}}</a>
										</li>
									</ul>
									</div>
								</div>
									
								</div>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="css-corphire">
							<div class="css-caption">
								<div><img src="static/www/imgs/vvip.png">高级会员</div>
								<span><a href="seniorMemberPage.html" class="css-more">MORE&nbsp;&gt;&gt;</a></span>
							</div>
							<div id="marquee5">
								<div style="height: 10000px;">
									<ul class="css-logos">
										<li v-for="senior in menber">
											<a :href="['companyDetailPage.html?id='+senior.id]" target="_blank">
												<img v-bind:src="senior.img" v-bind:title="senior.name">
												<p>{{senior.name}}</p>
											</a>
										</li>
										

									</ul>
								</div>

							</div>
						</div>
						<div class="css-talentmarket">
							<div class="css-caption">
								<div>
									<img src="static/www/imgs/jz.png">
									招聘简章
								</div>
								<span>
									<a href="recruitmentBrochurePage.html" target="_blank" class="css-more">MORE&nbsp;&gt;&gt;</a>
								</span>
							</div>
							<div class="css-content">
								<ul>
								
									<li v-for="recruit in recruitmentBrochure">
										<time>{{recruit.time}}</time>
										<a :href="['recruitmentBrochureDetailPage.html?id='+recruit.id]">
											<span class="css-col470">{{recruit.title}}</span>
										</a>
									</li>
									
									
								</ul>
							</div>
						</div>
						<div class="clearfix"></div>
						<div class="css-friendlink" style="margin-top: 20px;">
							<div class="css-caption">
								<div>
									<img src="static/www/imgs/link.png"> 
									友情链接
								</div>
							</div>

							<ul class="link">
								<li><a href="http://www.ccedin.net/index.shtml">吉林长春教育局</a></li>
								<li><a href="http://www.chsi.com.cn/xlrz/201202/20120228/284926187.html">长春市就业服务中心</a></li>
							</ul>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
	</div>

</template>
<script>
import axiosApi from "@/api/public"
export default{
    data() {
        return {
            tabsName: [{
				name: "校园宣讲会",
				url:"/www/campusTalkPage",
				isActive: true
			}, {
				name: "校园招聘公告",
				url:"/www/campusRecruitmentPage",
				isActive: false
			}],
            active: false,
			noticeList:[],
			campusPreachlist:[],
			campusRecruitlist:[],
			carouselFigure:[],
			photoAnnotate:[],
			positionIndustry:[],
			positionType:[],
			advertisingPosition:[],
			menber:[],
			recruitmentBrochure:[],
			newJobs:[]//最新职位
        };
  },
  mounted(){
    this.getFiveNotice();
    this.getCampusPreaching();
    this.getCampusRecruitment();
    this.getCarouselFigure();
    this.getPhotoAnnotate();
    this.getPositionIndustry();
    this.getPositionType();
    this.getAdvertisingPosition();
    this.getMenber();
    this.getRecruitmentBrochure();
    this.getNewJobs();
	},
  methods:{
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
        getPositionType: function(){
				//按类别查看职位
				var _this = this;
				axiosApi.axiosGet(
					"/apis/naf/code/items/36/list"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.positionType = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
        },
        getCampusPreaching: function(){
				//校园宣讲会
				var _this = this;
				axiosApi.axiosGet(
					"/apis/jobs/campus/simple?skip=0&limit=10"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.campusPreachlist = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
        },
        getCampusRecruitment: function(){
            //校园招聘公告
            var _this = this;
            axiosApi.axiosGet(
                "/apis/jobs/jobfair/simple?skip=0&limit=10"
            ).then((response) => {
                if(response.data.errcode===1){
                    alert(response.data.errmsg);
                }else{
                    _this.campusRecruitlist = response.data.data;
                }
            }),function(error){
                $.alert('对不起，你的请求处理失败了!');   //失败处理
            };
        },
        tabsSwitch: function(tabIndex) {

            var tabCardCollection = document.querySelectorAll(".tab-card"),
                    len = tabCardCollection.length;

            for(var i = 0; i < len; i++) {
                tabCardCollection[i].style.display = "none";
                this.tabsName[i].isActive = false;
            }
            this.tabsName[tabIndex].isActive = true;
            tabCardCollection[tabIndex].style.display = "block";
        },
        getFiveNotice: function(){
				//右上角五条公告
				var _this = this;
				axiosApi.axiosGet(
					"static/www/json/fiveNotice.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.noticeList = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
		findthe: function(notice){
				//
				location.href="noticePage.html?id="+notice.id;
        },
		getCarouselFigure: function(){
				//轮播图
				var _this = this;
				axiosApi.axiosGet(
					"static/www/json/homeCarouselFigure.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.carouselFigure = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
		},	
		getPhotoAnnotate: function(){
				//轮播图注释
				var _this = this;
				axiosApi.axiosGet(
					"static/www/json/photoAnnotate.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.photoAnnotate = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
		},
		getAdvertisingPosition: function(){
				//广告
				var _this = this;
				axiosApi.axiosGet(
					"static/www/json/advertisingPosition.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.advertisingPosition = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
		},
		findadv: function(advers){
				//
				location.href="companyDetailPage.html?id="+advers.id;
		},
		getMenber: function(){
			//高级会员
			var _this = this;
			axiosApi.axiosGet(
				"static/www/json/menber.json"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.menber = response.data.list;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			};
		},
		getRecruitmentBrochure: function(){
				//招聘简章
				var _this = this;
				axiosApi.axiosGet(
					"static/www/json/recruitmentBrochure.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.recruitmentBrochure = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
		},
		getNewJobs: function(){
			//最新职位
			var _this = this;
			axiosApi.axiosGet(
				"static/www/json/newJobs.json"
			).then((response) => {
				if(response.data.errcode===1){
					alert(response.data.errmsg);
				}else{
					_this.newJobs = response.data.list;
				}
			}),function(error){
				$.alert('对不起，你的请求处理失败了!');   //失败处理
			};
		},
		find: function(pitem){
			//按行业查看职业
			var _this =this;
                _this.$router.push({
                    path:'/www/recruitment',
                    query: {
                     "_id": pitem._id
                        }
                })
			//location.href="recruitment.html?id="+pitem.id;
		},
		find: function(ptyim){
			//按行业查看职业
			var _this =this;
                _this.$router.push({
                    path:'/www/recruitment',
                    query: {
                     "_id": ptyim._id
                        }
                })
			//location.href="recruitment.html?id="+ptyim.id;
		},
		findly: function(ctim){
			//跳转宣讲会详情
			var _this =this;
                _this.$router.push({
                    path:'/www/companyDetailPage',
                    query: {
                     "_id": ctim._id
                        }
                })
			
			//location.href="companyDetailPage?id="+ctim._id;
		},
		find: function(dtim){
			//跳转校园招聘公告详情
			var _this =this;
                _this.$router.push({
                    path:'/www/companyPage',
                    query: {
                     "_id": dtim._id
                        }
                })
			//location.href="companyPage.html?id="+dtim._id;
		}
  }
}
//   var mySchedule = new Schedule({
  		// el: '#schedule-box',
//  		//date: '2018-9-20',
//  		clickCb: function (y,m,d) {
// 			document.querySelector('#h3Ele').innerHTML =y+'-'+m+'-'+d
// 		},
// 		nextMonthCb: function (y,m,d) {
//  			document.querySelector('#h3Ele').innerHTML =y+'-'+m+'-'+d
//  		},
//  		nextYeayCb: function (y,m,d) {
//  			document.querySelector('#h3Ele').innerHTML =y+'-'+m+'-'+d
//  		},
//  		prevMonthCb: function (y,m,d) {
//  			document.querySelector('#h3Ele').innerHTML =y+'-'+m+'-'+d
//  		},
//  		prevYearCb: function (y,m,d) {
//  			document.querySelector('#h3Ele').innerHTML =y+'-'+m+'-'+d
//  		}
  	// });

 	function job(day){
 		/*var str = this.formatDate(this.currentYear , this.currentMonth, this.currentDay);*/
 		var cssjob=document.getElementById("css-job");
 		cssjob.style.display="block";
 	}
 	function jobclose(){
 		var cssjob=document.getElementById("css-job");
 		cssjob.style.display="none";
 	}
	

</script>


<style>
	body {font-size: 16px;}

#frontIndex{
    background:blueviolet;
    width:800px;
    height:800px;
}


			/*校园宣讲会*/

			.box {
				/* width: 800px;*/
				height: 403px;
				background: #ffffff;
				/* margin: 0 auto;*/
				/*border: 1px solid #000;*/
			}

			.tabs li {
				float: left;
				margin-right: 8px;
				list-style: none;
			}

			.tabs .tab-link {
				display: block;
				width: 250px;
				height: 49px;
				text-align: center;
				line-height: 49px;
				background-color: #00B8EC;
				color: #fff;
				text-decoration: none;
			}

			.tabs .tab-link.active {
				height: 47px;
				border-bottom: 2px solid #E35885;
				transition: .3s;
			}

			.cards {
				float: left;
			}

			.cards .tab-card {
				display: none;
			}

			.clearfix:after {
				content: "";
				display: block;
				height: 0;
				clear: both;
			}

			.clearfix {
				zoom: 1;
			}
			.css-nav{
				width:100%;
			}
		</style>

	