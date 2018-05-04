<template>
  <div id="jobfair">
    <my-top></my-top>
    <router-view class="view"> </router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import store from '@/store/store.js'
import MyFooter from '@/components/frontFrame/footer'
import MyTop from '@/components/frontFrame/head'
export default{
  name:"jobfair",
  data () {
    return {
    }
  },
  store,
  components:{MyFooter,MyTop},
 
}

</script>