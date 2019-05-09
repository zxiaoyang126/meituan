<template>

    <div class="container">
        <mt-header />
        <div class="search-body">

            <div class="now-location">
                <a href="#">上海美团</a>
                <a href="#">{{$route.params.keyword}}</a>
            </div>
            <div class="search-content clearfix">
                <div class="content-main">
                    <div class="main-category-wrap">
                        <search-main-category />
                    </div>

                    <div class="main-list">
                        <div class="main-order">
                            <a href="" class="active">智能排序</a>
                            <a href="">价格排序</a>
                            <a href="">人气最高</a>
                            <a href="">评价最高</a>
                        </div>

                        <div class="main-item-wrap">
                            <search-main-item v-for="n in 10" :key="n" :title="$route.params.keyword" />
                        </div>
                    </div>
                </div>

                <!-- 右侧推荐 -->
                <div class="content-right">
                    <h1>猜你喜欢</h1>
                    <div class="recommend-group">

                        <a class="rec-group-item">
                            <img src="https://p1.meituan.net/msmerchant/1925d8c5cd245283ac488c2c1f31435311099.jpg@190w_106h_1e_1c" alt="">
                            <p class="seller-name">牛人自助纸上烤肉免费火锅（大柏树店）</p>
                            <p class="rate">
                                <el-rate
                                    disabled
                                    text-color="#ff9900"
                                    v-model="rate">
                                </el-rate>
                                <span>1887个评价</span>
                            </p>
                            <p class="address">五角场/大学区停车场</p>
                            <p class="price">￥<span>35.8</span>起</p>
                        </a>

                        <a class="rec-group-item">
                            <img src="https://p1.meituan.net/mogu/18c5e76a1bb79d5f4c460da90131a9a4412226.jpg@190w_106h_1e_1c" alt="">
                            <p class="seller-name">炭香园自助烧烤（人民北路店）</p>
                            <p class="rate">
                                <el-rate
                                    disabled
                                    text-color="#ff9900"
                                    v-model="rate">
                                </el-rate>
                                <span>1887个评价</span>
                            </p>
                            <p class="address">五角场/大学区停车场</p>
                            <p class="price">￥<span>58.0</span>起</p>
                        </a>


                        <a class="rec-group-item">
                            <img src="https://p1.meituan.net/bbia/01fa8981759bf069e150bee05c43fe3159913.jpg@190w_106h_1e_1c" alt="">
                            <p class="seller-name">华莱士（朱家角店）</p>
                            <p class="rate">
                                <el-rate
                                    disabled
                                    text-color="#ff9900"
                                    v-model="rate">
                                </el-rate>
                                <span>621个评价</span>
                            </p>
                            <p class="address">朱家角/东方绿舟</p>
                            <p class="price">￥<span>3.5</span>起</p>
                        </a>

                        <a class="rec-group-item">
                            <img src="https://p1.meituan.net/msmerchant/1925d8c5cd245283ac488c2c1f31435311099.jpg@190w_106h_1e_1c" alt="">
                            <p class="seller-name">牛人自助纸上烤肉免费火锅（大柏树店）</p>
                            <p class="rate">
                                <el-rate
                                    disabled
                                    text-color="#ff9900"
                                    v-model="rate">
                                </el-rate>
                                <span>1887个评价</span>
                            </p>
                            <p class="address">五角场/大学区停车场</p>
                            <p class="price">￥<span>35.8</span>起</p>
                        </a>

                        <a class="rec-group-item">
                            <img src="https://p1.meituan.net/mogu/18c5e76a1bb79d5f4c460da90131a9a4412226.jpg@190w_106h_1e_1c" alt="">
                            <p class="seller-name">炭香园自助烧烤（人民北路店）</p>
                            <p class="rate">
                                <el-rate
                                    disabled
                                    text-color="#ff9900"
                                    v-model="rate">
                                </el-rate>
                                <span>1887个评价</span>
                            </p>
                            <p class="address">五角场/大学区停车场</p>
                            <p class="price">￥<span>58.0</span>起</p>
                        </a>


                        <a class="rec-group-item">
                            <img src="https://p1.meituan.net/bbia/01fa8981759bf069e150bee05c43fe3159913.jpg@190w_106h_1e_1c" alt="">
                            <p class="seller-name">华莱士（朱家角店）</p>
                            <p class="rate">
                                <el-rate
                                    disabled
                                    text-color="#ff9900"
                                    v-model="rate">
                                </el-rate>
                                <span>621个评价</span>
                            </p>
                            <p class="address">朱家角/东方绿舟</p>
                            <p class="price">￥<span>3.5</span>起</p>
                        </a>
                    </div>
                </div>
                
            </div>
        </div>

        <mt-nav />

        <mt-bottom />

        <mt-footer />


    </div>
</template>


<script>
import MtHeader from './MtHeader'
import MtBottom from './MtBottom'
import MtFooter from './MtFooter'
import MtNav from './MtNav'
import SearchMainItem from '../components/SearchMainItem'
import SearchMainCategory from '../components/SearchMainCategory'
export default {
    data() {
        return {
            rate: 5
        }
    },

    components: {
        MtHeader,
        SearchMainItem,
        SearchMainCategory,
        MtNav,
        MtBottom,
        MtFooter
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

    .search-body
        width 1190px
        margin 0 auto
        .now-location
            margin 10px 0px
            a
                font-size 12px
                color #666
                &:hover
                    color $hover-color
                &:first-child::after
                    content ">"
                    margin-left 5px
        .search-content            
            .content-main
                width 950px
                float left 
                margin-top 10px
                .main-category-wrap, 
                .main-list
                    border 1px solid #e5e5e5
                    border-radius 4px
                    background #ffffff
                    padding 15px 20px
                    margin-bottom 10px
                    .main-order
                        padding-bottom 12px 
                        a
                            font-size 14px
                            font-weight 500
                            margin-right 25px
                            display inline-block
                            &.active
                                color $hover-color
                            &:nth-of-type(2)
                                position relative
                                &::before
                                    content ''
                                    display block
                                    position absolute
                                    border 4px solid #ccc
                                    border-left-color transparent
                                    border-right-color transparent
                                    border-top none
                                    top 6px                           
                                    right -10px
                                &::after
                                    content ''
                                    display block
                                    position absolute
                                    border 4px solid #ccc
                                    border-left-color transparent
                                    border-right-color transparent
                                    border-bottom none
                                    bottom 3px
                                    right -10px
                                
                
                
            .content-right
                width 230px
                float right
                border: 1px solid #e5e5e5
                border-radius: 4px
                background: #fff
                padding: 15px 20px
                box-sizing border-box
                margin-top 10px
                h1 
                    font-size 16px
                .recommend-group
                    padding-top 15px
                    .rec-group-item
                        display block
                        margin-bottom 15px
                        img 
                            width 100%
                            border-radius 4px                        
                        .seller-name 
                            font-size 14px     
                            margin 5px 0     
                        .rate 
                            .el-rate
                                display inline-block
                                .el-rate__item
                                    .el-rate__icon
                                        font-size 14px!important
                                .el-icon-star-on
                                    font-size 14px!important
                            span 
                                color #bbb
                                font-size 13px   
                        .address 
                            font-size 13px
                            color #999
                            margin 5px 0     
                        .price 
                            color #f60
                            font-size 16px
                            span    
                                font-size 24px   
                                margin 0 3px     





</style>
