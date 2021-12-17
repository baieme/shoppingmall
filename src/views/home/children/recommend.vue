<template>
    <div class="recommend">
        <div v-for="item in recommend" :key='item.image' class="recommend-item">
          <a :href="item.link">
             <img :src="item.image" alt="">
             <span>{{item.title}}</span>
          </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    },
    
}
</script>
<style scoped>
    .recommend {
        display: flex;
        text-align:center;
        font-size: 14px;
        padding: 15px 0 30px;
        border-bottom: 6px solid #eee;
    }
    .recommend-item {
        flex:1
    }
    .recommend span {
        display: block;
    }
    .recommend-item img {
        width:70px;
        height:70px;
        margin-bottom: 10px;
    }
</style>