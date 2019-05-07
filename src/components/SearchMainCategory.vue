<template>
    <div class="main-category clearfix">

        <span class="classify">分类</span>
        <a class="all"><span>全部</span></a>

        <div class="all-classify">
            <ul>
                <li v-for="item in classifyList" :key="item">{{item}}</li>                
                <li class="no-triangle">榛果民宿</li>         
            </ul>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            classifyList: ['美食', '酒店住宿', '周边游', '休闲娱乐', '生活服务', '宴会', '时尚购',
                '旅游', '丽人', '运动健身', '母婴亲子', '宠物', '汽车服务', '摄影写真', '学习培训',
                '交通枢纽', '家装', '医疗', '结婚'
            ]
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
                overflow hidden                
                li 
                    float left
                    line-height 22px
                    width 16.6%
                    height 22px
                    font-size 14px
                    padding 0px 10px
                    margin-bottom 8px
                    box-sizing border-box
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
