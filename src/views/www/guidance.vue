<template>
        <div>
                <div class="notify"><!--通知公告-->
                    <div id="cen_right_top">
                    <div class="sele"><!--公告、动态-->
                        <div class="selet" style="background-color:#95d8ea;"><h3 class="active">政策法规</h3></div>
                        <div class="selet" > <h3>就业心得</h3></div>
                        <div class="selet" > <h3>辅导活动</h3></div>
                        <div class="selet" > <h3>职业课程</h3></div>
                        <div class="selet" > <a href="index.html"><h3>专家咨询</h3> </a> </div>
                    </div>
                    <div class="notify-search">
                        <p>关键词</p>
                         <form action="" method="">
                        <input class="sou2" />
                        <input class="sousuo2" type="button"  value="查找">
                         </form>
                    </div>
                    <div class="notes">
                        <div class="notes-title">
                            <p>标题</p>
                            <p>发布时间</p>
                        </div>
                            <div class="notes-list"  style="display:block">
                            <ul >
                                <li v-for="policy in guidancePolicy" >
                                    <a :href="['guidancePolicyDetailPage.html?id='+policy.id]" target="_blank"  style=" width:1000px; overflow:hidden;">{{policy.title}}</a >
                                    <span style="padding:0;">{{policy.time}}</span>
                                </li>
                            </ul>
                            </div> 
                            <div class="notes-list">
                                <ul>
                                    <li v-for="experience in guidanceExperience" >
                                        <a :href="['guidanceExperiencePage.html?id='+experience.id]"  style=" width:1000px; overflow:hidden;">{{experience.title}}</a >
                                        <span style="padding:0;">{{experience.time}}</span>
                                    </li> 
                                </ul>
                            </div>
                            <div class="notes-list">
                                <ul>
                                    <li v-for="coach in guidanceCoach" >
                                        <a :href="['guidanceCoachPage.html?id='+coach.id]"  style=" width:1000px; overflow:hidden;">{{coach.title}}</a >
                                        <span style="padding:0;">{{coach.time}}</span>
                                    </li>    
                                </ul>
                            </div>
                            <div class="notes-list">
                                <ul>
                                     <li v-for="voca in guidanceVocational" >
                                        <a :href="['guidanceVocationalPage.html?id='+voca.id]"  style=" width:1000px; overflow:hidden;">{{voca.title}}</a >
                                        <span style="padding:0;">{{voca.time}}</span>
                                    </li>  
                                </ul>
                            </div>
                            <div class="notes-list">
                                <ul>
                                    <!-- <li v-for="item in items">{{item.message}}</li>                         -->
                                    <li><a href="noticePage.html">专家咨询</a ><span>2017年10月26日</span></li>
                                    <li><a href="noticePage.html">专家咨询</a ><span>2017年10月26日</span></li>   
                                    <li><a href="noticePage.html">专家咨询</a ><span>2017年10月26日</span></li>   
                                    <li><a href="noticePage.html">专家咨询</a ><span>2017年10月26日</span></li>   
                                </ul>
                            </div>           
                            <div class="pages">
                                <ul>
                                    <li class="ps"><a href="">首页</a ></li>
                                    <li class="p1"><a href="">1</a ></li>
                                    <li class="p2"><a href="">2</a ></li>
                                    <li class="p3"><a href="">3</a ></li>
                                    <li class="pm"><a href="">末页</a ></li>     
                                </ul>
                            </div>
                        
                    </div>
                </div>           
            </div>
        </div>
        
</template>
    
    <script>
        import axiosApi from "@/api/public"
    export default{
        data() {
            return {
            guidancePolicy:[],
			guidanceExperience:[],
			guidanceCoach:[],
			guidanceVocational:[]  
            };
      },
      mounted(){
			this.getGuidancePolicy();
			this.getGuidanceExperience();
			this.getGuidanceCoach();
			this.getGuidanceVocational();
		},
      methods: {
        getGuidancePolicy: function(){
				//政策法规
				var _this = this;
				axiosApi.axiosGet(
					"/static/www/json/guidancePolicy.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidancePolicy = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getGuidanceExperience: function(){
				//就业心得
				var _this = this;
				axiosApi.axiosGet(
					"/static/www/json/guidanceExperience.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidanceExperience = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getGuidanceCoach: function(){
				//辅导活动
				var _this = this;
				axiosApi.axiosGet(
					"/static/www/json/guidanceCoach.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidanceCoach = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			},
			getGuidanceVocational: function(){
				//职业课程
				var _this = this;
				axiosApi.axiosGet(
					"/static/www/json/guidanceVocational.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidanceVocational = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			}
      }
    
    }


    window.onload=function()
        {
            var oTab=document.getElementById("cen_right_top");
            var aH3=oTab.getElementsByTagName("h3");
            var aDiv=oTab.getElementsByClassName("notes-list");
            var oSele1=oTab.getElementsByClassName("selet");
            for(var i=0;i<aH3.length;i++)
            {
                aH3[i].index=i;
                aH3[i].onclick=function()
                {
                    for(var i=0;i<aH3.length;i++)
                    {
                        aH3[i].className="";
                        aDiv[i].style.display="none";
                        oSele1[i].style.backgroundColor = "#f5f5f5";
                    }
                    this.className="active";
                    aDiv[this.index].style.display="block";
                    oSele1[this.index].style.backgroundColor = "#95d8ea";
                }
            }
        }
    </script>   
    <style>
    .notes-list{display:none;}
    .selet{
    display: inline-block;
    width: 100px;
    height:40px;
    background-color:#f5f5f5;
    text-align:center;
    line-height: 40px;    
}
.selet a{
    color:#555;
}

</style>