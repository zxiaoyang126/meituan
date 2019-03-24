<template>
    <div class="mt-footer-wrap">

        <div class="footer-left">
            <p>
                <a href="#">©美团网团购 meituan.com</a>
                <a href="#">京ICP证070791号</a>
                <a href="#">京ICP备10211739号</a>
            </p>
            <p>
                <a href="#">广播电视节目制作经营许可证（京）字第03889号</a>
            </p>
            <p>
                <a href="#">食品经营许可证 互联网药品信息服务资格证</a>
            </p>
            <p>
                <a href="#">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
            </p>
        </div>
        <div class="footer-right">
            <p><a href="#">京公网安备11010502025545号</a></p>
            <p>
                <a href="#" class="bg record">备案信息</a>
                <a href="#" class="bg trust">可信网站</a>
                <a href="#" class="bg customer">12315消费争议</a>
            </p>
        </div>

    </div>


</template>


<script>
export default {
    
}
</script>


<style lang="stylus" scoped>
    .mt-footer-wrap
        width 1190px
        margin 0px auto
        overflow hidden
        padding 20px 0px 30px
        p 
            font-size 12px
            line-height 22px
            a:hover
                color #31BBAC
        .footer-left
            float left
            a 
                margin-right 10px
        .footer-right
            float right 
            text-align right
            .bg 
                height 38px
                background-image url('http://s0.meituan.net/bs/fe-web-meituan/cd77df7/img/sprites/footer.png')
                background-repeat no-repeat
                display inline-block
                overflow hidden
                width 0px
                padding-left 107px
                margin-top 8px
            .record
                padding-left 109px
                background-position 0 -167px                
            .trust                
                background-position 0 -127px
            .customer
                background-position 0 -40px


</style>
