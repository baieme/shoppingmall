<template>
  <swipe class="my-swipe">
    <swipe-item class="slide1" v-for="item in swiperList" :key="item.url">
      <a :href="item.href"><img :src="item.image" @load="bannerLoad" /></a>
    </swipe-item>
  </swipe>
</template>
<script>
export default {
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    swiperList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    bannerLoad() {
      if (!this.isLoad) {
        this.$bus.$emit("bannerLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>
<style scoped>
.my-swipe {
  height: 180px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>