<template>
  <swipe class="my-swipe">
    <swipe-item class="slide1" v-for="(item, index) in banner" :key="index">
      <img :src="item" alt="" @load="imgLoad" />
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
    banner: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("imgLoad");
        this.isLoad = true;
      }
    },
  },
};
</script>
<style scoped>
.my-swipe {
  height: 240px;
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
</style>