<template>
  <div id="frontPageMain">
    <my-top></my-top>
    <my-header></my-header>
    <router-view class="view"> </router-view>
    <my-footer></my-footer>
    
  </div>
</template>

<script>
import store from '@/store/store.js'
import MyFooter from '@/components/frontFrame/footer'
import MyHeader from '@/components/frontFrame/header'
import MyTop from '@/components/frontFrame/top'
export default{
  name:"frontPageMain",
  data () {
    return {
    }
  },
  store,
  components:{MyFooter,MyHeader,MyTop},
 
}

</script>