<template>
    <div class="panel-wrap">
        <dl class="panel-nav clearfix">
            <dt>有格调</dt>
            <dd v-for="(item, index) in classifyList" 
                :key="index" 
                :class="{active: currentIndex == index}"
                @mouseenter="changePanel(index)">
                {{item.text}}
            </dd>
        </dl>
        
        <ul class="panel-content clearfix">
            <li v-for="(item, index) in currentClassifyData" :key="index">
                <a href="#">
                    <div class="seller-img">
                        <img :src="item.image" alt="">
                    </div>                    
                    <p class="seller-title">{{item.title}}</p>
                    <p class="seller-subtitle">{{item.subTitle}}</p>
                    <div class="price-info">
                        <span class="current-price">{{item.price}}</span>
                        <span class="old-price" v-if="item.oldPrice">门市价¥{{item.oldPrice}}</span>
                        <span class="address" v-if="item.address">{{item.address}}</span>
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
            classifyList: [
                {
                    tab: 'all',
                    text: '全部'
                },
                {
                    tab: 'food',
                    text: '约会聚餐'
                },
                {
                    tab: 'spa',
                    text: '丽人spa'
                },
                {
                    tab: 'movie',
                    text: '电影演出'
                },
                {
                    tab: 'travel',
                    text: '品质出游'
                }
            ],

            classifyData: {
                 "all": [{
                    "image": "http://p0.meituan.net/merchantpic/c7c04cfd6693f4020c8f149ba4e937c2102452.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",
                    "title": "上海盐屋盐疗漂浮SPA足疗养生馆",
                    "address": "嘉定镇",
                    "subTitle": "上海盐屋盐疗漂浮SPA足疗养生馆",
                    "price": 164,
                }, {
                    "image": "http://p0.meituan.net/scarlett/dd40062805e73a876692b9589339b1c6223571.png@368w_208h_1e_1c",
                    "title": "储缘蛋糕（锦龙面包房）",
                    "address": "彭浦镇",
                    "subTitle": "12英寸欧式水果蛋糕7选1",
                    "price": 129,
                    "oldPrice": 166
                }, {
                    "image": "http://p0.meituan.net/msmerchant/b25d9a70efa1ca221961e513c1cac934331531.jpg@368w_208h_1e_1c",
                    "title": "雅居乐万豪酒店都会尚膳餐厅",
                    "address": "人民广场/南京路",
                    "subTitle": "【小小厨师班】周日早午餐自助",
                    "price": 228,
                    "oldPrice": 328
                },{
                    "image": "http://p0.meituan.net/deal/5fdbb6f8d37079319ee603e0d2379c5449003.jpg@368w_208h_1e_1c",
                    "title": "金逸院线施湾影城(施湾店)",
                    "subTitle": "免押金,可停车,儿童票,可刷卡,有WIFI,休息区,60帧厅",
                    "price": 38,
                },{
                    "image": "http://p0.meituan.net/poi/__18935628__3306971.jpg@368w_208h_1e_1c",
                    "title": "万达影城(江桥万达广场店)",
                    "subTitle": "免押金,可停车,儿童票,可刷卡,有WIFI,休息区,IMAX厅,4DX厅",
                    "price": 40,
                },{
                    "image": "http://p0.meituan.net/msmerchant/bdb73d77de24b828f5cfbca989e6130d383874.jpg@368w_208h_1e_1c",
                    "title": "彩泥·云南三锅（世茂店）",
                    "address": "人民广场/南京路",
                    "subTitle": "春季午市单人套餐",
                    "price": 36,
                    "oldPrice": 60
                }],
                "food": [
                    {
                        "image": "http://p0.meituan.net/merchantpic/b5bc200ff96056aa58e2441c37b0097d58192.jpg@460w_260h_1e_1c",
                        "title": "COSTA COFFEE（东方新天地店）",
                        "address": "东方新天地",
                        "subTitle": "玫瑰黑巧茶拿铁1份",
                        "price": 11
                    }, 
                    {
                        "image": "http://p0.meituan.net/msmerchant/6ec4835aefd0c7e2b979991d1db3786e255668.jpg@368w_208h_1e_1c",
                        "title": "桂小厨广西菜（世茂广场店）",
                        "address": "人民广场/南京路",
                        "subTitle": "套餐2选1，提供免费WiFi",
                        "price": 32,
                        "oldPrice": 59
                    },
                    {
                        "image": "http://p1.meituan.net/msmerchant/b1f93cca7f2e2a6c55b8fa785adbfd241591130.jpg@368w_208h_1e_1c",
                        "title": "COSTA COFFEE（东方新天地店）",
                        "address": "东方新天地",
                        "subTitle": "玫瑰黑巧茶拿铁1份",
                        "price": 11
                    }, 
                    {
                        "image": "http://p0.meituan.net/mogu/fc091566222b23c51857ab4316633e43370925.jpg@460w_260h_1e_1c",
                        "title": "祈年八号中餐厅",
                        "address": "崇文门新世界",
                        "subTitle": "单人点心自助午餐",
                        "price": 98
                    },
                    {
                        "image": "http://p1.meituan.net/msmerchant/ca876b6df8da625a5fcfe9438391c49c110810.jpg@368w_208h_1e_1c",
                        "title": "COSTA COFFEE（东方新天地店）",
                        "address": "东方新天地",
                        "subTitle": "玫瑰黑巧茶拿铁1份",
                        "price": 11
                    }, 
                    {
                        "image": "http://p1.meituan.net/msmerchant/a47b87594374e2abbc0f101b7b455eeb1374769.jpg@368w_208h_1e_1c",
                        "title": "祈年八号中餐厅",
                        "address": "崇文门新世界",
                        "subTitle": "单人点心自助午餐",
                        "price": 98
                    }
                ],
                "spa": [
                    {
                        "image": "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                        "title": "木北造型",
                        "address": "崇文门新世界店",
                        "subTitle": "木北造型（崇文门新世界店）",
                        "price": 398
                    },
                    {
                        "image": "http://p0.meituan.net/wedding/48a92e3cdefd861dc298ef97e7225a8b59580.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",
                        "title": "核刺青",
                        "address": "崇文门新世界店",
                        "subTitle": "木北造型（崇文门新世界店）",
                        "price": 398
                    },
                    {
                        "image": "http://p1.meituan.net/merchantpic/0ce6c21b19669a56d3e6d9d7c16349bb52491.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",
                        "title": "君兰SPA养生",
                        "address": "崇文门新世界店",
                        "subTitle": "木北造型（崇文门新世界店）",
                        "price": 398
                    },
                    {
                        "image": "http://p1.meituan.net/wedding/9e568ab16eec441f048e45fd4436544560536.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",
                        "title": "紫尚造型（延长路店）",
                        "address": "崇文门新世界店",
                        "subTitle": "木北造型（崇文门新世界店）",
                        "price": 398
                    },
                    {
                        "image": "https://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c",
                        "title": "木北造型",
                        "address": "崇文门新世界店",
                        "subTitle": "木北造型（崇文门新世界店）",
                        "price": 398
                    },
                    {
                        "image": "http://p1.meituan.net/merchantpic/0ce6c21b19669a56d3e6d9d7c16349bb52491.jpg@240w_180h_1e_1c_1l%7Cwatermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20%7C368w_208h_1e_1c",
                        "title": "君兰SPA养生",
                        "address": "崇文门新世界店",
                        "subTitle": "木北造型（崇文门新世界店）",
                        "price": 398
                    },
                ],
                "movie": [
                    {
                        "image": "http://p0.meituan.net/deal/5fdbb6f8d37079319ee603e0d2379c5449003.jpg@368w_208h_1e_1c",
                        "title": "金逸院线施湾影城(施湾店)",
                        "subTitle": "免押金,可停车,儿童票,可刷卡,有WIFI,休息区,60帧厅",
                        "price": 19.9
                    },
                    {
                        "image": "http://p0.meituan.net/apiback/22f1b74c2ae23f39be9299ac9219be58127827.jpg@368w_208h_1e_1c",
                        "title": "万达影城(周浦万达广场店)",
                        "subTitle": "免押金,可停车,可刷卡,有WIFI,休息区,儿童票,real D厅",
                        "price": 19.9
                    },
                    {
                        "image": "http://p1.meituan.net/deal/477c95560d3210f62df776ce6ce53c94339795.jpg@368w_208h_1e_1c",
                        "title": "海上明珠国际影城(莘庄店)",
                        "subTitle": "免押金,可停车,有情侣座,儿童票,可刷卡,休息区,4D厅",
                        "price": 19.9
                    },
                    {
                        "image": "http://p0.meituan.net/poi/__18935628__3306971.jpg@368w_208h_1e_1c",
                        "title": "万达影城(江桥万达广场店)",
                        "subTitle": "免押金,可停车,儿童票,可刷卡,有WIFI,休息区,IMAX厅,4DX厅",
                        "price": 19.9
                    },
                    {
                        "image": "http://p1.meituan.net/poi/77d8c1579d584041d6436218f6faaa6153845.jpg@368w_208h_1e_1c",
                        "title": "UA电影城(上海梅龙镇广场店)",
                        "subTitle": "自费购买,可停车,有情侣座,儿童票,巨幕厅",
                        "price": 45.9
                    },
                    {
                        "image": "http://p1.meituan.net/poi/__18945874__6122872.jpg@368w_208h_1e_1c",
                        "title": "万达影城(宝山万达广场店)",
                        "subTitle": "免押金,可停车,可刷卡,有WIFI,休息区,儿童票,real D厅",
                        "price": 19.9
                    }
                ],
                "travel": [
                    {
                        "image": "http://p0.meituan.net/tdchotel/925bf0da0917e9ac6d0fa88b26a4bb9e5977608.png@368w_208h_1e_1c",
                        "title": "上海虹桥绿地铂瑞酒店",
                        "subTitle": "房量充足 发票推荐 含早",
                        "price": 1048
                    },
                    {
                        "image": "http://p0.meituan.net/tdchotel/1440f8db7175e951fac9948cd863119d77226.jpg@368w_208h_1e_1c",
                        "title": "全季酒店",
                        "subTitle": "新客超值优惠 酒店套餐",
                        "price": 721
                    },
                    {
                        "image": "http://p1.meituan.net/dnaimgdark/497be7a3d78effc3be7828a2d5608f623182314.jpg@368w_208h_1e_1c",
                        "title": "上海华美国际酒店",
                        "subTitle": "新客超值优惠 酒店套餐 亲子酒店 复式Loft 发票推荐",
                        "price": 373
                    },
                    {
                        "image": "http://p1.meituan.net/tdchotel/f7faed194cbf828db94f8d3d22bb7401912698.jpg@368w_208h_1e_1c",
                        "title": "宿适轻奢酒店",
                        "subTitle": "房量充足 发票推荐 含早",
                        "price": 559
                    },
                    {
                        "image": "http://p1.meituan.net/dnaimgdark/3398f8e1b285f041bc94510b3d578dee3741212.jpg@368w_208h_1e_1c",
                        "title": "上海新世界丽笙大酒店",
                        "subTitle": "新客超值优惠 酒店套餐",
                        "price": 1613
                    },
                    {
                        "image": "http://p1.meituan.net/dnaimgdark/9a4a4efe8684356d360462c774365c1f152557.jpg@368w_208h_1e_1c",
                        "title": "上海宜兰贵斯酒店",
                        "subTitle": "新客超值优惠 酒店套餐 亲子酒店 复式Loft 发票推荐",
                        "price": 668
                    }
                ]
            }
        }
    },
    methods: {
        changePanel(index) {
            this.currentIndex = index;
        }
    },
    computed: {
        currentClassifyData() {
            var type = this.classifyList[ this.currentIndex ]
            return this.classifyData[ type.tab ]
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
                        overflow hidden
                        img 
                            width 100%
                            height 208px
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
