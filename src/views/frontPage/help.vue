<template>
        <div>
        <div class="container" style="padding-bottom:270px;">
                <ul class="css-subnav">
                    <li class="active"><a href="help.html">帮助中心</a></li>
                </ul>
                <ol class="css-list-inline css-breadcrumb">
                    <li><a href="/">首页</a></li>
                    <li>&gt;</li>
                    <li><a href="help.html">帮助中心</a></li>
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
                            <h2 class="text-center" style="border-bottom:none; padding:0;">
                                {{helpDetail.name}}
                            </h2>
                            <!-- <p>{{helpDetail.time}}</p> -->
                            <div class="css-tit">详情</div>
                            <div class="css-content" style="width:auto;">
                                     <p>帮助中心</p> 
                                        {{helpDetail.content}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>
    
    <script>
    export default{
        data() {
            return {
                helpDetail:[]
            };
      },
      mounted(){
			this.getHelpDetail();
		},
      methods: {
        getHelpDetail: function(){
				//招聘简章
				var _this = this;
				_this.$http.get(
					"static/frontPage/json/helpDetail.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.helpDetail = response.data.helpDetail;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			}
      }
    }
    </script>   