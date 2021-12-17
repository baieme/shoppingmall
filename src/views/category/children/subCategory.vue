<template>
  <scroll class="content">
    <div class="subCategory">
      <div
        v-for="(item, index) in dataList"
        :key="index"
        :class="{ active: currentIndex == index }"
        @click="isActive(index,item)"
      >
        {{ item.title }}
      </div>
    </div>
  </scroll>
</template>
<script>
import scroll from '@/components/content/scroll/scroll.vue'

export default {
  props: {
    dataList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components:{
      scroll
  },
  data(){
      return {
          currentIndex:0,
      }
  },
  methods:{
      isActive(index,item){
          const value = {
              maitKey:item.maitKey,
              miniWallkey:item.miniWallkey,
              index
          }
          this.currentIndex = index;
          console.log(value)
          this.$emit('isActive',value)
      }
  }
};
</script>
<style scoped>
.subCategory {
  width: 100px;
  background: #ebebeb;
}
.subCategory div {
  width: 100px;
  height: 45px;
  text-align: center;
  line-height: 45px;
}
.active {
  background: #fff;
  color: red;
  border-left: 2px solid red;
}
.content {
    position: absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
    overflow: hidden;
    background: #ebebeb;
    width: 100px;
}
</style>
