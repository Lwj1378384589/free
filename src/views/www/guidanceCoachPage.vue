<template>
        <div>
            <div class="container">
                <ul class="css-subnav">
                    <li class="active"><a href="guidance.html">职业辅导</a></li>
                </ul>
                <ol class="css-list-inline css-breadcrumb">
                    <li><a href="/">首页</a></li>
                    <li>&gt;</li>
                    <li><a href="guidance.html">职业辅导</a></li>
                    <li>&gt;</li>
                    <li><a>详情</a></li>
                </ol>
                <div class="css-content" style="padding-bottom:0px; margin-top:20px;">
                    <div class="css-main">
                        <div class="css-article-content">
                            <div class="css-heading">
                                正文介绍
                            </div>
                            <div class="css-content" style="width:auto;">
                                <h2 class="css-title text-center" style="border-bottom:none; padding:0;">
                                    {{guidanceCoachDetail.name}}
                                </h2>
                                <p>{{guidanceCoachDetail.time}}</p>
                                <div class="css-tit">详情</div>
                                <div class="css-content" style="width:auto;">
                                        <!-- <p>公司简介</p> -->
                                            {{guidanceCoachDetail.content}}
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
                guidanceCoachDetail:[]
            };
      },
      mounted(){
			this.getGuidanceCoachDetail();
		},
      methods: {
        getGuidanceCoachDetail: function(){
				//招聘简章
				var _this = this;
				axiosApi.axiosGet(
					"/static/www/json/guidanceCoachDetail.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.guidanceCoachDetail = response.data.guidanceCoachDetail;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			}
      }
    
    }
    </script>   
    <style>
	body {font-size: 16px;}
	</style>