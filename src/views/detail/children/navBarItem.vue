<template>
  <nav-bar>
    <div slot="left" class="left" @click="back">
      <img src="@/assets/img/common/back.svg" />
    </div>
    <div slot="center" class="center">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="center-item"
        :class="{ active: index === currentIndex }"
        @click="getIndex(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>
<script>
import navBar from "@/components/common/navBar/navBar.vue";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    navBar,
  },
  methods: {
    getIndex(index) {
      this.currentIndex = index;
      this.$emit('getIndex',this.currentIndex)
    },
    back() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
    .center {
    display: flex;
    font-size: 14px;
    }
    .center-item {
    flex: 1;
    }
    .active {
    color: pink;
    }
    .left {
        position: relative;
        
    }
    .left img {
        position:absolute;
        left: 5px;
        top: 10px;
    }
</style>