<template>
    <div class="profile-list">
        <div class="line"></div>
        <div class="profile-list-item">
            <van-icon class="profile-list-icon" name="manager" />
            <div>我的消息</div>
        </div>
        <div class="profile-list-item">
            <van-icon class="profile-list-icon" name="point-gift" />
            <div>积分商城</div>
        </div>
        <div class="profile-list-item">
            <van-icon class="profile-list-icon" name="gem" />
            <div>会员卡</div>
        </div>
        <div class="line"></div>
        <div class="profile-list-item">
            <van-icon class="profile-list-icon" name="shopping-cart" />
            <div>我的购物车</div>
        </div>
        <div class="profile-list-item">
            <van-icon class="profile-list-icon" name="good-job" />
            <div>点赞购物APP</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .profile-list-item {
        height:48px;
        display: flex;
        width:100%;
        padding-left:20px;
        align-items: center;
    }
    .profile-list-item div {
        flex: 1;
        height:48px;
        line-height: 48px;
    }
    .profile-list div:nth-of-type(3) div{
        
        border-bottom: 1px solid #dbd9d9;
        border-top: 1px solid #dbd9d9;
    }
    .profile-list div:last-of-type div {
        border-bottom: 1px solid #dbd9d9;
        border-top: 1px solid #dbd9d9;
    }
    .line {
        width:100%;
        height:10px;
        background:#f0eeee
    }
    .profile-list-icon {
        width:24px;
   
        vertical-align: middle;
        font-size: 24px;
        margin-right:10px
    }
    /* .van-icon {
        display: block;
        width:40px;
        height:40px;
    } */
</style>