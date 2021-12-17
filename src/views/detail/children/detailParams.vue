<template>
    <div class="detailParams" v-if="Object.keys(params).length !== 0">
        <!-- 商品的尺寸 -->
        <table v-for = '(item,index) in params.rule.tables' :key = 'index' class="size">
            <tr v-for = '(items,a) in item' :key = 'a'>
                <td v-for = '(td,b) in items' :key = 'b'>{{td}}</td>
            </tr>
        </table>
        <!-- 商品的生产信息 -->
        <table class="infoParams">
            <tr v-for = '(item,index) in params.info.set' :key = 'index'>
               <td class='infoKey'>{{item.key}}</td>
               <td class='infoValue'>{{item.value}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        params:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>
<style scoped>
    .detailParams {
        margin: 10px 5px 10px;
    }
    .size {
        width:100%;
        border-collapse:collapse
    }
    .size tr{
        height: 36px;
        border-bottom: 1px solid #808080;
    }
    .infoParams {
        width:100%;
        border-collapse: collapse;
        margin-top: 20px;
      
    }
    .infoParams tr{
        height:36px;
        border-bottom: 1px solid #808080;
        text-align: left;
    }
    .infoKey {
        width:30%
    }
    .infoValue {
        color: red;
    }
</style>