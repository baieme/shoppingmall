<template>
  <!-- 首先进行判断保证goods一定要有值 -->
  <div class="detail-item" v-if='Object.keys(goods).length !== 0'>
    <!-- 商品名称 -->
    <div class="title">{{ goods.title }}</div>
    <!-- 价格 -->
    <div class="price">
      <span class="newPrice">{{ goods.price }}</span>
      <span v-show="goods.discountDesc !== ''" class="price-item">
        <span class="oldPrice">
          <del>{{ goods.oldPrice }}</del></span> 
        <span class="discountDesc">{{ goods.discountDesc }}</span>
      </span>
    </div>
    <!-- 销量收藏 -->
    <div class="service">
      <div v-for="(item, index) in goods.columns" :key="index">
        {{item}}
      </div>
    </div>
     <div class="services-item">
            <div v-for="item in goods.services.length -1" :key = 'item.name' >
                <img :src='goods.services[item - 1].icon' />
                <span>{{goods.services[item - 1].name}}</span>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.detail-item {
  margin: 10px 5px 10px;
}
.title {
  font-size: 16px;
  color: #000;
}
.price {
  margin-top: 20px;
}
.newPrice {
  color: red;
  font-size: 20px;
  margin-right: 5px;
}
.oldPrice {
  font-size: 12px;
  color: #808080;
}
.price-item {
  position: relative;
  display: inline-block;
  width:100px;
}

.discountDesc {
  position: absolute;
  /* width:100%; */
  left: 40px;
  top: -5px;
  background: red;
  padding: 4px;
  border-radius: 10px;
  font-size: 12px;
  color: #fff;
}
.service {
  margin-top: 30px;
  display: flex;
  font-size: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(180, 179, 179, 0.5);
}
.service div {
  flex: 1;
}
.services-item {
    display: flex;
    font-size: 12px;
    padding: 10px 0 10px;
    border-bottom: 1px solid rgba(180, 179, 179, 0.5);
    
}
.services-item div {
    flex:1;
   
}
.services-item img {
    width:15px;
    vertical-align: middle;
    margin-right: 3px;
}
</style>