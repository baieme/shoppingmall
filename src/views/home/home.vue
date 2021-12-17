<template>
  <div class="home">
    <!-- 标题栏部分 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @current="getIndex"
        ref="control1"
        :class="{'fixed':isFixed}"
      >
      </tab-control>
    <scroll
      class="content"
      ref="sc"
      :num="3"
      @scroll="getTop"
      :pullUpLoad="true"
      @pullUp="pull"
    >
      <!-- 轮播图 -->
      <my-swiper :swiperList="banner"></my-swiper>
      <!-- 导航区域 -->
      <recommend :recommend="recommend"></recommend>
      <!-- 本周流行 -->
      <feature></feature>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @current="getIndex"
        ref="control2"
      >
      </tab-control>
      <!-- 内容的展示 -->
      <goods-list :goods="goods[type].list" ></goods-list>
    </scroll>
    <!-- 回到首页 -->
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>
<script>
import navBar from "@/components/common/navBar/navBar.vue";
import tabControl from "@/components/content/tabControl.vue";
import MySwiper from "@/components/common/swipe/swipe.vue";
import goodsList from "@/components/content/goodsList/goodsList.vue";
import scroll from "@/components/content/scroll/scroll.vue";
import backTop from "@/components/content/backTop/backTop.vue";

import recommend from "./children/recommend.vue";
import feature from "./children/feature.vue";

import { getHomeData, getHomeGoods } from "@/network/data.js";
import { debounce } from "@/common/util.js";

export default {
  components: {
    navBar,
    MySwiper,
    recommend,
    feature,
    tabControl,
    goodsList,
    scroll,
    backTop,
  },

  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      type: "pop",
      isShow: false,
      offsetTop: 0,
      isFixed: false,
      scrollY:0
    };
  },
  created() {
    // 获得数据
    this.getHome();
    //获得流行款的数据
    this.getGoods("pop");
    //获得新款的数据
    this.getGoods("new");
    //获得精选的数据；
    this.getGoods("sell");
  },
  mounted() {
    //当页面中的图片重新加载完了，重新刷新
    const refresh = debounce(this.$refs.sc.refresh, 500);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
    this.$bus.$on('bannerLoad',()=>{
      //获得tabControl的高度
     this.offsetTop = this.$refs.control2.$el.offsetTop;
     console.log(this.$refs.control2.$el.offsetTop,111)
    });
    
  },
  //进入时保证在原来位置
  activated() {
        this.$refs.sc.scroll.refresh();
        this.$refs.sc.scrollTo(0,this.scrollY,0);
        
    },
  //保留离开时的位置
  deactivated(){
      this.scrollY = this.$refs.sc.scroll.y ? this.$refs.sc.scroll.y : 0;

  },
  methods: {
    getHome() {
      getHomeData().then((el) => {
        this.banner = el.data.banner.list;
        this.recommend = el.data.recommend.list;
        console.log(this.banner);
        console.log(el.data);
      });
    },

    // 当滚到超过1000px的时候出现top按钮
    getTop(pos) {
      
      this.isShow = (-pos.y) > 1000;
      this.isFixed = (-pos.y) > this.offsetTop;
    },

    backTop() {
      //回到首页
      this.$refs.sc.scrollTo(0, 0);
    },
    //上拉加载更多
    pull() {
      this.getGoods(this.type);
    },
    getGoods(type) {
      //获得当前页数
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((el) => {
        //获得当前页数的数据
        this.goods[type].list.push(...el.data.list);
        console.log(this.goods[type].list,1);
        console.log(el.data);
        //继续下拉加载更多
        this.$refs.sc.scroll.finishPullUp();
      });
    },
    getIndex(index) {
      switch (index) {
        case 0:
          this.type = "pop";
          break;
        case 1:
          this.type = "new";
          break;
        case 2:
          this.type = "sell";
          break;
      };
      this.$refs.control1.currentIndex = index;
      this.$refs.control2.currentIndex = index;
    },
  },
};
</script>
<style scoped>
.nav-bar {
  background: rgb(247, 170, 182);
  color: #fff;
}
.home {
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.fixed {
    position: relative;
    top:-1px;
    left: 0;
    right:0;    
    z-index: 5;
}
</style>