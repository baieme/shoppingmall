<template>
    <div class='detail-recommend' v-if="Object.keys(rate).length !== 0">
        <div class="user-commend clear-fix">
           <div class="commend-left">
               用户评价
           </div>
             <div class="commend-right">
                 <span>更多</span>
                 <img src="~@/assets/img/common/arrow-right1.png" alt="">
             </div>
        </div>
        <div class="user">
             <img :src="rate.user.avatar" alt="">
             <span>{{rate.user.uname}}</span>
        </div>
        <div class="content">
            <p>{{rate.content}}</p>
            <p class="explain">{{rate.explain}}</p>
        </div>
        <!-- 时间 -->
        <div class="data">
            <span>{{getDate}}</span>
            <span>{{rate.style}}</span>
        </div>
        
    </div>
</template>
<script>
import {formatDate} from '@/common/util.js'
export default {
    props:{
        rate:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    computed:{
        getDate(){
          const date = new Date(this.rate.created * 1000)
          return formatDate(date,'yyyy-MM-dd')
        }
    }
}
</script>
<style scoped>
    .detail-recommend {
        border-top:3px solid #cccaca;
        padding: 20px 10px 5px;
        font-size: 12px;
    }
    .user-commend {
        height:50px;
        line-height:50px
    }
    .commend-left {
        float: left;
    }
    .user img{
        width:40px;
        height:40px;
        border-radius: 50%;
        border: 1px solid #bbb8b8;
        vertical-align: middle;
        margin:0 10px 10px 0;
    }
    .commend-right {
        float: right;
    }
    .commend-right img {
        width:16px;
        height:16px;
        vertical-align: middle;
    }
    .explain {
        margin-top: 10px;
    }
    .data span:nth-child(2) {
        margin-left: 60px;
    }
</style>