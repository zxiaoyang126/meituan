<template>

    <div>
        <li class="nav-item" v-for="item in navItemList" :key="item.typeId">        
            <i :class="item.icon"></i>
            <a>{{item.text}}<span v-if="item.isHot">HOT</span></a>
            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
        </li>
    </div>
</template>


<script>
export default {
    data() {
        return {

        }
    },
    props: {
        navItemList: {
            type: Array,
            default: []
        }
    }
};
</script>


<style lang="stylus" scoped>
    li.nav-item 
        padding:2px 12px
        flex 1
        color #ffffff    
        display flex
        align-items center
        background-color green      
        i:nth-of-type(1)
            margin-right 8px
            color rgba(255, 255, 255, .3)     
        a 
            flex 1
            color #ffffff
            opacity .9
            span 
                background #ffffff
                color #02B59D
                border-radius 10px
                margin-left 5px  
                padding: 0px 7px
                opacity 0.5    
                font-size 12px    
                transition all 0.5s                          
        &:hover 
            color #fff
            background rgba(255, 255, 255,.1)
            i:nth-of-type(1)
                color #fff
            a
                span 
                    opacity 1

</style>
