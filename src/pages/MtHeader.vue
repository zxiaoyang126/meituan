<template>
    <div class="header-wrap">

        <div class="header-bar">
            <div class="bar-content clearfix">
                <div class="bar-left">
                    <i class="el-icon-location"></i><span class="">上海</span>
                    <router-link class="change-city" :to="{name: 'changecity'}">切换城市</router-link>
                    <span class="near-city">[ <a href="#">彰化</a> <a href="#">宜兰</a> <a href="#">太仓</a> ]</span>

                    <router-link to="/login" class="login">立即登陆</router-link>
                    <a href="#">注册</a>
                </div>
                <div class="bar-right">
                    <ul class="clearfix">

                        <li class="has-child">
                            <a href="#">我的美团</a>
                            <div class="my-list mine">
                                <a href="">我的订单</a>
                                <a href="">我的收藏</a>
                                <a href="">抵用券</a>
                                <a href="">账户设置</a>
                            </div>
                        </li>

                        <li>
                            <a href="#">手机APP</a>
                        </li>

                        <li class="has-child">
                            <span>商家中心</span>
                            <div class="my-list seller">
                                <a href="">登陆商家中心</a>
                                <a href="">美团智能收银</a>
                                <a href="">我想合作</a>
                                <a href="">手机免费开店</a>
                                <a href="">餐饮代理商招募</a>
                            </div>
                        </li>

                        <li class="has-child">
                            <span>网站导航</span>

                            <div class="my-list site">
                                <dl class="hotel-tranel">
                                    <dt>酒店旅游</dt>
                                    <dd><a href="#" target="_blank">国际机票</a></dd>
                                    <dd><a href="#" target="_blank">火车票</a></dd>
                                    <dd><a href="#" target="_blank">榛果民宿</a></dd>
                                    <dd><a href="#" target="_blank">经济型酒店</a></dd>
                                    <dd><a href="#" target="_blank">主题酒店</a></dd>
                                    <dd><a href="#" target="_blank">商务酒店</a></dd>
                                    <dd><a href="#" target="_blank">公寓</a></dd>
                                    <dd><a href="#" target="_blank">豪华酒店</a></dd>
                                    <dd><a href="#" target="_blank">客栈</a></dd>
                                    <dd><a href="#" target="_blank">青年旅社</a></dd>
                                    <dd><a href="#" target="_blank">度假酒店</a></dd>
                                    <dd><a href="#" target="_blank">别墅</a></dd>
                                    <dd><a href="#" target="_blank">农家院</a></dd>
                                </dl>

                                <dl class="eat-food">
                                    <dt>吃美食</dt>
                                    <dd><a href="#" target="_blank">烤鱼</a></dd>
                                    <dd><a href="#" target="_blank">特色小吃</a></dd>
                                    <dd><a href="#" target="_blank">烧烤</a></dd>
                                    <dd><a href="#" target="_blank">自助餐</a></dd>
                                    <dd><a href="#" target="_blank">火锅</a></dd>
                                    <dd><a href="#" target="_blank">代金券</a></dd>
                                </dl>

                                <dl class="look-movie">
                                    <dt>看电影</dt>
                                    <dd><a href="#" target="_blank">热映电影</a></dd>
                                    <dd><a href="#" target="_blank">热门影院</a></dd>
                                    <dd><a href="#" target="_blank">热映电影口碑榜</a></dd>
                                    <dd><a href="#" target="_blank">最受期待电影</a></dd>
                                    <dd><a href="#" target="_blank">国内票房榜</a></dd>
                                    <dd><a href="#" target="_blank">北美票房榜</a></dd>
                                    <dd><a href="#" target="_blank">电影排行榜</a></dd>
                                </dl>

                                <dl class="phone-app">
                                    <dt>手机应用</dt>
                                    <dd><a href="#"><img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"></a></dd>
                                    <dd><a href="#"><img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"></a></dd>
                                    <dd><a href="#"><img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"></a></dd>
                                    <dd><a href="#"><img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"></a></dd>
                                    <dd><a href="#"><img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"></a></dd>
                                </dl>

                            </div>
                        </li>                
                    </ul>
                </div>
            </div>
        </div>

        <div class="header-content clearfix">

            <div class="logo">
                <router-link to="/home"><img src="http://s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt=""></router-link>
            </div>

            <div class="search">
                <div class="search-input">
                    <input type="text" placeholder="搜索商家或地点" v-model="keyword" @focus="focus" @blur="blur">
                    <button class="search-btn"><i class="el-icon-search"></i></button>
                </div>

                <div class="search-list" v-if="isShowSearch">

                    <dl v-if="isShowHotSearch">
                        <dt>热门搜索</dt>
                        <dd><a href="#">上海迪士尼度假区</a></dd>
                        <dd><a href="#">东方明珠广播电视塔</a></dd>
                        <dd><a href="#">上海外滩星空错觉艺术馆</a></dd>
                    </dl>

                    <ul v-else>
                        <li>从服务器获取数据</li>
                        <li>从服务器获取数据</li>
                        <li>从服务器获取数据</li>
                        <li>从服务器获取数据</li>
                        <li>从服务器获取数据</li>
                    </ul>

                </div>

                <div class="search-hot">
                    <a href="#">上海迪士尼度假区</a>
                    <a href="#">东方明珠广播电视塔</a>
                    <a href="#">上海外滩星空错觉艺术馆</a>
                    <a href="#">上海欢乐谷</a>
                    <a href="#">上海野生动物园</a>
                </div>
            </div>

        </div>



    </div>
    
</template>


<script>
export default {
    data() {
        return {
            keyword: '',
            isShowSearch: false
        }
    },
    methods: {
        focus() {
            this.isShowSearch = true;            
        },
        blur() {
            this.isShowSearch = false;
        }
    },
    computed: {        
        isShowHotSearch() {
            return this.isShowSearch && !this.keyword ? true : false;
        }
    },
    created() {

    }
};
</script>


<style lang="stylus" scoped>

    $hover-color = #31BBAC

    .clearfix::after 
        content " "
        display block
        height 0
        visibility hidden
        clear both

    .header-wrap
        width 100%
        color #666
        font-size 12px
        background #ffffff
        .header-bar
            width 100%
            height 40px
            background-color #f8f8f8
            .bar-content
                width 1190px
                margin 0px auto 
                height 40px
                line-height 40px
                a
                    &:hover
                        color #31BBAC
                .bar-left
                    float left
                    height 100%
                    .near-city
                        color #999
                    .change-city
                        border 1px solid #e5e5e5
                        padding 0px 2px
                        border-radius 2px
                        margin 0px 2px
                    .login
                        color #31BBAC
                        margin-left 20px

                .bar-right
                    float right
                    height 100%
                    ul
                        height 100%                                      
                        li
                            float left
                            width 70px
                            text-align center
                            border-left 1px solid transparent
                            border-right 1px solid transparent
                            box-sizing border-box
                        li.has-child
                            position relative
                            .my-list
                                position absolute                                
                                top 40px
                                right -1px                               
                                z-index 99
                                background #ffffff
                                box-shadow 0px 3px 5px 0px rgba(0, 0, 0, .1)
                                border 1px solid #e5e5e5                                
                                display none
                                border-bottom-right-radius 5px
                                border-bottom-left-radius 5px
                                a
                                    display inline-block                                   
                                &::after 
                                    content ""
                                    display block
                                    height 2px
                                    background #fff
                                    position absolute
                                    width 68px
                                    top -2px
                                    right 0px
                                &.mine
                                    width 100%
                                &.seller
                                    width 150%
                                    border-top-left-radius 5px
                                &.site
                                    width 1190px
                                    padding 30px 36px 36px 47px
                                    box-sizing border-box
                                    border-top-left-radius 5px
                                    dl
                                        float left                                     
                                        dt 
                                            color #31BBAC
                                            font-size 14px 
                                            margin-bottom 20px
                                        dd 
                                            float left
                                            text-align center
                                            line-height 35px
                                    dl.hotel-tranel
                                        width 234px
                                        margin-right 47px
                                        dd
                                            width 33.3%
                                    dl.eat-food 
                                        width 156px
                                        margin-right 47px
                                        dd 
                                            width 50%
                                    dl.look-movie 
                                        width 90px
                                        margin-right 47px
                                        dd 
                                            width 100%
                                    dl.phone-app 
                                        float right
                                        margin-right 47px
                                        dd 
                                            margin 0px 10px
                                            img
                                                width 60px
                        li.has-child:hover 
                            background-color #ffffff
                            box-shadow 0px 3px 5px 0px rgba(0, 0, 0, .1)
                            border-left 1px solid #e5e5e5
                            border-right 1px solid #e5e5e5               
                            .my-list
                                display block
       
           

        .header-content
            width 1190px
            margin 0px auto     
            padding-bottom 35px      
            .logo 
                float left
                padding-top 28px
                padding-right 60px
                min-width 220px 
                padding-bottom 40px               
                img 
                    width 126px
            .search                 
                float left
                padding-top 28px
                position relative
                .search-input 
                    width 550px
                    height 40px
                    position relative
                    input              
                        width 85%
                        padding 0px 10px
                        box-sizing border-box
                        outline none 
                        border 1px solid #13D1BE
                        line-height 40px
                        height 40px                    
                        border-top-left-radius 4px
                        border-bottom-left-radius 5px
                    .search-btn 
                        width 15%
                        height 100%
                        position absolute
                        top 0px
                        right 0px
                        border none
                        outline none
                        cursor pointer
                        background: #13D1BE
                        border-top-right-radius 4px
                        border-bottom-right-radius 5px
                        .el-icon-search
                            color #ffffff
                            font-weight 700
                            font-size 16px
                .search-list
                    border 1px solid #eeeeee
                    border-top none
                    width 85%
                    box-sizing border-box                    
                    border-bottom-left-radius 5px
                    border-bottom-right-radius 5px
                    box-shadow 0px 2px 3px 0px rgba(1, 1, 1, .1)
                    background #fff
                    position absolute
                    padding 5px 0px
                    z-index 998
                    dl 
                        margin-left 10px
                        dt
                            font-size 12px
                            font-weight 700
                            color #999
                            line-height 30px
                        dd 
                            color #666
                            display inline-block
                            line-height 25px
                            a
                                color #999 
                                &:hover
                                    color $hover-color
                    li 
                        padding 5px 8px                                                
                        &:hover
                            background #f8f8f8
                .search-hot                    
                    line-height 35px
                    height 35px                    
                    padding-left 10px
                    a
                        color #999
                        &:hover 
                            color $hover-color


</style>
