<template>
  <tab-bar class="tab-bar">
    <tab-bar-item path="/home" activeColor="pink">
      <img src="@/assets/img/tabbar/home.png" slot="img" />
      <img src="@/assets/img/tabbar/home_active.png" slot="img2" />
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="pink">
      <img src="@/assets/img/tabbar/category.png" slot="img" />
      <img src="@/assets/img/tabbar/category_active.png" slot="img2" />
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="pink">
      <img src="@/assets/img/tabbar/cart.png" slot="img" />
      <img src="@/assets/img/tabbar/cart_active.png" slot="img2" />
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="pink">
      <img src="@/assets/img/tabbar/profile.png" slot="img" />
      <img src="@/assets/img/tabbar/profile_active.png" slot="img2" />
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import tabBar from "@/components/common/tabbar/tabBar.vue";
import tabBarItem from "@/components/common/tabbar/tabBarItem.vue";
export default {
  components: {
    tabBar,
    tabBarItem,
  },
};
</script>
<style scoped>
img {
  width: 30px;
  height: 30px;
}
.tab-bar {
  background: #fff;
}
</style>