<template>
    <div class="tabBar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .tabBar {
        display: flex;
        text-align: center;
        height: 49px;
        font-size: 16px;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
   
</style>