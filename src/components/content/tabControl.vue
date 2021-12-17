<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ isActive: index === currentIndex }"
      @click="getIndex(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    getIndex(index) {
      this.currentIndex = index;
      this.$emit("current", index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.tab-control {
  z-index: 9;
  display: flex;
  text-align: center;
  /* position: sticky; */
  top: 44px;
  background: #fff;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.isActive {
  color: pink;
}
.isActive span {
  border-bottom: 2px solid pink;
  padding-bottom: 4px;
}
</style>