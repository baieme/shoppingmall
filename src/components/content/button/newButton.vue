<template>
    <div class="newButton" :class="{'check':ischeck}">
        <img src="~@/assets/img/common/tick.svg" alt="">
    </div>
</template>
<script>
export default {
    props:{
        ischeck:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return {
            
        }

    },
    methods:{
        // checked(){
        //     this.ischeck = !this.ischeck;

        // }
    }
}
</script>
<style scoped>
    /* .newButton img{
        width:20px;
        height:20px;
    } */
    .newButton {
          width:20px;
          height:20px;
          border: 1px solid pink;
          border-radius:15px;
    }
    .check {
         background:pink;
    }
</style>