<template>

     <div class="detail-content-item">
        <h2 class="item-title clearfix">{{subtitle}}<span>更多</span></h2>
        <div class="item-box">
            <a href="#" v-for="(item, index) in childrenList" :key="index">{{item}}</a>           
        </div>
    </div>

</template>


<script>
export default {
    props: {
        subtitle: {
            type: String,
            default: '标题'
        },
        childrenList: {
            type: Array,
            default: []
        }
    }
    
}
</script>


<style lang="stylus" scoped>
    $hover-color = #31BBAC

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

</style>
