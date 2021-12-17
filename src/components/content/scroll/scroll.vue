<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  props:{
      num:{
          type:Number,
          default:0
      },
      pullUpLoad:{
          type:Boolean,
          default:false
      }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,
          probeType:this.num,
          pullUpLoad:this.pullUpLoad,
      });
    //监听滚动的位置
    this.scroll.on('scroll',(pos)=>{
        this.$emit('scroll',pos)
    })
    //监听上拉加载的属性
    this.scroll.on('pullingUp',()=>{
        this.$emit('pullUp')
        console.log('s')
    })
    console.log(this.scroll.y)
  },
  methods: {
      //回到顶部
      scrollTo(x,y,time = 300){
          this.scroll && this.scroll.scrollTo(x,y,time);
      },
      refresh(){
           this.scroll && this.scroll.refresh()
           console.log('加油 ')
      }
    // initScroll() {
      
      
      
    // },
    
  },
};
</script>
<style>
.wrapper {
  overflow: hidden;
  width:100%;

  background-color: #fff;
  /* padding-top: 400px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0; */
}
</style>