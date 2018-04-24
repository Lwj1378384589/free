<template>
    <div>
            <div  style="padding-top:40px;"><!-- class="css-out-content" -->
                <div class="css-header"  style="font-size:16px;">
                    <div class="container">
                        <router-link to="/frontPage" title="惠安智慧就业平台"> 
                        <!-- <a href="index.html" title="惠安智慧就业平台"> -->
                            <img src="/static/frontPage/imgs/a.jpg" class="css-logo pull-left" style="width:230px; height:40px;" >
                        <!-- </a> --></router-link>
                        <div class="css-subwebsite pull-left"  style="background: url('imgs/enterr.png') no-repeat left 5px;">
                            <router-link to="/frontPage/SchoolList"><b>进入子站</b><span class="text-primary">[切换分站]</span> </router-link>
                            <!-- <a href="SchoolList.html"><b>进入子站</b><span class="text-primary">[切换分站]</span></a> -->
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
            <div class="css-nav"   style="font-size:16px;">
            <div class="container">
                <div class="pull-left css-usernav" onmouseover="seen()" onmouseout="disn()" style="position: relative;" >
                    <span>用户功能频道</span>
                        <div class="css-box" id="css-box" style="width: 230px; height: 350px; display: none; position: absolute;top:50px; left: 0; z-index:999;">
                            <div class="css-channel pull-left">
                                <div class="css-menu" id="css-menu">
    
                                    <div onmouseover="lul_list()" onmouseout="lul_out()" class="cr_li">
                                        <p>平台首页</p>
                                        <div class="box1" id="box1">
                                            <div class="list-left">
                                                <ul  class="lt-ul">
                                                    <li><router-link to="/frontPage/recruitment">岗位信息</router-link></li>
                                                    <li><router-link to="/frontPage/campusTalkPage">校园宣讲会</router-link></li>
                                                    <li><router-link to="/frontPage/campusRecruitmentPage">校园招聘公告</router-link></li>
                                                </ul>
                                            </div>
                                            <div class="list-con">
                                                <ul class="cn-ul">
                                                    <p class="txt">按行业查看职位</p>
                                                    <div v-for="pitem in positionIndustry">
                                                    <li><a href="#this" @click="find(pitem)">{{pitem.name}}</a></li>
                                                    </div>
    
                                                </ul>
                                            </div>
                                            <div class="list-bg"></div>
                                            <div class="list-right">
                                                <ul class="cn-ul">
                                                    <p class="txt">按类别查看职位</p>
                                                    <div v-for="ptyim in positionType">
                                                    <li><a href="#this" @click="find(ptyim)">{{ptyim.name}}</a></li>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div onmouseover="lul_list1()" onmouseout="lul_out1()" class="cr_li stubg">
                                        <p>学生服务</p>
                                        <div class="box1" id="box2">
                                            <div class="css-subMenu">
                                                <div class="top-M">就业信息</div>
                                                <ul class="Mul">
                                                    <li><router-link to="/frontPage/recruitment">岗位信息</router-link></li>
                                                    <li><router-link to="/frontPage/campusTalkPage">校园宣讲会</router-link></li>
                                                    <li><router-link to="/frontPage/campusRecruitmentPage">校园招聘公告</router-link></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">职业辅导</div>
                                                <ul class="Mul">
                                                        <li><router-link to="/frontPage/guidance">政策法规</router-link></li>
                                                        <li><router-link to="/frontPage/guidance">就业心得</router-link></li>
                                                        <li><router-link to="/frontPage/guidance">辅导活动</router-link></li>
                                                        <li><router-link to="/frontPage/guidance">职业课程</router-link></li>
                                                        <li><router-link to="/frontPage/guidance">专家咨询</router-link></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">就业服务</div>
                                                <ul class="Mul">
                                                        <li><router-link to="/frontPage/StudentLogin">学历学位认证</router-link></li>
                                                        <li><router-link to="/frontPage/StudentLogin">电子图像校对</router-link></li>
                                                        <li><router-link to="/frontPage/StudentLogin">报到证查询</router-link></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">用户中心</div>
                                                <ul class="Mul">
                                                        <li><router-link to="/frontPage/StudentLogin">推荐表注册</router-link></li>
                                                        <li><router-link to="/frontPage/StudentLogin">简历管理</router-link></li>
                                                        <li><router-link to="/frontPage/StudentLogin">职位收藏夹</router-link></li>
                                                        <li><router-link to="/frontPage/StudentLogin">职位申请记录</router-link></li>
                                                        <li><router-link to="/frontPage/StudentLogin">我的日程表</router-link></li>
                                                        <li><router-link to="/frontPage/StudentLogin">账号设置</router-link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div onmouseover="lul_list2()" onmouseout="lul_out2()" class="cr_li danwbg">
                                        <p>单位服务</p>
                                        <div class="box1" id="box3">
                                            <div class="css-subMenu">
                                                <div class="top-M">基础服务</div>
                                                <ul class="Mul">
                                                        <li><router-link to="/frontPage/UnitReg">单位注册</router-link></li>
                                                        <li><router-link to="/frontPage/UnitReg">职位发布</router-link></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">充值服务</div>
                                                <ul class="Mul">
                                                        <li><router-link to="/frontPage/unitLogin">广告申请</router-link></li>
                                                        <li><router-link to="/frontPage/unitLogin">职位置顶</router-link></li>
                                                        <li><router-link to="/frontPage/unitLogin">定向发布</router-link></li>
                                                        <li><router-link to="/frontPage/unitLogin">下载简历</router-link></li>
                                                        <li><router-link to="/frontPage/unitLogin">职位邀请</router-link></li>
                                                </ul>
                                            </div>
    
                                            <div class="css-subMenu">
                                                <div class="top-M">会员服务</div>
                                                <ul class="Mul">
                                                        <li><router-link to="/frontPage/unitLogin">充值服务所有内容</router-link></li>
                                                        <li><router-link to="/frontPage/unitLogin">校园统一认证</router-link></li>
                                                        <li><router-link to="/frontPage/unitLogin">生源专业查询</router-link></li>
                                                        <li><router-link to="/frontPage/unitLogin">招聘会展位优选</router-link></li>
                                                        <li><router-link to="/frontPage/unitLogin">专属在线客服</router-link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div  onmouseover="lul_list3()" onmouseout="lul_out3()" class="cr_li schoolbg">
                                        <p>学校服务</p>
                                        <div class="box1" id="box4">
                                            <div class="css-subMenu">
                                                <div class="top-M">就业管理</div>
                                                <ul class="Mul">
                                                        <li><router-link to="/frontPage/disLogin">推荐表审核</router-link></li>
                                                        <li><router-link to="/frontPage/disLogin">协议书审核</router-link></li>
                                                        <li><router-link to="/frontPage/disLogin">电子图像校对</router-link></li>
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
                                </div>
                            </div>
                        </div>

                </div>
                    <ul class="pull-left css-navbar">
                        <li><router-link to="/" class="li_a">平台首页</router-link></li>
                        <li><router-link to="/frontPage/StudentLogin">学生用户</router-link></li>
                    </ul>
                </div>
            </div>
      
      
    </div>
</template>
<script>
import store from '@/store/store.js'
export default{
    data() {
        return {
			positionIndustry:[],
			positionType:[],
        };
  },
    store,
    mounted(){
        this.getPositionIndustry();
        this.getPositionType();
      
        },
    methods:{
        getPositionIndustry: function(){
				//按行业查看职位
				var _this = this;
				_this.$http.get(
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
				_this.$http.get(
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
        }
        
        }

    


}

</script>