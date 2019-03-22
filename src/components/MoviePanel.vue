<template>
    <div class="panel-wrap">
        <dl class="panel-nav clearfix">
            <dt>猫眼电影</dt>
            <dd v-for="(item, index) in classifyList" 
                :key="index" 
                :class="{active: currentIndex == index}"
                @mouseenter="changePanel(index)">
                {{item.text}}
            </dd>
        </dl>
        
        <ul class="panel-content clearfix">
            <el-carousel :interval="5000" arrow="hover" :autoplay="false" indicator-position="outside">
                <el-carousel-item v-for="(item, index) in currentMovieData" :key="index">
                    <li v-for="movie in item" :key="movie.id">
                        <movie-item :name="movie.name" :score="movie.score" :img="movie.img" :wish="movie.wish" />
                    </li>                    
                </el-carousel-item>
            </el-carousel>
        </ul>
    </div>
</template>


<script>
import MovieItem from './MovieItem'

export default {
    data() {
        return {
            currentIndex: 0,
            classifyList: [
                {
                    tab: 'hot',
                    text: '正在上映'
                },
                {
                    tab: 'coming',
                    text: '即将上映'
                }
            ],
            currentMovieType: 'hot',
            movieData: {
                hot: [
                    {
                        img: 'http://p1.meituan.net/movie/94b9bfc5ffeea6d6e362395992f547762041095.jpg@214w_297h_1e_1c',
                        name: '比悲伤更悲伤的故事',
                        score: 8.1
                    },
                    {
                        img: 'http://p1.meituan.net/movie/37f4140453b836bce84dc0457a7315638613528.jpg@214w_297h_1e_1c',
                        name: '狂暴凶狮',
                        score: 8.8
                    },
                    {
                        img: 'http://p0.meituan.net/movie/b8821d597382e319f9679b7e24e49d113204356.jpg@214w_297h_1e_1c',
                        name: '老师·好',
                        score: 9.6
                    },
                    {
                        img: 'http://p1.meituan.net/movie/034069fc367db8a7d9644717b416cc2c332883.jpg@214w_297h_1e_1c',
                        name: '惊奇队长',
                        score: 8.7
                    },
                    {
                        img: 'http://p1.meituan.net/movie/d94e5c3054778f6f48bff3a813b0b7cd5300998.jpg@214w_297h_1e_1c',
                        name: '波西米亚狂想曲',
                        score: 9.5
                    },
                    {
                        img: 'http://p1.meituan.net/movie/b8a625614c1d401d9cd170b092230ae01516197.jpg@214w_297h_1e_1c',
                        name: '地久天长',
                        score: 6.8
                    },
                    {
                        img: 'http://p1.meituan.net/movie/4d47b045a3f62bbccf94cb48ad5cbc64303329.jpg@214w_297h_1e_1c',
                        name: '乐高大电影2',
                        score: 8.1
                    },
                    {
                        img: 'http://p1.meituan.net/movie/c9b280de01549fcb71913edec05880585769972.jpg@214w_297h_1e_1c',
                        name: '绿皮书',
                        score: 9.0
                    },
                    {
                        img: 'http://p1.meituan.net/movie/42e660e4dbfa85cf67343b2aba10b71c3577509.jpg@214w_297h_1e_1c',
                        name: '篮球冠军',
                        score: 8.9
                    },
                    {
                        img: 'http://p1.meituan.net/movie/0aef20518b12365b524917332424e3c9293610.jpg@214w_297h_1e_1c',
                        name: '人间 喜剧',
                        score: 7.8
                    },
                ],
                coming: [
                    {
                        img: 'http://p1.meituan.net/movie/114220b4ea2740934ce17c376d082549106816.jpg@214w_297h_1e_1c',
                        wish: 37452,
                        name: 'A测试'
                    },
                    {
                        img: 'http://p1.meituan.net/movie/cd0820329098a64e157ee5af583f21f43774858.jpg@214w_297h_1e_1c',
                        wish: 14372,
                        name: '海市蜃楼'
                    },
                    {
                        img: 'http://p1.meituan.net/movie/0aef20518b12365b524917332424e3c9293610.jpg@214w_297h_1e_1c',
                        wish: 268485,
                        name: '人间 喜剧'
                    },
                    {
                        img: 'http://p0.meituan.net/movie/b9784931b6212e633978298fd827142b316254.jpg@214w_297h_1e_1c',
                        wish: 27359,
                        name: '小飞象'
                    },
                    {
                        img: 'http://p0.meituan.net/movie/753554a1ea46bf3db9562691ff8361cb1707722.jpg@214w_297h_1e_1c',
                        wish: 13258,
                        name: '精灵怪物'
                    },
                    {
                        img: 'http://p0.meituan.net/movie/ce1522190a6981f10dbf042c101e2191364876.jpg@214w_297h_1e_1c',
                        wish: 10548,
                        name: '警告'
                    },
                    {
                        img: 'http://p0.meituan.net/movie/99f6289c0836bee02c5a757ee52c54838763246.jpg@214w_297h_1e_1c',
                        wish: 6131,
                        name: '三重威胁之跨国大营救'
                    },
                    {
                        img: 'http://p0.meituan.net/movie/393949d704f8a328b363cc8dbe399f189438558.jpg@214w_297h_1e_1c',
                        wish: 4142,
                        name: '似水流年'
                    },
                    {
                        img: 'http://p0.meituan.net/movie/e0f5d1a3743e8d157d9c1dec3d16729c246215.jpg@214w_297h_1e_1c',
                        wish: 530,
                        name: '劫数难逃'
                    },
                    {
                        img: 'http://p1.meituan.net/movie/38e5797710258e1043ba708cd361d8331771520.jpg@214w_297h_1e_1c',
                        wish: 37452,
                        name: '碟仙实录'
                    }
                ]
            }                     
        }
    },
    methods: {
        changePanel(index) {
            this.currentIndex = index;
            this.currentMovieType = this.classifyList[ index ].tab;
        }
    },
    computed: {
        currentMovieData() {
            var movieList = [];
            var arr = this.movieData[ this.currentMovieType ];            
            movieList.push( arr.slice(0, 5) )
            movieList.push( arr.slice(5, 10) )
            return movieList
        }
    },
    components: {
        MovieItem
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
    .clearfix::before
        content " "
        display block
        height 0
        visibility hidden
        clear both
    .panel-wrap
        width 100%
        .panel-nav
            height 44px
            line-height 44px
            margin-top 40px            
            background-color rgb(250, 60, 104)
            color #fff
            border-top-left-radius 5px
            border-top-right-radius 5px
            padding-left 15px
            dt 
                font-size 18px
                margin-right 10px
                float left
                cursor pointer
            dd
                float left
                margin 0px 5px
                position relative
                cursor pointer
                font-size 14px
                &.active::after
                    content ""
                    display block
                    width 2px
                    border-left 5px solid transparent
                    border-right 5px solid transparent
                    border-bottom 7px solid #fff
                    position absolute
                    bottom 0px
                    left 50%
                    transform translate(-50%)
        .panel-content 
            width 100%
            border 1px solid #e5e5e5
            box-sizing border-box
            padding 20px 10px
            border-top none 
            background #ffffff
            border-bottom-left-radius 5px
            border-bottom-right-radius 5px
            li 
                float left
                width 20%
                text-align center
                padding 0px 10px
                box-sizing border-box 
                
</style>
