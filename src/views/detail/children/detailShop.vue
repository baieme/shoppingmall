<template>
    <div class='detail-shop' v-if='Object.keys(shop).length !== 0'>
        <div class="name" >
          <img :src="shop.logo" alt="">
           <span>{{shop.name}}</span>
        </div>
        <div class="shop-item">
            <div class='shop-sell'>
                <div>{{shop.sells}}</div>
                <div>总销售</div>
            </div>
            <div class='shop-good'>
                <div>{{shop.goods}}</div>
                <div>总宝贝</div>
            </div>
            <table class="score">
                <tr v-for='(item,index) in shop.score' :key='index'>
                    <td>{{item.name}}</td>
                    <td :class="{better1:item.isBetter}" class="better-more">{{item.score}}</td>
                    <td :class="{better2:item.isBetter}" class='better-score'>{{item.score|filter}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        shop:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    data(){
        return {}
    },
    filters:{
        filter(value){
            return value >= 4.7 ? '高' :'低'
        }
    }
}
</script>
<style scoped>
    .detail-shop {
        margin:0 10px;
    }
    .name {
        height: 100px;
        line-height: 100px;
        font-size: 18px;
        font-weight:bold;
        
    }
    img {
        width:70px;
        height:70px;
        border-radius:50%;
        border:1px solid #808080;
        vertical-align: middle;
        margin-right:20px
    }
    .shop-item {
        display: flex;
        height:80px;
        align-items: center;
    }
    .shop-sell,.shop-good {
        flex:2;
        font-size: 18px;
        color: #808080;

       text-align: center;
    }
    .shop-good {
        
        margin-right: 10px;
        border-right:1px solid #808080;
    }
    .score {
        flex:3;
        height: 100%;
        font-size: 14px;

    }
    .score td {
        margin-right: 10px;
    }
    .better-more {
        color: green;
    }
    .better-score {
        color: #fff;
        background: green;
       
    }
    .better1 {
        color: red;
    }
    .better2 {
        background: red;
     
    }
</style>
