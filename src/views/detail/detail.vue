<template>
  <div class="detail">
      <!-- 导航栏部分 -->
     <nav-bar-item @getIndex='getIndex' ref='nav'></nav-bar-item>
     <scroll class="content" ref="scroll" @scroll = 'getPosition' :num = '3'>
       <!-- 轮播图 -->
     <detail-swipe :banner = 'detailBanner'></detail-swipe>
     <!-- 商品详细信息 -->
     <detail-item :goods = 'goods'></detail-item>
     <!-- 店铺信息部分 -->
     <detail-shop :shop = 'shop'></detail-shop>
     <detail-good :imagesInfo = 'detail' @imgLoad = 'imgLoad'></detail-good>
     
     <!-- 商品参数信息的展示 -->
     <detail-params :params = 'params' ref='params'></detail-params>

     <!-- 评论 -->
     <detail-commend :rate ='rate' ref="rate"></detail-commend>
     <!-- 推荐 -->
    <goods-list :goods = 'recommend' ref="recommend"></goods-list>
   
     </scroll>
     <!-- 回到首页 -->
      <back-top @click.native="backTop" v-show="isShow"></back-top>
     <!-- 底部导航 -->
     <detail-bottom-bar @addCart = 'add'></detail-bottom-bar>
  </div>
</template>
<script>
import { getDetail, getDate,getShop,getRecommend } from "@/network/detail.js";
import {debounce} from '@/common/util.js'
import navBarItem from "./children/navBarItem.vue";
import detailSwipe from './children/detailSwipe.vue'
import detailItem from './children/detailItem.vue'
import detailShop from './children/detailShop.vue'
import detailGood from './children/detailGood.vue'
import detailParams from './children/detailParams.vue'
import detailCommend from './children/detailCommend.vue'
import goodsList from '@/components/content/goodsList/goodsList.vue'
import detailBottomBar from './children/detailBottomBar.vue'
import backTop from '@/components/content/backTop/backTop.vue'


import scroll from '@/components/content/scroll/scroll.vue'
export default {
  name:'detail',
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
      detailBanner:null,
      goods:{},
      shop:{},
      detail:{},
      params:{},
      rate:{},
      recommend:[],
      current:0,
      themeTop:[],
      positionY:0,
      isShow:false,
 
      iid:null,
      listLen:null
    };
  },
  created(){
    this.getDetailDate()
    getRecommend().then(el=>{
      console.log(el.data.list)
      this.recommend = el.data.list;
    })
    this.iid = this.$route.params.iid;
    console.log(this.iid)
  },
  mounted(){
    //当页面中的图片重新加载完了，重新刷新
    const refresh = debounce(this.$refs.sc.refresh, 500);
    this.$bus.$on("Load", () => {
      refresh();
    });
  },
  methods: {
    getDetailDate() {
      getDetail(this.$route.params.iid).then((el) => {
          const data = el.result;
         this.detailBanner = data.itemInfo.topImages;
         console.log(data)
         this.goods = new getDate(data.itemInfo,data.columns,data.shopInfo.services)
         this.shop = new getShop(data.shopInfo);
         this.detail = data.detailInfo;
         this.params = data.itemParams;
         if(data.rate.cRate !== 0){
           this.rate = data.rate.list[0];
           console.log(this.rate);
         }
         console.log(this.goods,30);
         console.log(this.detail);
         console.log(data.shopInfo)
         console.log(this.shop)
      });
    },
    //加入购物车，将商品信息，都放到一个对象那个中，传入vuex中
    add(){
      const product = {}
      product.title = this.goods.title;
      product.price = this.goods.oldPrice;
      product.desc =  this.goods.desc;
      product.img = this.detailBanner[0];
      product.iid = this.iid;
      
      // this.product.count = 1;
       this.$store.dispatch('addCart',product);//dispatch是操作actions
       console.log(this.$store.state.carList,'加油');
      // console.log(this.product,300)
      // console.log(this.$store.state.carList.filter(el => el.iid == this.iid))
      this.listLen = this.$store.state.carList.filter(el => el.iid == this.iid)[0].count
      
      this.$toast(`已加入购物车，当前该商品数量${this.listLen}`)
    },
    // 获得当前滚动的位置
    getPosition(value){
      this.positionY = -(value.y);
      
      this.isShow = -(value.y) > 1000;
    
      // 滚动对应的nav
      for(let i = 0;i < this.themeTop.length;i ++){
        if(this.currentIndex !== i && this.positionY >= this.themeTop[i]){
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
     backTop() {
      //回到首页
      this.$refs.scroll.scrollTo(0, 0);
    },

    //点击那个小导航栏就跳到对应的位置
    getIndex(value){
      this.current = value;
      this.$refs.scroll.scrollTo(0,-this.themeTop[this.current])
    },
    // isLoad(){
    //   console.log('1')
    //   console.log(this.$refs.scr.scroll)
    //   this.$refs.scr.scroll.scrollerHeight = 100000;
    
    // }

    imgLoad() {
      this.$refs.scroll.refresh();
      // 图片加载完获取classList
      // this.getClassList();
      this.themeTop = [];
      this.themeTop.push(0)
      this.themeTop.push(this.$refs.params.$el.offsetTop)
      this.themeTop.push(this.$refs.rate.$el.offsetTop)
      this.themeTop.push(this.$refs.recommend.$el.offsetTop)
    },
  },
  // mounted(){
  //   this.$refs.scr.refresh()
  // },
  components: {
    navBarItem,
    detailSwipe,
    detailItem,
    detailShop,
    detailGood,
    detailParams,
    scroll,
    detailCommend,
    goodsList,
    detailBottomBar,
    backTop
  },
};
</script>
<style scoped>
    .detail {
      position: relative;
      z-index: 9;
      background:#fff;
      height:100vh;
    }
    .nav-bar-item {
      position: relative;
    }
    .content {
      position: absolute;
      top: 44px;
      right: 0;
      bottom: 50px;
      left: 0;
      overflow: hidden;
      width: 100%;
      background-color: #ffffff;
    }
</style>