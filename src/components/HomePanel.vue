<template>
    <div class="panel-wrap">
        <dl class="panel-nav clearfix">
            <dt>有格调</dt>
            <dd v-for="(item, index) in classifyList" 
                :key="index" 
                :class="{active: currentIndex == index}"
                @mouseenter="changePanel(index)">
                {{item}}
            </dd>
        </dl>
        
        <ul class="panel-content clearfix">
            <li v-for="(item, index) in classifyData.all" :key="index">
                <a href="#">
                    <div class="seller-img">
                        <img src="http://p1.meituan.net/msmerchant/dafc9162711d084276a29c68973a8277827789.png@368w_208h_1e_1c" alt="">
                    </div>                    
                    <p class="seller-title">{{item.title}}</p>
                    <p class="seller-subtitle">{{item.subTitle}}</p>
                    <div class="price-info">
                        <span class="current-price">698</span>
                        <span class="old-price">门市价¥928</span>
                        <span class="address">上海影城/新华路</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
            currentIndex: 0,
            classifyList: ['全部', '约会聚餐', '丽人SPA', '电影演出', '品质出游'],
            classifyData: {
                 "all": [{
                    "image": "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                    "title": "木北造型",
                    "address": "崇文门新世界店",
                    "subTitle": "木北造型（崇文门新世界店）",
                    "price": 398
                }, {
                    "image": "http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c",
                    "title": "COSTA COFFEE（东方新天地店）",
                    "address": "东方新天地",
                    "subTitle": "玫瑰黑巧茶拿铁1份",
                    "price": 11
                }, {
                    "image": "http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c",
                    "title": "祈年八号中餐厅",
                    "address": "崇文门新世界",
                    "subTitle": "单人点心自助午餐",
                    "price": 98
                }],
                "food": [{
                    "image": "http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c",
                    "title": "COSTA COFFEE（东方新天地店）",
                    "address": "东方新天地",
                    "subTitle": "玫瑰黑巧茶拿铁1份",
                    "price": 11
                }, {
                    "image": "http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c",
                    "title": "祈年八号中餐厅",
                    "address": "崇文门新世界",
                    "subTitle": "单人点心自助午餐",
                    "price": 98
                }],
                "spa": [{
                    "image": "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                    "title": "木北造型",
                    "address": "崇文门新世界店",
                    "subTitle": "木北造型（崇文门新世界店）",
                    "price": 398
                }],
                "movie": [],
                "travel": []
            }
        }
    },
    methods: {
        changePanel(index) {
            this.currentIndex = index;
        }
    }
    
}
</script>


<style lang="stylus" scoped>

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
    .panel-wrap
        width 100%
        .panel-nav
            height 44px
            line-height 44px
            margin-top 40px                    
            background-image linear-gradient(90deg, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%)
            background-color rgb(190, 164, 116)
            color #fff
            border-top-left-radius 5px
            border-top-right-radius 5px
            padding-left 15px
            dt 
                font-size 18px
                margin-right 10px
                float left
                cursor pointer
            dd
                float left
                margin 0px 5px
                position relative
                cursor pointer
                font-size 14px
                &.active::after
                    content ""
                    display block
                    width 2px
                    border-left 5px solid transparent
                    border-right 5px solid transparent
                    border-bottom 7px solid #fff
                    position absolute
                    bottom 0px
                    left 50%
                    transform translate(-50%)
        .panel-content 
            width 100%
            border 1px solid #e5e5e5
            box-sizing border-box
            padding 10px
            border-top none 
            background #ffffff
            border-bottom-left-radius 5px
            border-bottom-right-radius 5px
            li 
                float left
                width 33.3%
                a
                    color #999
                    font-size 12px
                    display block
                    padding 10px
                    border-radius 5px
                    &:hover 
                        background #f5f5f5
                    .seller-img
                        width 100%
                        height 208px
                        background #eeeeee
                        img 
                            width 100%
                            border-radius 5px
                    .seller-title
                        font-size 16px
                        color #222
                        line-height 22px
                        height 22px
                        white-space nowrap
                        text-overflow ellipsis
                        overflow hidden
                        margin 10px 0px                    
                    .price-info
                        margin-top 10px
                        .current-price
                            color #BE9E4D
                            font-size 22px
                            margin-right 0px
                            &::before
                                content "¥"
                                font-size 14px
                        .old-price
                            text-decoration line-through
                        .address
                            float right
                            margin-top 10px
</style>
