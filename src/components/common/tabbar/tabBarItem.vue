<template>
    <div class="tabBarItem" @click='getClick'>
      <div v-if='!isActive'> <slot name='img'></slot></div> 
      <div v-else> <slot name='img2'> </slot></div>
      <!-- //可以动态的设置颜色 -->
      <div :style="getColor"> <slot name='text'></slot></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
             
        }
       
    },
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    methods:{
        getClick(){
            this.$router.push(this.path);
            
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        getColor(){
            return this.isActive ? {color: this.activeColor} : {}
             
        }
    }
}
</script>
<style scoped>
     .tabBarItem {
        flex:1;
    }
    .active {
        color: pink;
    }
</style>