<template>
    <div id="wrap">
        <div class="container1">
            <ul class="css-left">
                <li class="shouye">
                    <router-link to="/">网站首页</router-link>
                    <!-- <a href="index.html"></a> -->
                </li>
            </ul>
            <ul class="css-right">
                <li>
                        <router-link to="/frontPage/disLogin"> 登录 </router-link>
                    <!-- <a href="disLogin.html"  class="log">登录</a> -->
                </li>
                <li>
                    <router-link to="/frontPage/distRegist">免费注册 </router-link>
                    <!-- <a href="distRegist.html"  class="regs">免费注册</a> -->
                </li>
                <li>
                    <router-link to="/frontPage/help">帮助中心 </router-link>
                    <!-- <a href="help.html"  class="hlp">帮助中心</a> -->
                </li>
            </ul>
        </div>
    </div>

</template>