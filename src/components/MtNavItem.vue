<template>
    <div class="nav-content clearfix">
        <span class="sub-title">{{subtitle}}</span>
        <div class="sub-content" :style="bottomBorder">
            <a href="" v-for="(item, index) in items" :key="index">{{item}}</a>            
        </div>
    </div>
</template>


<script>
export default {

    props: {
        subtitle: {
            type: String
        },
        items: {
            type: Array
        }
    },
    computed: {
        bottomBorder() {
            if( this.subtitle === '周边热门' ) {
                return {
                    border: 'none'
                }
            }
        }
    }
    
}
</script>


<style lang="stylus" scoped>
    .nav-content            
        .sub-title
            width 98px
            text-align center
            padding 10px 0
            font-size 14px
            color #222
            font-weight 500
            float left
        .sub-content
            width 1090px
            float left
            padding-top 12px
            border-bottom 1px solid #d8d8d8
            a
                float left
                width 100px
                margin-bottom 10px
                font-size 12px
                &:hover
                    color #31BBAC
</style>
