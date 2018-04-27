<template>
        <div>
            <div id="detail" class="css-out-content" style="padding:0;">
                <div class="container" style="padding-bottom:0;">
                        <ol class="css-breadcrumb">
                            <li><a href="index.html">首页</a></li>
                            <li> > </li>
                            <li><a href="recruitment.html">岗位信息</a></li>
                            <li> > </li>
                            <li><a href="#this">详情</a></li>
                        </ol>
                        <div class="css-content" style="padding-bottom:0;">
                            <div class="css-article-content">
                                <div class="tpp">
                                    <div class="top">
                                        <div class="lt" id="zwtitle">
                                               {{jobDetails.name}}
                                        </div>
                                        <div class="ct">{{jobDetails.salary}}</div>
                                        <router-link class="rt" to="/www/disLogin" id="example" style=" margin-right: 15px; font-size:16px; " >申请职位</router-link>
                                        <router-link class="rt bg2" to="/frontPage/disLogin" id="example1" style=" font-size:16px; " >收藏职位</router-link>
                                    </div>
                                </div>
                                <div class="css-con">
                                    <div class="css-left1">
                                        <ul class="css-xuqiu">
                                            <li>{{jobDetails.exp}}</li>
                                            <li class="li2">{{jobDetails.degree}}</li>
                                            <li class="li3">招聘{{jobDetails.number}}人</li>
                                            <li class="li4 w167">{{jobDetails.time}}发布</li>
                                        </ul>
            
                                        <div class="css-ms">
                                            <div class="tp">
                                                <div class="dian"></div>
                                                <div class="dian1">职位信息</div>
                                            </div>
                                            <ul class="css-text" style="padding-top:0;">
                                                <li>单位性质：<span>{{jobDetails.title}}</span></li>
                                                <li>单位行业：<span>{{jobDetails.title}}</span></li>
                                                <li>单位规模：<span>{{jobDetails.title}}</span></li>
                                                <li>职位性质：<span>{{jobDetails.title}}</span></li>
                                                <li>语言能力：<span>{{jobDetails.title}}</span></li>
                                                <li>工作地点：<span>{{jobDetails.city.name}}</span></li>
                                                <li>职位类别：<span>{{jobDetails.title}}</span></li>
                                            </ul>
                                            <div style="color: #ffffff">1234</div>
                                        </div>
            
                                        <div class="css-ms">
                                            <div class="tp">
                                                <div class="dian"></div>
                                                <div class="dian1">职位描述</div>
                                            </div>
                                            <ul class="css-text" style="padding-top:0;">
                                                <li>{{jobDetails._id}}</li>
                                            </ul>
                                            <div style="color: #ffffff">1234</div>
                                        </div>                          
                                        <div class="css-ms">
                                            <div class="tp">
                                                <div class="dian"></div>
                                                <div class="dian1">公司简介</div>
                                            </div>
                                            <p style="width:1100px; line-height: 30px; padding-top:10px; padding-left: 20px;">
                                                {{jobDetails.content}}
                                            </p>
            
                                            <div style="color: #ffffff">1234</div>
                                        </div>
                                        <div class="css-ms">
                                            <div class="tp">
                                                <div class="dian"></div>
                                                <div class="dian1">联系方式</div>
                                            </div>
                                            <p style="width: 711px; line-height: 30px; padding-left: 20px;">电话：<span>{{jobDetails.phone}}</span></p>
                                            <p style="width: 711px; line-height: 30px; padding-left: 20px;">邮箱：<span>{{jobDetails.email}}</span></p>
                                            <p style="width: 711px; line-height: 30px; padding-left: 20px;">邮编：<span>{{jobDetails.code}}</span></p>
                                            <p style="width: 711px; line-height: 30px; padding-left: 20px;">单位网址：<span>{{jobDetails.url}}</span></p>
            
                                            <div style="color: #ffffff">1234</div>
                                        </div>
                                    </div>
                                    <div class="css-right">
            
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
                jobDetails:{}
            };
      },
      mounted(){
			this.getJobDetails();
		},
      methods: {
        getJobDetails: function(){
				//岗位信息详情
				var _this = this;
				var url ="/apis/jobs/jobinfo/fetch?_id="+_this.$route.query._id;
				axiosApi.axiosGet(
					url
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.jobDetails = response.data.data;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			}
      }
    
    }
    </script>   

    <style>
    body{font-size:16px;}
    </style>