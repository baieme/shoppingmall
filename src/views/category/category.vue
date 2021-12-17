<template>
  <div class="cate">
    <nav-bar class="nav-bar">
      <div slot="center" style="color:#fff">分类</div>
    </nav-bar>
    <sub-category :dataList="dataList" @isActive="isActive"></sub-category>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @current="current"
        ref="control1"
        :class="{'fix':fixed}"
      ></tab-control>
    <scroll 
        class="scroll"
        ref="sc"
        :num="3"
        @scroll="getTop"
        :pullUpLoad="true"
   
    >
     
      <sub-category-item :categoryList="categoryList"></sub-category-item>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @current="current"
        ref="control2"
      ></tab-control>
      <goods-list :goods="subcategoryList"></goods-list>
    </scroll>
  </div>
</template>
<script>
import navBar from "@/components/common/navBar/navBar.vue";
import { category, getCategory, getCategoryList } from "@/network/category.js";
import subCategory from "./children/subCategory.vue";
import subCategoryItem from "./children/subCategoryItem.vue";
import scroll from "@/components/content/scroll/scroll.vue";
import tabControl from "@/components/content/tabControl.vue";
import goodsList from "@/components/content/goodsList/goodsList.vue";
export default {
  data() {
    return {
      dataList: [],
      categoryList: [],
      subcategoryList: [],
      title: ["流行", "新款", "精选"],
      currentIndex: 0,
      type: "pop",
      fixed:false
    };
  },
  components: {
    navBar,
    subCategory,
    subCategoryItem,
    scroll,
    tabControl,
    goodsList,
    offsetTop:0,
  },
  methods: {
    isActive({ maitKey, miniWallkey,index}) {
      this.currentIndex = index;
      this.getCategory(maitKey);
      this.getCategoryList(miniWallkey, this.type);
    },
    getTop(pos){
        this.fixed = (-pos.y) > this.offsetTop;
        // console.log(pos)
    },
    current(index) {
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
      this.getCategoryList(this.dataList[index].miniWallkey,this.type)
      this.$refs.control1.currentIndex = index;
      this.$refs.control2.currentIndex = index;
    },
    category() {
      category().then((el) => {
        this.dataList = el.data.category.list;
        console.log(this.dataList);
        this.getCategory(this.dataList[0].maitKey);
        this.getCategoryList(this.dataList[0].miniWallkey, "pop");
      });
    },
    getCategory(num) {
      getCategory(num).then((el) => {
        this.categoryList = [...el.data.list];
        console.log(this.categoryList);
      });
    },
    getCategoryList(num, type) {
      getCategoryList(num, type).then((el) => {
        this.subcategoryList = [...el];
        console.log(this.subcategoryList);
      });
    },
  },
  created() {
    this.category();
    this.$bus.$on('getLoad',()=>{
        this.offsetTop = this.$refs.control2.$el.offsetTop;
        console.log(this.offsetTop );
    })
  },
};
</script>
<style scoped>
.nav-bar {
  background: pink;
}
.cate {
  height: 100vh;
}

.fix {
    position: relative;
    width:calc(100% - 100px);
    top:-1px;
    left: 100px;
    right:0;
    z-index: 100;
}
.scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  overflow: hidden;
  width: calc(100% - 100px);
}
</style>