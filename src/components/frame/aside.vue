<template>
    <div id="aside">
        <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark" :default-openeds="openeds">
            <el-submenu index="1" class="libg" style="border-bottom:2px solid #ffffff;"> 
            <template slot="title">
                <i class="el-icon-location"></i>
                <span class="css-a">企业信息</span>
              </template>
              <el-menu-item-group>
                <router-link to="/ent/intoupdatepassword"><el-menu-item style="text-align:center;" index="1-1" >修改密码</el-menu-item></router-link>
                <!-- <a href="/ent/intoupdatepassword"><el-menu-item style="text-align:center;" index="1-1" >修改密码</el-menu-item></a> -->
              </el-menu-item-group>
              </el-submenu>
              
              <el-submenu index="2" class="libg" style="border-bottom:2px solid #ffffff;"> 
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="css-a">宣讲会</span>
              </template>
              <el-menu-item-group>
                <router-link to="/careertalk/into"><el-menu-item style="text-align:center;" index="2-1" >申请宣讲会</el-menu-item></router-link>
                <!-- <a href="/careertalk/into"><el-menu-item style="text-align:center;" index="2-1" >申请宣讲会</el-menu-item></a> -->
                <router-link to="/careertalk/careertalkList"><el-menu-item style="text-align:center;" index="2-2">查看宣讲会</el-menu-item></router-link>
                <!-- <a href="/careertalk/allcareertalk"><el-menu-item style="text-align:center;" index="2-2">查看宣讲会</el-menu-item></a> -->
              </el-menu-item-group>
              </el-submenu>
              
              <el-submenu index="3" class="libg" style="border-bottom:2px solid #ffffff;"> 
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="css-a">招聘信息</span>
              </template>
              <el-menu-item-group >
                <router-link to="/jobs/jobsAdd"><el-menu-item style="text-align:center;" index="3-1">发布招聘信息</el-menu-item></router-link>
                <router-link to="/jobs/jobsList"><el-menu-item  style="text-align:center;" index="3-2">查看招聘信息</el-menu-item></router-link>
              </el-menu-item-group>
              </el-submenu>
              
              <el-submenu index="4" class="libg" style="border-bottom:2px solid #ffffff;"> 
              <template slot="title">
                <i class="el-icon-location"></i>
                <span class="css-a">招聘会</span>
              </template>
              <el-menu-item-group>
                <router-link to="/jobfair/into"><el-menu-item style="text-align:center;" index="4-1">申请招聘会</el-menu-item></router-link>
                <!-- <a href="/jobfair/into"><el-menu-item style="text-align:center;" index="4-1">申请招聘会</el-menu-item></a> -->
                <router-link to="/jobfair/jobfairList"><el-menu-item style="text-align:center;" index="4-2">查看招聘会</el-menu-item></router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
    </div>
</template>
<script>
import { menus } from '@/utils/menus';
export default {
  data () {
    return {
      menus,
      openeds: ['1','2','3','4'],
      uniqueOpened: false
    }
  }
}

</script>
<style>
#aside{
width:200px;
height:510px;
margin: 0;
float:left;
position: fixed;
top:150px;
}

</style>