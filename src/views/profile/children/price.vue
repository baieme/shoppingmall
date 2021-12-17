<template>
    <div class="price">
        <div class=" balance">
            <div>
                <span style="color:red;font-size:24px;font-weight:bold">0.00</span>元
            </div>
            <div>我的余额</div>
        </div>
        <div class="discount">
            <div>
                <span style="color:red;font-size:24px;font-weight:bold">0</span>个
            </div>
            <div>我的余额</div>
        </div>
         <div class="score">
             <div>
                <span style="color:red;font-size:24px;font-weight:bold">0</span>分
            </div>
            <div>我的余额</div>
         </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .price {
        display: flex;
       
        align-items: center;
    }
    .price span {
        margin-right:5px ;
    }
    .discount {
        border-left:1px solid #dbd9d9;
        border-right:1px solid #dbd9d9;
    }
    .balance,.discount,.score {
        height:85px;
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>