<template>
  <div class="car-item">
    <scroll class="scroll-content" ref='carScroll'>
      <car-item-list v-for="item in list" :key='item.iid' :product = 'item'></car-item-list>
    </scroll>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import scroll from '@/components/content/scroll/scroll.vue'
import newButton from '@/components/content/button/newButton.vue'
import carItemList from './carItemList.vue'
export default {
  data() {
    return {
      ItemList: [],
     
    };
  },
  computed: {
    // list(){
    //   return this.$store.state.carList;
    // }
    ...mapGetters(['list','carListLen']),

  },
  methods: {
      check(item){
          item.checked = !item.checked;
      }
  },
  components:{
      scroll,
      newButton,
      carItemList
  },
  mounted(){
      this.$refs.carScroll.refresh()
    //   this.list = this.$store.getters.list
  }
};
</script>
<style scoped>

.car-item {
    width: 100%;
    /* height:100%; */
}
   .scroll-content {
        position:absolute;
        top:44px;
        bottom:100px;
        left:0;
        right:0;
        overflow: hidden;
    }

</style>