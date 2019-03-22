<template>
    <div class="movie-info-wrap">
        <img :src="img" alt="">
        <div class="movie-description">
            <div class="movie-score" v-if="score">观众评<span>{{score}}</span></div>
            <div class="movie-score" v-else><span>{{wish}}</span>人想看</div>
            <div class="movie-name-buy">
                <span class="movie-name">{{name}}</span>
                <span class="movie-buy" v-if="score">购票</span>
                <span class="movie-buy" v-else>预售</span>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        name: {
            type: String
        },
        score: {
            type: Number
        },
        img: {
            type: String
        },
        wish: {
            type: Number
        }

    }
    
}
</script>


<style lang="stylus" scoped>
    .movie-info-wrap
        width 100%
        position relative
        img 
            width 100%
            border-radius 5px
            display block
        .movie-description
            width 100%
            position absolute
            right 0px
            bottom 0
            padding 12px 10px
            box-sizing border-box
            text-align left
            .movie-score 
                font-size 12px
                color #ffffff
                font-weight 700
                span    
                    font-size 16px
                    color #FD9827
                    font-weight 500
                    margin-left 5px
            .movie-name-buy
                position relative
                .movie-name 
                    font-size 16px
                    font-weight 500
                    color #ffffff
                .movie-buy 
                    background-color #FF4949
                    padding 0px 12px
                    font-size 14px
                    line-height 25px
                    color #ffffff
                    font-weight 700
                    border-radius 100px
                    position absolute
                    right 0
</style>
