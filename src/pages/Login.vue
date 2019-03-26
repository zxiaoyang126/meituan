<template>
    <div class="login-wrap">
        <div class="login-content">
            <div class="login-head">
                <router-link to="/home" class="logo">美团网</router-link>
            </div>

            <div class="login-main">
                <div class="login-img">
                    <img src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
                </div>
                <div class="login-form">

                    <div class="error-msg" v-if="errMsg">
                        <i></i>
                        <span>{{errMsg}}</span>
                    </div>

                    <div class="login-type">
                        <span class="login-title">账号登录</span>

                        <a href="#" class="choose-login-type" @click.prevent="changeLoginType">      
                            <span v-if="isPhoneLogin">普通方式登陆</span>
                            <span v-else>手机动态码登陆</span>

                            <i :class="{iconPhone: isPhoneLogin}"></i>
                        </a>
                    </div>

                    <div class="login-name">
                        <i class="icon icon-user" :class="{'icon-user-type': isPhoneLogin}"></i>
                        

                        <!-- 手机登陆 -->
                        <input v-if="isPhoneLogin" 
                            maxlength="11" 
                            type="text" 
                            class="input" 
                            :class="{'err-input': errMsg}"
                            placeholder="手机号">

                        <!-- 普通方式登陆 -->
                        <input v-else 
                            type="text" 
                            class="input" 
                            :class="{'err-input': errMsg}"
                            placeholder="手机号/用户名/邮箱">
                    </div>

                    <div class="login-password">
                        <a href="" v-if="isPhoneLogin" class="get-captcha">获取手机验证码</a>

                        <i class="icon icon-password"></i>
                        <!-- 手机动态码登陆 -->
                        <input v-if="isPhoneLogin" 
                            maxlength="6" 
                            type="text" 
                            class="input" 
                            :class="{'err-input': errMsg}"
                            placeholder="动态码">

                        <!-- 密码登陆 -->
                        <input v-else 
                            type="password" 
                            class="input" 
                            :class="{'err-input': errMsg}"
                            placeholder="密码">
                    </div>

                    <p class="forget-password"><a href="#">忘记密码？</a></p>

                    <button class="submit" @click.prevent="submitForm">登陆</button>
                    <!-- 手机登陆动态码登陆时显示 -->
                    <p class="tip" v-if="isPhoneLogin">提示： 未注册美团账号的手机号，登录时将自动注册美团账号，且代表您已同意<a href="#">《美团网用户协议》</a></p>
                    <!-- 账号登陆时显示 -->
                    <p class="no-user" v-else>还没有账号？<router-link to="/register">免费注册</router-link></p>

                    <div class="other-login">
                        <div class="other-login-content">
                            <p>用合作网站账号登录</p>
                            <p>
                                <a href="" class="qq"></a>
                                <a href="" class="weibo"></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="login-foot">
                <ul>
                    <li><a href="#">关于美团</a></li>
                    <li><a href="#">加入我们</a></li>
                    <li><a href="#">商家入驻</a></li>
                    <li><a href="#">帮助中心</a></li>
                    <li><a href="#">美团手机版</a></li>
                </ul>

                <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
            </div>

        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            isPhoneLogin: false,
            errMsg: ''
        }
    },
    methods: {
        changeLoginType() {
            this.isPhoneLogin = !this.isPhoneLogin;
            this.errMsg = ""
        },
        submitForm() {
            this.errMsg = "显示错误信息"
        }
    }
    
}
</script>


<style lang="stylus" scoped>
    .login-wrap 
        width 100%
        height 100%
        background #fff
        .login-content
            width 980px
            margin 0px auto
            .login-head
                padding 40px 0px 30px
                .logo
                    width 82px
                    height 0px
                    display block
                    padding-top 54px
                    overflow hidden
                    background-image url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png')
                    background-position -188px -808px
                    background-repeat no-repeat
            .login-main
                width 100%
                overflow hidden
                padding-bottom 50px
                .login-img 
                    float left
                    width 480px
                    height 370px
                    margin-right 115px
                    img 
                        width 100%
                .login-form 
                    float left
                    width 270px
                    position relative
                    padding-top 50px
                    .error-msg
                        position absolute
                        width 100%
                        box-sizing border-box
                        left 0
                        top 0
                        line-height 40px
                        height 40px
                        font-size 12px
                        background #fff6db
                        border 1px solid #f5d8a7
                        border-radius 2px
                        padding-left 10px
                        i  
                            width 17px
                            height 17px
                            display inline-block
                            background-image url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/icons.c1b3784.png')
                            background-position 0px -296px
                            vertical-align middle
                    .login-type
                        width 100%
                        position relative
                        height 30px
                        line-height 30px
                        color #666
                        margin-bottom 5px
                        .login-title 
                            font-size 15px
                            font-weight 400
                        .choose-login-type
                            position absolute
                            right 0
                            top 0
                            font-size 12px
                            i
                                display inline-block
                                vertical-align middle
                                width 14px
                                height 14px
                                background-image url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png')
                                background-position -877px -677px
                                background-repeat no-repeat
                                &.iconPhone
                                    background-position -891px -677px
                    .input 
                        width 100%
                        box-sizing border-box
                        border 1px solid #aaa
                        height 36px 
                        line-height 36px
                        padding 5px
                        font-size 14px    
                        padding-left 30px
                        outline none
                        &:focus
                            border 1px solid #31BBAC 
                        &.err-input 
                            border 1px solid red
                    .icon
                        width 18px
                        height 18px
                        position absolute 
                        left 8px
                        top 8px
                        background-image url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png')
                        background-repeat no-repeat
                        &.icon-user
                            background-position -1250px -617px
                            &.icon-user-type
                                background-position -1250px -581px
                        &.icon-password 
                            background-position -1250px -527px
                    .login-name, .login-password 
                        width 100%
                        position relative
                        margin-bottom 15px
                        .get-captcha
                            position absolute
                            right 8px
                            top 8px
                            font-size 12px
                            color #999
                    .forget-password
                        text-align right
                        margin-bottom 15px
                        a 
                            color #31BBAC
                            &:hover 
                                text-decoration underline
                    .tip 
                        font-size 12px
                        margin 20px 0px   
                        a 
                            color #31BBAC 
                            &:hover 
                                text-decoration underline             
                    .submit 
                        width 100%
                        background-color #2db3a6
                        border none  
                        line-height 35px
                        color #fff
                        font-size 14px
                        font-weight 700
                        letter-spacing 3px
                        text-align center
                        border-radius 3px
                        border-bottom 1px solid #008177
                        &:hover 
                            background-color #3db5a6
                    .no-user
                        font-size 14px
                        line-height 35px
                        height 35px
                        margin-bottom 15px
                        a 
                            color #31BBAC 
                    .other-login
                        width 100%           
                        text-align center
                        border-top 1px solid #d8d8d8
                        position relative
                        .other-login-content
                            position absolute
                            top -10px
                            left 50%
                            margin-left -75px
                            width 150px
                            text-align center 
                            background #fff
                            font-size 15px
                            a 
                                display inline-block
                                width 18px
                                height 18px
                                background-image url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png')
                                background-repeat no-repeat 
                                margin-top 15px
                                &.qq
                                    background-position -1250px -491px
                                    margin-right 20px
                                &.weibo
                                    background-position -1250px -599px
            .login-foot
                width 100%
                ul 
                    border-top 1px solid #d8d8d8
                    border-bottom 1px solid #d8d8d8
                    padding 20px 0px
                    overflow hidden
                    li 
                        float left
                        height 14px
                        line-height 14px             
                        border-right 1px solid #d8d8d8
                        padding-right 10px
                        margin-right 10px
                        &:last-child 
                            border 0px
                        a 
                            font-size 12px 
                            color #999
                            &:hover 
                                text-decoration underline
                p 
                    padding-top 20px
                    font-size 12px
                    color #999

</style>
