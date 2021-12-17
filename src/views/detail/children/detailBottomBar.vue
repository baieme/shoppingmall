<template>
  <div class="detail-bottom-bar">
    <!-- <div class="customer">
            <i class="icon"></i>
            <span>客服</span>
        </div>
        <div class="shop">
            <i class="icon"></i>
            <span>店铺</span>
        </div>
        <div class="collection">
            <i class="icon"></i>
            <span>收藏</span>
        </div>
        <div class="add-cart" @click = 'addCart'>
            购物车
        </div>
        <div class="buy">
            购买
        </div> -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click = '$router.push("/cart")'/>
      <van-goods-action-icon
        :icon="isSouChang ? 'star' : 'star-o'"
        :text="isSouChang ? '已收藏' : '收藏'"
        :color="isSouChang ? '#ff5000' : '#ff'"
        @click = 'souChang'
      />
      <van-goods-action-button type="warning" text="加入购物车" @click = 'addCart'/>
      <van-goods-action-button @click = '$router.push("/cart")' type="danger" text="立即购买"   />
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data(){
     return {
         isSouChang : false,
         listLen:null
     }
  },
//   created (){
//       this.listLen = this.$store.state.carList.length;
//   },
  methods: {
    addCart() {
      this.$emit("addCart");
      
    },
    souChang() {
        this.isSouChang = !this.isSouChang
        if(this.isSouChang){
            this.$toast('收藏成功')
        }else{
             this.$toast('取消收藏')
        }

    }
  },
};
</script>
<style scoped>
.detail-bottom-bar {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
}
.detail-bottom-bar span {
  display: block;
  width: 100%;
}
.add-cart,
.buy {
  width: 20%;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.add-cart {
  background: yellow;
}
.buy {
  background: rgb(250, 142, 160);
  color: #fff;
}
.customer,
.shop,
.collection {
  padding-top: 5px;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.icon {
  display: block;
  width: 30px;
  height: 25px;
  background: url("~@/assets/img/detail/detail_bottom.png") no-repeat 0px 0px;
  background-size: 80%;
}

.customer i {
  background-position: 3px -58px;
}
.shop i {
  background-position: 3px -107px;
}
.collection i {
  background-position: 5px 0px;
}
</style>