<template>
    <div class="subCategoryItem">
        <div v-for="(item,index) in categoryList" :key='index' class="item">
            <a :href="item.link">
                <img :src="item.image" alt="" @load = 'getLoad'>
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        categoryList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            count:0
        }
    },
    methods:{
        
        getLoad(){
            this.count++;
            if(this.categoryList.length == this.count){
                this.$bus.$emit('getLoad')
            }
        }
    }
}
</script>
<style scoped>
    .item img{
        width:65px;
    }
    .subCategoryItem {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
    }
     .subCategoryItem div {
         width:33%;
         margin: 10px 0;

     }
     .subCategoryItem p {
         font-size: 14px;
     }
</style>
