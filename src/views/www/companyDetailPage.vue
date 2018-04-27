<template>
    <div>
        <div class="css-content" style="padding-bottom:20px;">
                <!-- <div class="weizhi">
                    <p><a href="index.html">首页</a>&nbsp;>&nbsp;<a href="#">单位信息</a>&nbsp;>&nbsp;<a href="#">详情</a></a></p>
                </div> -->
                <div class="css-article-content">
                    <div class="tpp">
                        <div class="top">
                             {{enterpriseDetails.name}}
                        </div>
                    </div>
                    <div class="css-con">
                        <div class="css-left1">
                            <div class="css-ms">
                                <div class="tp" style="border-top: none;">
                                    <div class="dian"></div>
                                    <div class="dian1">单位信息</div>
                                </div>
                                <ul class="css-text" style="padding-top:0;">
                                    <li>所在城市：<span>{{enterpriseDetails.city.name}}</span></li>
                                      <li>单位地址：<span>{{enterpriseDetails.address}}</span></li>
                                       <li>邮编：<span>{{enterpriseDetails.email}}</span></li>
                                    <li>联系人：<span>{{enterpriseDetails.contact}}</span></li>
                                </ul>
                                <div style="color: #ffffff">1234</div>
                            </div>
                            <div class="css-ms">
                                <div class="tp">
                                    <div class="dian"></div>
                                    <div class="dian1">单位说明</div>
                                </div>
                                <p style="width:1100px; line-height: 30px; padding-left: 20px;">
                                    {{enterpriseDetails.content}}
                                </p>
    
                                <div style="color: #ffffff">1234</div>
                            </div>
                            <div class="css-ms">
                                <div class="tp">
                                    <div class="dian"></div>
                                    <div class="dian1">热招职位</div>
                                </div>
                                <table class="css-table css-table-border" style="margin-top: 30px;">
                                    <thead>
                                        <tr>
                                            <th>职位名称</th>
                                            <th>招聘人数</th>
                                            <th>相关专业</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="hjim in hotJobs">
                                            <td>{{hjim.name}}
                                                <!-- <a class="text-primary" @click="find(hjim)">{{hjim.name}}</a> -->
                                            </td>
                                            <td>{{hjim.count}}</td>
                                            <td>{{hjim.requirement}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style="color: #ffffff">1234</div>
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
        enterpriseDetails:{},
    hotJobs:[]
    };
},
mounted(){
    this.getEnterpriseDetails();
    //this.getHotJobs();
},
methods: {
getEnterpriseDetails: function(){
        //获取企业详细信息
        var _this = this;
        
        var url ="/apis/jobs/campus/fetch?_id="+_this.$route.query._id;
        axiosApi.axiosGet(
                url
            //"json/enterpriseDetails.json"
        ).then((response) => {
            if(response.data.errcode===1){
                alert(response.data.errmsg);
            }else{
                _this.enterpriseDetails = response.data.data
                _this.hotJobs = response.data.data.jobs
            }
        }),function(error){
            $.alert('对不起，你的请求处理失败了!');   //失败处理
        }
    }
}

}
</script>   