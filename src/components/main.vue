<template>
    <div id="backIndex">
      <my-header></my-header>
      <router-view class="view" style=" width:1200px; margin:0 auto;  margin-top:65px; min-height:750px; clear:both; "> </router-view>
      <!-- <my-aside></my-aside> -->
      <my-footer></my-footer>
    </div>
</template>

<script>
import MyHeader from '@/components/frame/header'
import MyFooter from '@/components/frame/footer'
import MyAside from '@/components/frame/aside'
export default {
  name: 'backIndex',
  data () {
    return {
    }
  },
  components:{MyHeader,MyFooter,MyAside}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #mains{
  width: 900px;
  height:800px;
  float: left;
  margin-left: 220px;

}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
