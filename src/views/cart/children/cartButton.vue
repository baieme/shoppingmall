<template>
    <div class="carButton">
        <div class="button">
            <new-button @click.native = 'allCheck' :ischeck = 'allChecked'></new-button>
        </div>
        <div class="add">
            合计:
            <span style="color:red">{{price}}</span> 
            元
        </div>
        <div class="amount" @click = 'toAdd'>
            去结算({{carListLen}})
        </div>
    </div>
</template>
<script>
import  { mapGetters } from 'vuex'
import newButton from '@/components/content/button/newButton.vue'
export default {
    computed:{
        ...mapGetters(['list','carListLen']),
        // 计算总价
        price(){
          return this.list.filter(el => el.checked).reduce((pre,cur)=>{
               return pre + Number(cur.count * cur.price.substr(1));
           },0).toFixed(2);
        },
       allChecked(){
           return !(this.list.filter(el => !el.checked).length)
       }
    },
    components:{
        newButton
    },
    methods:{
        allCheck(){
            if(this.allChecked){
                this.list.forEach(el => el.checked = false)
            }else {
                this.list.forEach(el => el.checked = true)

            }
        },
        toAdd(){

        }
    }
}
</script>
<style scoped>
    .carButton {
        display: flex;
        position:absolute;
        bottom:49px;
        border-top:1px solid #808080;
        left:0;
        right:0;
        width:100%;
        height:51px;
        /* line-height: 51px; */
        text-align: center;
        align-items: center;
        padding-left:10px;
    }
    .add {
        flex: 1;
        color: #000;
       
    }
    .button {
    
        width:20px;
        
    }
    .amount {
        height: 51px;
        line-height: 51px;
        width:100px;
        color: #000;
        background: linear-gradient(to right, 
rgb(245, 6, 18), pink)
    }
    /* .fix {
        background:pink
    } */

</style>