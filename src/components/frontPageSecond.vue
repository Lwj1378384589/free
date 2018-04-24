<template>
    <div>
        <my-header></my-header>
        <router-view class="view"> </router-view>
    </div>  
</template>
<script>
import MyHeader from '@/components/frontFrame/header'
export default{
    name:"frontPageSecond",
    data(){
        return{

        }
    },
    components:{MyHeader}

}
</script>