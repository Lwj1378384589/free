<template>
    <div>
        <Aside></Aside>
        <router-view></router-view>
    </div>
</template>

<script>
import Aside from "./frame/aside"
export default{
name:'backIndexSecond',
components:{Aside},
}

</script>