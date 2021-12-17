<template>
    <div>
       <nav-bar class="navBar">
           <div slot="center">我的</div>
       </nav-bar>
       <login></login>
       <price></price>
        <profile-list></profile-list>
    </div>
</template>
<script>
import navBar from '@/components/common/navBar/navBar.vue'
import login from './children/login.vue'
import price from './children/price.vue'
import profileList from './children/profileList.vue'
export default {
    components:{
        navBar,
        login,
        price,
        profileList
    }
}
</script>
<style scoped>
    .navBar {
        background:pink;
        color: #fff;
    }
</style>