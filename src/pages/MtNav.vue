<template>
    <div class="nav-wrap">
        <div class="nav-title">
            美团导航
        </div>

        <mt-nav-item 
            v-for="(item, index) in mtNavItem" 
            :key="index"
            :subtitle="item.subtitle"
            :items="item.items"
            class="aaa"          
        />      
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
                    items: ['太原', '佛山', '郑州', '长沙', '南宁', '天津', '宁波', '青岛', '厦门', '南京', '武汉',
                        '东莞', '长春', '大连', '济南', '成都', '北京', '沈阳', '哈尔滨', '西安'
                    ]
                },
                {
                    subtitle: '热门分类',
                    items: ['酒店', '美食', '休闲娱乐', '运动健身', '生活服务', '上门服务', '购物', '时尚购', '本地购物', '结婚', 
                        '摄影写真', '宴会', '丽人', '母婴亲子', '学习培训', '家装', '汽车服务', '医疗', '宠物'
                    ]
                },
                {
                    subtitle: '周边热门',
                    items: ['彰化酒店', '彰化美食', '彰化休闲娱乐', '太仓购物', '宜兰上门服务', '宜兰生活服务', '彰化时尚购', '太仓丽人', '彰化结婚', '彰化本地购物',
                        '彰化母婴亲子', '彰化学习培训', '宜兰汽车服务', '宜兰宠物', '彰化医疗', '太仓家装', '宜兰宴会', '太仓摄影写真', '彰化运动健身'
                    ]
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
        width 1190px
        border 1px solid #d8d8d8
        border-radius 5px      
        box-sizing border-box
        background-color #fff
        margin 0 auto
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
        .aaa
            .sub-content
                background-color red
            

</style>
