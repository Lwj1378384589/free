<template>
    <div id="backIndex" style="float:left; min-height:750px;">
         <Aside></Aside>
        <div style="width:988px; height:640px; border: 1px solid #ccc; background:#fff; float:left;">
            <div class="css-text" style="margin-left: 220px; padding-top: 110px;">
                            <p class="css-p1">
                                慧安&nbsp;(HuiAn)
                            </p>
                            <p class="css-p1" style="padding-top: 0;">
                                    智慧就业云平台
                            </p>
                            <p class="css-p2">
                                在这里
                            </p>
                            <p class="css-p2">
                                连接
                            </p>
                            <p class="css-p2">
                                职场精英
                            </p>
                </div>

        </div>

                <!-- <div class="css-text">
                            <p class="css-p1">
                                慧安&nbsp;(HuiAn)
                            </p>
                            <p class="css-p1" style="padding-top: 0;">
                                    智慧就业云平台
                            </p>
                            <p class="css-p2">
                                在这里
                            </p>
                            <p class="css-p2">
                                连接
                            </p>
                            <p class="css-p2">
                                职场精英
                            </p>
                </div> -->
    </div>
</template>
</html>

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
<script>
import store from '@/store/store.js'
export default {
  data () {
    return {
    }
  },
  store,
}
</script>
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
body{
 background: #f5f5f5;
}
.el-menu{
    border: 1px solid #ccc;
}
#aside{
    width: 200px;
height: auto;
margin: 0;
margin-right:10px;
float: left;
    position: static;
}
</style>
