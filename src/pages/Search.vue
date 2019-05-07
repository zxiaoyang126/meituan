<template>

    <div class="container">
        <mt-header />
        <div class="search-body">

            <div class="now-location">
                <a href="#">上海美团</a>
                <a href="#">{{$route.params.keyword}}</a>
            </div>
            <div class="search-content">
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


                <div class="content-right">111</div>
            </div>
        </div>
    </div>
</template>


<script>
import MtHeader from './MtHeader'
import SearchMainItem from '../components/SearchMainItem'
import SearchMainCategory from '../components/SearchMainCategory'
export default {

    components: {
        MtHeader,
        SearchMainItem,
        SearchMainCategory
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
                background #333



</style>
