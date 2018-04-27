<template>
    <div>
    
        <div class="css-main-list">
            <div class="container">
                <ul class="css-subnav">
                    <li class="active">招聘简章</li>
                </ul>
                <form action="">
                    <div class="css-searchbox">
                        <dl class="pull-left css-keywords">
                            <dt>关键词</dt>
                            <dd><input name="keyword" type="text"></dd>
                        </dl>

                        <dl class="pull-left css-input">
                            <dt>发布时间</dt>
                            <select style="width: 150px;">
                                <option>所有</option>
                                <option>近一天</option>
                                <option>近三天</option>
                                <option>近一周</option>
                            </select>
                        </dl>
                        <div class="pull-left css-btn">
                            <button type="submit">搜索</button> 
                        </div>
                    </div>
                    <div class="css-content">
                        <ul class="css-title">
                            <li class="css-col500">名称</li>
                            <li class="css-col350">招聘简章</li>
                            <li class="css-col148">发布时间</li>
                        </ul>
                        <ul class="css-list">
                            <li v-for="ruleList in rulesList">
                                <a  :href="['recruitmentBrochureDetailPage.html?id='+ruleList.id]" class="css-col500">{{ruleList.title}}</a>
                                <span class="css-col350">{{ruleList.auther}}</span>
                                <time class="css-col148">{{ruleList.time}}</time>
                            </li>
                        </ul>
                        <div class="css-pagination">
                            <ul class="css-page" id="yw0"><li class="first hidden"><a href="">首页</a></li>
                                <li class="previous hidden"><a href="">&lt;&lt;</a></li>
                                <li class="page active"><a href="">1</a></li>
                                <li class="page"><a href="">2</a></li>
                                <li class="page"><a href="">3</a></li>
                                <li class="next"><a href="">&gt;&gt;</a></li>
                                <li class="last"><a href="">末页</a></li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>
import axiosApi from "@/api/public"
export default{
    data() {
        return {
           rulesList:[] 
        };
  },
  mounted(){
			this.getRulesList();
		},
  methods: {
    getRulesList: function(){
				//招聘简章列表
				var _this = this;
				axiosApi.axiosGet(
					"/static/www/json/rulesList.json"
				).then((response) => {
					if(response.data.errcode===1){
						alert(response.data.errmsg);
					}else{
						_this.rulesList = response.data.list;
					}
				}),function(error){
					$.alert('对不起，你的请求处理失败了!');   //失败处理
				};
			}/* ,
			find: function(ruleList){
				//
				location.href="recruitmentBrochureDetailPage.html?id="+ruleList.id;
			} */
  }

}
</script>   