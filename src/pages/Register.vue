<template>
    <div class="register">
        <div class="top-wrap">
            <div class="top-content">
                <div class="top-left">
                    <router-link to="/home" class="mt-logo">美团</router-link>
                </div>
                <div class="top-right">
                    <span>已有美团账号？</span>
                    <router-link to="/login" class="login-btn">登陆</router-link>
                </div>
            </div>
        </div>

        <div class="center-wrap">

            <!-- 注册手机号 -->
            <div class="form-item">
                <label>手机号</label>
                <input type="text" 
                       class="input"
                       :class="{'input-err': phoneErrorMsg}"
                       @blur="onPhoneNumberBlur"
                       @focus="onPhoneNumberFocus"
                       v-model="phoneNumber">

                

                <span v-if="showTip">注册成功后，全美团通用</span>

                <span class="message-box" v-else>
                    <i class="icon err" v-if="phoneErrorMsg"></i>
                    <i class="icon suc" v-if="phoneSuc"></i>
                    <span class="err-msg">{{phoneErrorMsg}}</span>
                </span>


                <div class="get-sms">
                   <button class="btn">免费获取短信动态码</button>
                   <!-- <button class="btn" disabled="disabled">已发送60s</button> -->
                </div>
               
            </div>

            <!-- 短信验证码 -->
            <div class="form-item">
                <label>短信动态码</label>
                <input type="text" 
                       class="input" 
                       :class="{'input-err': smsErrorMsg}"
                       v-model="phoneSms"
                       @blur="onPhoneSmsBlur"
                       @focus="onPhoneSmsFocus">

                <span class="message-box">
                    <i class="icon err" v-if="smsErrorMsg"></i>
                    <i class="icon suc" v-if="smsSuc"></i>
                    <span class="err-msg">{{smsErrorMsg}}</span>
                </span>                
            </div>

            <!-- 密码 -->
            <div class="form-item">
                <label>创建密码</label>
                <input type="password" 
                       class="input"
                       :class="{'input-err': pwErrorMsg}" 
                       v-model="password"
                       @blur="onPassWordBlur"
                       @focus="onPassWordFocus">

                <span class="message-box">
                    <i class="icon err" v-if="pwErrorMsg"></i>
                    <i class="icon suc" v-if="pwSuc"></i>
                    <span class="err-msg">{{pwErrorMsg}}</span>
                </span>
            </div>

            <!-- 密码强度 -->
            <div class="form-item">
                <div class="pw-strength">
                    <div class="pw-bar" :style="pwBarStyle"></div>
                    <ul class="pw-level">
                        <li>弱</li>
                        <li>中</li>
                        <li class="last">强</li>
                    </ul>
                </div>
                
            </div>

            <!-- 确认密码 -->
            <div class="form-item">
                <label>确认密码</label>
                <input type="password" 
                       class="input" 
                       :class="{'input-err': pw2ErrorMsg}" 
                       v-model="password2"
                       @blur="onPassWord2Blur"
                       @focus="onPassWord2Focus">

                <span class="message-box">
                    <i class="icon err" v-if="pw2ErrorMsg"></i>
                    <i class="icon suc" v-if="pw2Suc"></i>
                    <span class="err-msg">{{pw2ErrorMsg}}</span>
                </span>
            </div>

            <!-- 提交按钮 -->
            <div class="form-item">
               <button class="submit-btn">同意以下条款并注册</button>
               <p class="">《美团网用户协议》</p>
            </div>           


        </div>


        <div class="bottom-wrap">
            ©meituan.com  京ICP证070791号  京公网安备11010502025545号
        </div>

    </div>
    
</template>


<script>
export default {

    data() {
        return {
            phoneNumber: '',//用户手机
            
            
            phoneSuc: false,
            phoneErrorMsg: '',
            showTip: true,

            phoneSms: '', //手机短信
            smsErrorMsg: '',
            smsSuc: false,

            password: '',//用户密码
            pwErrorMsg: '',
            pwSuc: false,

            password2: '',//确认密码
            pw2ErrorMsg: '',
            pw2Suc: false,

            pwBarStyle: {//控制密码强度
                backgroundColor: '#f76120',
                width: '0px'
            }
        }
        
    },

    methods: {
        onPhoneNumberBlur() {
            if(!this.phoneNumber) {
                this.phoneErrorMsg = '请输入您的手机号码'
            } else if(this.phoneNumber.length !== 11) {
                this.phoneErrorMsg = '请输入正确的11位手机号码'
            } else {
                this.phoneSuc = true;
            }
        },
        onPhoneNumberFocus() {
            this.showTip = false;
            this.phoneErrorMsg = '';
            this.phoneSuc = false
        },


        onPhoneSmsBlur() {
            if(!this.phoneSms) {
                this.smsErrorMsg = '请输入短信动态码';
                return;
            }

            if(this.phoneSms.length !== 6) {
                this.smsErrorMsg = '输入错误，请重新输入';
            } else {
                this.smsErrorMsg = '';
                this.smsSuc = true
            }
        },
        onPhoneSmsFocus() {
            this.smsErrorMsg = '';
            this.smsSuc = false;
        },



        onPassWordBlur() {
            if(!this.password) {
                this.pwErrorMsg = '请填写密码';                
            } else if(this.password.length < 6) {
                this.pwErrorMsg = '密码太短，至少6个字符'
            } else {
                this.pwErrorMsg = '';
                this.pwSuc = true;
            }
        },
        onPassWordFocus() {
            this.pwErrorMsg = '';
            this.pwSuc = false;
        },


        onPassWord2Blur() {
            if(!this.password2) {
                this.pw2ErrorMsg = '请再次输入密码';                
            } else if(this.password !== this.password2) {
                this.pw2ErrorMsg = '两次输入的密码不一致，请重新输入'
            } else {
                this.pw2ErrorMsg = '';
                this.pw2Suc = true;
            }
        },
        onPassWord2Focus() {
            this.pw2ErrorMsg = '';
            this.pw2Suc = false;
        }
    },

    watch: {
        //控制密码强度
        password(pw) {
            if(pw.length == 0) {
                this.pwBarStyle.width = '0px';
            } else if ( pw.length > 0 && pw.length <= 5 ) {
                this.pwBarStyle = {
                    backgroundColor: '#f76120',
                    width: '87px'
                }
            } else if ( pw.length > 5 && pw.length <= 8 ) {
                this.pwBarStyle = {
                    backgroundColor: '#f76120',
                    width: '174px'
                }
            } else {
                this.pwBarStyle = {
                    backgroundColor: '#5bab3c',
                    width: '100%'
                }
            }
            
        }
    }
    
}
</script>


<style lang="stylus" scoped>

    .register
        width 100%
        height 100%
        background #fff
        .top-wrap 
            width 100%
            border-bottom 2px solid #2bb8aa
            .top-content
                width 980px
                margin 0px auto 
                padding 10px 0px
                overflow hidden
                .top-left 
                    float left
                    .mt-logo
                        display block
                        width 54px
                        height 0
                        padding-top 36px
                        overflow hidden
                        background-image url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/sp-normal.2ee5c09.png')
                        background-repeat no-repeat
                        background-position -669px -748px
                .top-right 
                    float right 
                    line-height 36px
                    height 36px
                    span 
                        font-size 14px 
                        color #666
                        margin-right 10px
                    .login-btn
                        background #2db3a6
                        font-size 12px
                        padding 4px 10px
                        color #ffffff
                        border-radius 2px
                        letter-spacing 0.1em    
        .center-wrap                
            width 980px
            margin 0px auto 
            padding 30px 0px
            .form-item 
                padding 8px 0 8px 110px   
                position relative
                label 
                    position absolute
                    font-size 16px
                    margin-right 10px
                    width 100px
                    text-align right
                    height 36px
                    line-height 36px
                    left 0px
                input 
                    width 248px
                    height 24px
                    line-height 24px
                    padding 5px
                    border 1px solid #aaaaaa
                    outline none
                    margin-right 5px
                    &:focus
                        border 1px solid #2bb8aa
                    &.input-err
                        border 1px solid #f76120
                .message-box
                    .icon  
                        width 17px
                        height 17px
                        display inline-block
                        background-image url('https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/assets/icons.c1b3784.png')
                        background-repeat no-repeat                        
                        position relative
                        top 3px
                        &.err 
                            background-position 0px -296px
                        &.suc 
                            background-position 0px -453px
                    .err-msg
                        font-size 12px
                        color #555
                .get-sms
                    .btn
                        margin-top 10px
                        font-size 12px
                        color #666
                        padding 3px 8px
                .submit-btn 
                    color #ffffff
                    font-size 14px
                    font-weight 700
                    padding 8px 15px
                    letter-spacing .1em
                    margin-bottom 8px
                    border-radius 2px
                    background #2bb8aa
                    border 1px solid #5bb8aa
                    outline none
                    cursor pointer
                .contract
                    font-size 12px
                    color #2bb8aa
                .pw-strength
                    width 260px
                    height 20px
                    background-color #eee
                    position relative
                    .pw-bar 
                        position absolute                      
                        height 100%
                        background-color red
                        transition all 0.4s linear
                    .pw-level
                        width 100%
                        overflow hidden
                        position absolute                   
                        li 
                            float left
                            height 20px
                            line-height 20px
                            font-size 12px
                            text-align center 
                            width 85px
                            border-right 2px solid #ffffff
                            color #ffffff
                            &.last 
                                border none
                                width 86px
        .bottom-wrap
            border-top 1px solid #ccc 
            text-align center 
            padding 30px 0px
            font-size 12px

</style>
