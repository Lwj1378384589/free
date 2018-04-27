<template>
    <div>
        <div class="container">
            <ul class="css-subnav">
                <li class="active"><a href="recruitmentBrochurePage.html">招聘简章</a></li>
            </ul>
            <ol class="css-list-inline css-breadcrumb">
                <li><a href="/">首页</a></li>
                <li>&gt;</li>
                <li><a href="recruitmentBrochurePage.html">招聘简章</a></li>
                <li>&gt;</li>
                <li><a>详情</a></li>
            </ol>
            <div class="css-content">
                <div class="css-main">
                    <div class="css-article-content">
                        <div class="css-heading">
                            正文介绍
                        </div>
                        <div class="css-content">
                            <h2 class="css-title text-center">
                                {{recruitmentJane.name}}
                            </h2>
                            <p>{{recruitmentJane.time}}</p>
                            <div class="css-tit">详情</div>
                            <div class="css-content">
                                    <p>公司简介</p>
                                        {{recruitmentJane.content}}
                            </div>
                        </div>
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
            recruitmentJane:[]
        };
  },
  mounted(){
			this.getRecruitmentJanes();
		},
  methods: {
    getRecruitmentJanes: function(){
				//招聘简章
				var _this = this;
				axiosApi.axiosGet(
					"/static/www/json/recruitmentJane.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.recruitmentJane = response.data.recruitmentJane;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			}
  }

}
</script>   