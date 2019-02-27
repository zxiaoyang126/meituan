<template>
    <div class="main-category clearfix">

        <span class="classify">分类</span>
        <a class="all"><span>全部</span></a>

        <div class="all-classify">
            <ul class="clearfix">
                <li>美食</li>
                <li>酒店住宿</li>
                <li>周边游</li>
                <li>休闲娱乐</li>
                <li>生活服务</li>
                <li>时尚购</li>
                <li>旅游</li>         
                <li>丽人</li>         
                <li>汽车服务</li>         
                <li class="no-triangle">榛果民宿</li>         
            </ul>
        </div>

    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="stylus" scoped>
    .clearfix::after 
        content " "
        display block
        height 0
        visibility hidden
        clear both

    .main-category
        .classify, .all
            width 80px
            height 22px
            line-height 22px            
            font-size 14px
            float left
        .classify
            color #333
        .all 
            span 
                display inline-block
                padding 0px 10px
                background-color #31BBAC
                color #ffffff
                border-radius 10px
        .all-classify
            border-bottom 1px solid #e5e5e5
            margin-left 160px
            padding-bottom 10px
            ul 
                width 100%
                li 
                    float left
                    line-height 22px
                    height 22px
                    font-size 14px
                    padding 0px 10px
                    &::after 
                        content ''
                        display inline-block
                        position relative
                        left 4px
                        top 2px
                        border 4px solid transparent 
                        border-top-color #666
                li.no-triangle::after 
                    content ''
                    display none


</style>
