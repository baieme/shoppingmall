<template>
    <div class="login">
        <div class="img">
            <img src="~@/assets/img/profile/user.png" alt="">
        </div>
        <div class="login-content">
            <div class="register">
                <span>登录</span>/
                <span>注册</span>
            </div>
            <div>
                <img src="~@/assets/img/profile/phone.png" alt="">
                <span class="bind">暂未绑定手机号</span>
            </div>
        </div>
        <div class="icon-right">
            <img src="~@/assets/img/profile/arrow_right.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .login {
        display: flex;
        height:90px;
        background:pink;
        width:100%;
        padding:0 10px;
        align-items: center;
        border-top: 1px solid #fff;
    }
    .img img {
        width:60px;
        height:60px;
    }
    .login-content,.icon-right{
        flex:1;
        color: #fff;
    }
    .login-content img {
        vertical-align: middle;
    }
    .login-content {
        padding-left:20px;
    }
    .icon-right {
        text-align: right;
    }
    .bind {
        margin-left: 5px;
    }
    .register {
        margin-bottom: 5px;
    }
    .icon-right img {
        width:30px;
        height:30px;
    }
</style>