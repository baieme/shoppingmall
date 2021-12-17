<template>
  <div class="goodsListItem" @click='goDetail'>
    <img :src="getImg" alt="" @load="imgLoadItem" />
    <p class="text">{{ goodsList.title }}</p>
    <span class='price'>{{ goodsList.price }}</span>
    <span>{{ goodsList.cfav }}</span>
  </div>
</template>
<script>
export default {
  props: {
    goodsList: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods:{
    imgLoadItem(){
      if(this.$route.path.indexOf('/home') !== -1){
         this.$bus.$emit('imgLoad')
      }else {
        this.$bus.$emit('load')
      }
    },
    goDetail(){
      this.$router.push('/detail/'+this.goodsList.iid)
    }
  },
  computed:{
    getImg(){
       return  this.goodsList.img || this.goodsList.image || this.goodsList.show.img
    }
  }
};
</script>
<style scoped>
    .goodsListItem {
    width: 48%;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
    }
    .goodsListItem img {
    width: 100%;
    border-radius: 5px;
    }
    .text {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
    .price {
        position: relative;
        color: pink;
        margin-right: 20px;
        
    }
     .goodsListItem span {
         font-size: 14px;
     }
     .goodsListItem .price::after {
         content:'';
         position:absolute;
         right: -19px;
         top: 3px;
         width:14px;
         height:14px;
         background: url('~@/assets/img/common/favor.png') #fff;
         background-size: 14px 14px;
     }
</style>