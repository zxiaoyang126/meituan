<template>
    <div class="body-wrap">
        <div class="body-content">

            <!-- 第一屏展未区域 -->
            <div class="main-inner clearfix">

                <!-- 左侧分类区别 -->
                <div class="main-left">
                    <h1>全部分类</h1>
                    <ul @mouseenter="showNavDetail" @mouseleave="hideNavDetail">
                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>外卖</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>酒店<span>HOT</span></a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>
                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>
                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>
                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>
                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>

                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>
                        <li>
                            <i class="el-icon-tickets"></i>
                            <a>美食</a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>
                    </ul>

                    <div class="nav-detail-wrap" v-if="isShowNavDetail" @mouseenter="showNavDetail" @mouseleave="hideNavDetail">
                        <div class="nav-detail-content">
                            <div class="detail-content-item">
                                <h2 class="item-title clearfix">运动健身<span>更多</span></h2>
                                <div class="item-box">
                                    <a href="#">健身中心</a>
                                    <a href="#">武术场馆</a>
                                    <a href="#">游泳馆</a>
                                    <a href="#">羽毛球馆</a>
                                    <a href="#">溜冰场</a>
                                    <a href="#">射箭馆</a>
                                    <a href="#">篮球场</a>
                                    <a href="#">网球馆</a>
                                    <a href="#">台球馆</a>
                                    <a href="#">乒乓球</a>
                                </div>
                            </div>

                            <div class="detail-content-item">
                                <h2 class="item-title">运动健身<span>更多</span></h2>
                                <div class="item-box">
                                    <a href="#">健身中心</a>
                                    <a href="#">武术场馆</a>
                                    <a href="#">游泳馆</a>
                                    <a href="#">羽毛球馆</a>
                                    <a href="#">溜冰场</a>
                                    <a href="#">射箭馆</a>
                                    <a href="#">篮球场</a>
                                    <a href="#">网球馆</a>
                                    <a href="#">台球馆</a>
                                    <a href="#">乒乓球</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- 右侧banner区别 -->
                <div class="main-right">

                    <!-- 右侧6个导航 -->
                    <div class="main-right-nav">
                        <a href="#" class="yellow">美团外卖</a>
                        <a href="#" class="red">猫眼电影</a>
                        <a href="#" class="red">美团酒店</a>
                        <a href="#" class="yellow">民宿/公寓</a>
                        <a href="#">商家入驻</a>
                        <a href="#" class="red">美团公益</a>
                    </div>
                    
                    <div class="main-right-row clearfix" style="height: 240px;">

                        <!-- 轮播图区域 -->
                        <div class="slider">
                            <el-carousel :interval="5000" arrow="always">
                                <el-carousel-item v-for="item in 4" :key="item">
                                <img src="http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg" width="550" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>

                        <div class="ad1">
                            <a href="#"><img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt=""></a>
                        </div>
                        
                        <!-- 登陆注册区域 -->
                        <div class="login-register">

                            <div class="login">
                                <img src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
                                <p>Hi！你好</p>
                                <a href="#">注册</a>
                                <a href="#">立即登陆</a>
                            </div>

                            <div class="register" style="display:none"></div>

                        </div>
                    </div>

                    <div class="main-right-row">
                        <ul class="clearfix">
                            <li>
                                <a href="#">
                                    <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" width="270" height="165" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" width="270" height="165" alt="">
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" width="150" height="165" alt="">
                                </a>
                            </li>
                            <li>
                                <div class="phone-app">
                                    <img src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                                    <p class="p1">美团APP手机版</p>
                                    <p><span>1元起</span>吃喝玩乐</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <!-- 第二屏分类区域 -->
            <home-panel /> 

            <br />           
            <br />           
            <br />           
            <br />           
            <br />           
            <br />           
            <br />           
            <br />           

        </div>
    </div>
</template>
<script>
import NavItem from '../components/NavItem'
import HomePanel from '../components/HomePanel'

export default {

    data() {
        return {
            isShowNavDetail: false,
            navDetailData: [],
            timer: null
        }
    },
    methods: {
        showNavDetail(e) {
            clearTimeout(this.timer)  
            this.isShowNavDetail = true;           
        },
        hideNavDetail() {            
            clearTimeout(this.timer)            
            this.timer = setTimeout(() => {                
                this.isShowNavDetail = false;
            }, 100)
        }
    },
    components: {
        NavItem,
        HomePanel
    }
    
}
</script>


<style lang="stylus" scoped>

    $hover-color = #31BBAC
    .clearfix::after 
        content " "
        display block
        height 0
        visibility hidden
        clear both
    .clearfix::before 
        content " "
        display block
        height 0
        visibility hidden
        clear both


    .body-wrap 
        width 100%
        background #f5f5f5
        .body-content 
            width 1190px
            margin 0px auto
            .main-inner 
                width 100%
                .main-left 
                    float left                    
                    width 230px
                    height 475px                    
                    background-image linear-gradient(-90deg, rgba(2,181,157,.85) 2%, rgba(22,146,183,.85) 100%)
                    position relative
                    margin-top -50px
                    h1 
                        font-size 16px
                        color #ffffff
                        font-weight 400
                        margin-left 15px                       
                        height 50px
                        padding-top 15px
                        box-sizing border-box
                    ul 
                        padding: 10px 0px 8px
                        display flex
                        flex-direction column
                        height 425px
                        box-sizing border-box
                        li 
                            padding:2px 12px
                            flex 1
                            color #ffffff    
                            display flex
                            align-items center           
                            i:nth-of-type(1)
                                margin-right 8px
                                color rgba(255, 255, 255, .3)     
                            a 
                                flex 1
                                color #ffffff
                                opacity .9
                                span 
                                    background #ffffff
                                    color #02B59D
                                    border-radius 10px
                                    margin-left 5px  
                                    padding: 0px 7px
                                    opacity 0.5    
                                    font-size 12px    
                                    transition all 0.5s                          
                            &:hover 
                                color #fff
                                background rgba(255, 255, 255,.1)
                                i:nth-of-type(1)
                                    color #fff
                                a
                                    span 
                                        opacity 1
                    .nav-detail-wrap
                        width 400px
                        height 415px
                        background #fff
                        position absolute
                        top 60px
                        left 230px
                        z-index 999
                        .nav-detail-content 
                            padding 0px 30px
                            .detail-content-item 
                                margin-top 24px
                                width 100%
                                .item-title
                                    font-size 15px
                                    font-weight 500
                                    color #666
                                    background #fff
                                    line-height 22px
                                    height 22px
                                    padding-bottom 10px
                                    span
                                        font-size 12px
                                        color #999
                                        cursor pointer
                                        font-weight 400
                                        float right
                                        margin-right 6px
                                        position relative 
                                        &::after 
                                            content ""
                                            height 4px 
                                            width 4px
                                            transform rotate(-45deg) 
                                            position absolute
                                            border-right 1px solid #999
                                            border-bottom 1px solid #999
                                            top 0
                                            bottom 0px
                                            margin auto                                            
                                .item-box 
                                    width 100%
                                    border-top 1px solid #e5e5e5
                                    padding-top 5px                                   
                                    font-size 0px
                                    a 
                                        margin-right 16px
                                        line-height 22px
                                        display inline-block
                                        font-size 12px
                                        &:hover 
                                            color $hover-color


                .main-right 
                    float left
                    width 950px
                    margin-top 10px
                    margin-left 10px
                    position relative
                    .main-right-nav                        
                        position absolute
                        top -45px
                        left 20px
                        a 
                            font-size 16px
                            color #222
                            font-weight 700
                            margin 0px 20px
                            &:hover 
                                color $hover-color
                            &.yellow:hover 
                                color orange
                            &.red:hover 
                                color red
                    .main-right-row 
                        overflow hidden
                        //转播图
                        .slider
                            width 550px
                            height 240px
                            overflow hidden
                            background #999
                            float left
                        .ad1                                                 
                            float left
                            margin-left 10px
                            img 
                                width 150px
                                height 240px
                        //注册登陆
                        .login-register
                            float right
                            width 230px
                            height 240px
                            border 1px solid #e5e5e5
                            box-sizing border-box
                            background-color #fff
                            .login
                                text-align center
                                img 
                                    width 47px
                                    height 47px
                                    border-radius 50%
                                    border 4px solid #e5e5e5
                                    margin-top 30px
                                p
                                    font-size 16px
                                    color #222
                                    font-weight 500
                                    line-height 25px
                            
                                a 
                                    width 118px
                                    text-align center
                                    margin: 10px auto 15px
                                    background: #fff
                                    border 1px solid #e5e5e5
                                    border-radius 40px
                                    font-size 14px
                                    color #333
                                    transition: all .5s
                                    display: block
                                    line-height: 38px
                                    &:hover
                                        background-color #f5f5f5
                        ul
                            height 165px
                            overflow hidden 
                            margin-top 10px
                            li
                                float left
                                margin-right 10px
                                &:last-child
                                    margin-right 0px
                                .phone-app
                                    text-align center
                                    width 230px
                                    height 165px                                   
                                    background-color #fff
                                    box-sizing border-box
                                    border 1px solid #e5e5e5
                                    .p1 
                                        font-size 16px
                                        color #222
                                        font-weight 500 
                                        margin-bottom 2px                           
                                    img
                                        width 95px
                                        height 95px
                                        margin-top 10px   
                                    span 
                                        color red 
                                        margin-right 8px   
                          


</style>
