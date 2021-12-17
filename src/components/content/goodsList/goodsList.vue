<template>
  <div class="goodsList">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goodsList="item"
      
    ></goods-list-item>
  </div>
</template>
<script>
import goodsListItem from "./goodsListItem.vue";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    goodsListItem,
  },
  methods:{
    //   goDetail(item){
    //       this.$router.push('/detail/' + item.idd)
    //       console.log('1')
    //   }
  }
};
</script>
<style >
.goodsList {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>