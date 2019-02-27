<template>
    <div class="main-item">
        <div class="item-img">
            <a href="#"><img src="https://p0.meituan.net/hotel/2c0b753dc53db93adab5c6177b3eb63c1312679.png@220w_125h_1e_1c" alt=""></a>            
        </div>

        <div class="item-desc">
            <div class="item-desc-top">
                <h2>上海迪士尼度假区</h2>
                <p>
                    <el-rate
                        v-model="value5"
                        disabled
                        text-color="#ff9900">
                    </el-rate>

                    <span>很好</span>
                    <span>4.8分</span>
                    <span class="comment-count">132628人评论</span>
                </p>

                <p>
                    <span>大型游乐场</span>
                    <span>浦东新区川沙新镇迎宾高速与沪芦高速交汇处东南角</span>
                    <span class="find-site"><i class="el-icon-location"></i>查看地图</span>
                </p>
                <p>
                    <span class="price">¥94起</span>
                </p>
            </div>
            <div class="item-desc-bottom"></div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            value5: 5,            
        }
    }
}
</script>


<style lang="stylus" scoped>
    .el-rate
        display inline-block
    .el-icon-star-on
        font-size 12px!important
    .main-item
        padding 15px 0px
        border-top 1px solid #e5e5e5
        overflow hidden
        .item-img
            width 220px
            float left
            img 
                width 100%
                border-radius 4px
        .item-desc
            float left
            margin-left 20px
            .item-desc-top 
                h2 
                    font-size 16px
                    color #333
                    font-weight 500
                p 
                    line-height 20px  
                    margin-top 6px                  
                    span 
                        margin-right 5px
                        font-size 12px
                        &.comment-count
                            color #f90
                        &.find-site
                            color #31BBAC
                        &.price
                            font-size 14px
                            color #f90
</style>
