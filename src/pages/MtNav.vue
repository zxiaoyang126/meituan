<template>
    <div class="nav-wrap">
        <div class="nav-title">
            美团导航
        </div>

        <mt-nav-item />      
    </div>


</template>


<script>

import MtNavItem from '../components/MtNavItem'

export default {

    data() {
        return {
            mtNavItem: [
                {
                    subtitle: '热门城市',
                    items: ['']
                }
            ]
        }
    },
    props: {

    },

    components: {
        MtNavItem
    }
    
}
</script>



<style lang="stylus" scoped>

    .nav-wrap
        width 100%
        border 1px solid #d8d8d8
        border-radius 5px      
        .nav-title
            width 100%
            height 44px
            line-height 44px
            background-color #0ECAC7 
            border-top-left-radius 5px
            border-top-right-radius 5px
            font-size 16px
            color #ffffff
            font-weight 500 
            text-indent 20px
            margin-bottom 15px 

            

</style>
