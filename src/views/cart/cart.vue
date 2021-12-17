<template>
    <div class="cart">
         <nav-bar class="nav-bar">
             <div slot="center">购物车({{carListLen}})</div>
         </nav-bar>
         <car-item>
         </car-item>
         <cart-button></cart-button>
    </div>
</template>
<script>
import navBar from '@/components/common/navBar/navBar.vue'
import scroll from '@/components/content/scroll/scroll.vue'
import cartButton from './children/cartButton.vue'
import carItem from './children/carItem.vue'
import {mapGetters} from 'vuex'
export default {
    components:{
        navBar,
        carItem,
        scroll,
        cartButton,
    },
    computed:{
        //两种语法
        // ...mapGetters(['carListLen'])
        ...mapGetters(['carListLen','list'])
    },
    // mounted(){
    //     this.$refs.carScroll.refresh();
    // },
    methods:{
       
        
    }
}
</script>
<style scoped>
    .nav-bar {
        position: relative;
        background: pink;
        color: #fff;
    }
    .cart {
        height:100vh;
    }
 
</style>
