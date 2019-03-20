<template>
    <div class="body-wrap">
        <div class="body-content">

            <!-- 第一屏展未区域 -->
            <div class="main-inner clearfix">

                <!-- 左侧分类区别 -->
                <div class="main-left">
                    <h1>全部分类</h1>
                    <ul>
                        <li class="nav-item" 
                            v-for="item in navItemList" 
                            :key="item.typeId"
                            @mouseenter="showNavDetail(item.children)"
                            @mouseleave="hideNavDetail">        
                            <i :class="item.icon"></i>
                            <a>{{item.text}}<span v-if="item.isHot">HOT</span></a>
                            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
                        </li>
                    </ul>

                    <div class="nav-detail-wrap" 
                         v-if="navDetailData" 
                         @mouseenter="showNavDetail(null)" 
                         @mouseleave="hideNavDetail">

                        <div class="nav-detail-content">
                            <nav-item-detail v-for="(item, index) in navDetailData" 
                                             :key="index"
                                             :subtitle="item.subtitle"
                                             :childrenList="item.list"/>
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
                            
                            <!-- 未登陆 请登陆 -->
                            <div class="login">
                                <img src="http://s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
                                <p>Hi！你好</p>
                                <a href="#">注册</a>
                                <a href="#">立即登陆</a>
                            </div>

                            <!-- 已登陆 个人中心 -->
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
            <mt-nav />   
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
import NavItemDetail from '../components/NavItemDetail'
import MtNav from './MtNav'
import HomePanel from '../components/HomePanel'

export default {

    data() {
        return {
            navDetailData: null,
            timer: null,
            navItemList: [                    
                    {
                        icon: 'el-icon-view',
                        text: '美食',
                        typeId: 1,
                        children: [                        
                            {                            
                                subtitle: '美食',
                                list: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃快餐', 
                                        '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', 
                                        '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤/烤串', 
                                        '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜素食']
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-tickets',
                        text: '外卖',
                        typeId: 2,
                        children: [{
                            subtitle: '外卖',
                            list: ['美团外卖']
                        }]
                        
                    },
                    {
                        icon: 'el-icon-mobile-phone',
                        text: '酒店',
                        isHot: true,
                        typeId: 3,
                        children: [{                            
                            subtitle: '酒店星级',
                            list: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
                        }]
                    },
                    {
                        icon: 'el-icon-info',
                        text: '榛果民宿',
                        typeId: 4,
                        children: [{                            
                            subtitle: '热门城市',
                            list: ['上海', '成都', '北京', '重庆', '南京', '杭州', '广州', '西安', '大连']
                        }]
                    },
                    {
                        icon: 'el-icon-edit-outline',
                        text: '猫眼电影',
                        typeId: 5,
                        children: [                        
                            {                            
                                subtitle: '热映电影',
                                list: ['比悲伤更悲伤的故事', '惊奇队长', '绿皮书', '狂暴凶狮', '老师·好', 
                                        '波西米亚狂想曲', '乐高大电影2', '地久天长', '我的英雄学院：两位英雄', 
                                        '阿丽塔：战斗天使']
                            },
                            {                            
                                subtitle: '热门影院',
                                list: ['SFC上影影城', '万达影城', '大地影院', '百丽宫影城', '星美国际影城', 
                                        '橙天嘉禾影城', '横店电影城', 'CGV影城', '大光明电影院', '金逸影城']
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-goods',
                        text: '机票 / 火车票',
                        typeId: 6,
                        children: [                        
                            { subtitle: '机票', list: ['国内机票', '国际/港澳台机票'] },
                            { subtitle: '火车票', list: ['火车票'] }
                        ]
                    },
                    {
                        icon: 'el-icon-share',
                        text: '休闲娱乐 / KTV',
                        typeId: 7,
                        children: [                        
                            {                            
                                subtitle: '休闲娱乐',
                                list: ['足疗按摩', '洗浴/汗蒸', '酒吧', '密室逃脱', '轰趴馆', 
                                        '茶馆', '私人影院', 'DIY手工坊', '采摘/农家乐', 
                                        '网吧网咖', '真人CS', '棋牌室', '其他玩乐']
                            },
                            { subtitle: 'KTV', list: ['KTV'] }
                        ]
                    },
                    {
                        icon: 'el-icon-setting',
                        text: '生活服务',
                        typeId: 8
                    },
                    {
                        icon: 'el-icon-view',
                        text: '丽人 / 美发 / 医学美容',
                        typeId: 9
                    },
                    {
                        icon: 'el-icon-tickets',
                        text: '结婚 / 婚纱摄影 / 婚宴',
                        typeId: 10
                    },
                    {
                        icon: 'el-icon-mobile-phone',
                        text: '亲子 / 儿童乐园 / 幼教',
                        typeId: 11     
                    },
                    {
                        icon: 'el-icon-info',
                        text: '运动健身 / 健身中心',
                        typeId: 12
                    },
                    {
                        icon: 'el-icon-edit-outline',
                        text: '家装 / 建材 / 家居',
                        typeId: 13
                    },
                    {
                        icon: 'el-icon-goods',
                        text: '学习培训 / 音乐培训',
                        typeId: 14
                    },
                    {
                        icon: 'el-icon-share',
                        text: '医疗健康 / 宠物 / 爱车',
                        typeId: 15
                    },
                    {
                        icon: 'el-icon-setting',
                        text: '酒吧 / 密室逃脱',
                        typeId: 16
                    }
            ]
        }
    },
    methods: {
        showNavDetail(navDetailData) {
            clearTimeout(this.timer);
            console.log(navDetailData)          
            if(navDetailData) {
                this.navDetailData = navDetailData;
            }
        },
        hideNavDetail() {            
            clearTimeout(this.timer)            
            this.timer = setTimeout(() => {                
                this.navDetailData = null;
            }, 100)
        }
    },
    components: {
        NavItem,
        HomePanel,
        MtNav,
        NavItemDetail
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
                        .nav-item 
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
