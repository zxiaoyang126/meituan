<template>
    
    <div class="first-letter-item" :id="'city-' + title">
        <span class="title">{{title}}</span>
        <span class="city">
            <a v-for="item in data" :key="item" @click.prevent="changeCity(item)">{{item}}</a> 
        </span>
    </div>
    
</template>


<script>
export default {
    props: {
        title: {
            default: '',
            type: String
        },
        data: {    
            default: () => [],        
            type: Array
        },
        changeCity: {
            type: Function
        }
    }
    
}
</script>


<style lang="stylus" scoped>
    $hover-color = #31BBAC

    a 
        cursor pointer
    .first-letter-item
        background #fff
        border-radius 8px
        padding 13px 30px 13px 10px
        transition all 0.6s
        &:hover 
            background #f8f8f8
        .title
            display inline-block
            width 40px
            height 40
            text-align center
            line-height 40px
            border-radius 50%
            background $hover-color
            color #ffffff
            font-size 18px
            vertical-align top
        .city
            display inline-block
            max-width 1050px
            a 
                margin 10px 20px
                display inline-block
                &:hover
                    color $hover-color
            


</style>
