<template>
   
    
    <div id="backHeader">
        <div id="wrap" style="height:80px; background:#fff; position:static; ">
        <div class="container1" >
                <ul class="css-left">
                     <router-link class="logo" style="margin-top:10px;" to="/" title="惠安智慧就业平台"></router-link>
                   
                    
                </ul>
                <ul class="css-right" style="height:80px; line-height:80px;" ><!--原验证登录为'未登录'位置  原判断th:if="${session.corpcode==null}"-->
            
                    <li>
                        <a href=""  class="log">登录</a>
                    </li>
                    <li>
                        <a href=""  class="regs">免费注册</a>
                    </li>
                    <li>
                        <a href=""  class="hlp">帮助中心</a>
                    </li>
                </ul>
            
            
            
            <!--原验证登录为'已登录'位置-->
            <!-- <ul class="css-right" th:if="${session.corpcode!=null}">
                <li >
                    欢迎<i th:text="${session.corpname}"></i>
                </li>
                <li class="indexbg">
                    <a href="/ent/backtobackstage">后台首页</a>
                </li>
                <li class="indexbg">
                    <a href="/frontPage/index.html">网站首页</a>
                </li>
                <li class="regbg">
                    <a href="/ent/cancel">注销</a>
                </li>
            </ul> -->
            
        </div>	<!-- container1 -->
        </div><!-- wrap  -->

        <!-- <div class="css-out-content">
            <div class="css-header">
                <div class="container">
                        <router-link class="logo" to="/" title="惠安智慧就业平台">  ></router-link> -->
                    <!-- 改变字的div长高 -->
							<!-- <div style="line-height:120px;width:1100px">欢迎使用本网站
                                <div class="css-nav">
                                <div class="container">
                                    <ul class="pull-left css-navbar"> -->
                                        <!-- <li class="navLi" style="background:#efc028; position: relative;">
                                            <a class="nav1" href="/entcer/into">企业认证</a>
                                        </li> -->
                                        
                                        <!-- <li class="navLi"  onmouseover="seenCer()" onmouseout="disnCer()"  style="position: relative;" >
                                                <a class="navA" id="careerBox">宣讲会信息</a>
                                                
                                                <div class="jianBox" id="carBox" style="display:none; border-left:1px solid #ccc; border-right:1px solid #ccc; border-bottom:1px solid #ccc; position: absolute; top:50px; left: 0; z-index:999;">
                                                    <ul class="boxUl"> -->
                                                        <!-- <li><router-link to="/">申请宣讲会</router-link></li> -->
                                                        <!-- <li><a href="/careertalk/into">申请宣讲会</a></li> -->
                                                        <!-- <li><router-link to="/">查看宣讲会</router-link></li> -->
                                                        <!-- <li><a href="/careertalk/allcareertalk">查看宣讲会</a></li> -->
                                                    <!-- </ul>
                                                </div>
                                        </li>
                                        
                                        <li class="navLi"  onmouseover="seenTalk()" onmouseout="disnTalk()"  style="position: relative;">
                                            <a class="navA" id="talkBox">招聘信息</a>
                                            <div class="jianBox" id="carTalk" style="display:none; border-left:1px solid #ccc; border-right:1px solid #ccc; border-bottom:1px solid #ccc; position: absolute; top:50px; left: 0; z-index:999;">
                                                <ul class="boxUl"> -->
                                                    <!-- <li><router-link to="/">发布招聘信息</router-link></li>  -->
                                                    <!-- <li><a href="/job/into">发布招聘信息</a></li> -->
                                                    <!-- <li><router-link to="/">查看招聘信息</router-link></li> -->
                                                    <!-- <li><a href="/job/alljob">查看招聘信息</a></li> -->
                                                <!-- </ul>
                                            </div>
                                        </li>
                                        
                                        <li class="navLi" onmouseover="seenJob()" onmouseout="disnJob()"  style="position: relative;">
                                            <a class="navA" id="fairBox">招聘会信息</a>
                                            <div class="jianBox" id="jobBox" style="display:none; border-left:1px solid #ccc; border-right:1px solid #ccc; border-bottom:1px solid #ccc; position: absolute; top:50px; left: 0; z-index:999;">
                                                <ul class="boxUl"> -->
                                                    <!-- <li><router-link to="/">申请招聘会</router-link></li>  -->
                                                    <!-- <li><a href="/jobfair/into">申请招聘会</a></li> -->
                                                    <!-- <li><router-link to="/">查看招聘会</router-link></li>  -->
                                                    <!-- <li><a href="/jobfair/listjobfairsearch">查看招聘会</a></li> -->
                                                <!-- </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div> -->
                <!-- </div> -->
                <!-- 就业平台图片+字 -->
            <!-- </div> -->
            <!--就业平台图+字外框  -->
         <!-- </div>  -->
          <!-- css-out-content  -->
         
    </div><!--header-->
    

</template>
<script>
export default{
    data(){
        return{
            loginBoolean:false
        }
    },
    mounted(){
      this.registLogin();
    },
    methods:{
        registLogin(){
            this.$http.get('/apis/api/registLogin'
        ).then(function(res){
            if(!res.data){
                alert(res.data)
                alert("请登录")
            _this.$router.push({path:'/frontPage/disLogin'})
            }else{
                this.loginBoolean=true;
            }
        })
        .catch(function(res){
            alert(res.data.errmsg)
          })
        }
    }

}



</script>
<style>
#header{
width:1350px;
height:170px;
float:right;

}

</style>