<template>
    <div class="main-category clearfix">

        <span class="classify">分类</span>
        <a class="all"><span>全部</span></a>

        <div class="all-classify">          
            <ul class="clearfix">
                <li v-for="(classify, index) in classifyList" :key="classify + index">
                    <div>
                        <span :class="{xsj: !classify.children}">{{classify.title}}</span>
                        <dl v-if="classify.children">
                            <dt>{{classify.title}}</dt>
                            <dd v-for="item in classify.children" :key="item">{{item}}</dd>                        
                        </dl>
                    </div>
                </li>
               
            </ul>
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {           
            classifyList: [
                {
                    title: '美食',
                    children: ['全部', '食品保健', '特色菜', '饮品店', '面包甜点', '生日蛋糕', '火锅',
                        '自助餐', '小吃快餐', '日本菜', '西餐', '聚餐宴请', '烧烤烤肉', '川湘菜', '江浙菜',
                        '粤菜', '咖啡酒吧', '徽菜', '京菜', '鲁菜', '生鲜蔬果', '云贵菜', '东南亚菜', '江河湖海鲜',
                        '台湾/客家菜', '汤/粥/炖菜', '新疆菜'
                    ]
                },
                {
                    title: '酒店住宿',
                    children: ['全部', '情侣酒店', '经济型酒店', '高端酒店', '高星酒店', '低星酒店', '公寓民宿',
                        '多人出行', '品牌连锁'
                    ]
                },
                {
                    title: '周边游',
                    children: ['全部', '景点', '主题公园', '动植物园', '游船', '酒景套餐', '真人CS',
                        '农家乐', '景点套餐'
                    ]
                },
                {
                    title: '休闲娱乐',
                    children: ['全部', '新奇体验', '团建拓展', '酒吧', '电玩/游戏厅', '运动健身', 'DIY手工坊',
                        '轰趴馆', '采摘/农家乐', 'VR', '文化艺术'
                    ]
                },
                {
                    title: '生活服务',
                    children: ['全部', '彩票', '洗涤护理', '证件照', '照片冲印', '汽车服务', '宠物服务',
                        '体检/齿科', '送水站', '健康服务', '鲜花配镜', '母婴亲子', '商务服务', '房屋地产', '文化传媒'
                    ]
                },
                {
                    title: '宴会',
                    children: ['全部', '婚礼会所', '特色餐厅', '酒店宴会厅']
                },
                {
                    title: '时尚购',
                    children: ['全部', '本地购物', '配镜', '鲜花']
                },
                {
                    title: '旅游',
                    children: ['全部', '国内游']
                },
                {
                    title: '丽人',
                    children: ['全部', '美发', '美容美体', '美甲美睫', '化妆品']
                },
                {
                    title: '运动健身',
                    children: ['全部', '游泳', '篮球', '滑冰', '足球', '体育场馆']
                },
                {
                    title: '母婴亲子',
                    children: ['全部', '儿童STEM', '儿童乐园', '儿童摄影', '幼儿教育', '亲子购物', '采摘/农家乐']
                },
                {
                    title: '宠物',
                    children: ['全部', '购宠', '宠物医院']
                },

                {
                    title: '汽车服务',
                    children: ['全部', '美容洗车', '维修保养', '汽车用品', '汽车改装', '汽车配件']
                },
                {
                    title: '摄影写真',
                    children: ['全部', '亲子摄影']
                },
                {
                    title: '学习培训',
                    children: ['全部', '音乐培训', '驾校']
                },
                {
                    title: '交通枢纽',
                    children: ['全部', '美发', '美容美体', '美甲美睫', '化妆品']
                },
                {
                    title: '家装',
                    children: ['全部', '游泳', '篮球', '滑冰', '足球', '体育场馆']
                },
                {
                    title: '医疗',
                    children: ['全部', '精神卫生机构', '医院', '体检中心', '药店']
                },
                {
                    title: '结婚',
                    children: ['全部', '婚纱礼服', '婚戒首饰', '婚宴']
                },
                {
                    title: '榛果民宿'                    
                }
            ]
        }
    }
    
}
</script>


<style lang="stylus" scoped>

    .main-category
        .classify, .all
            width 80px
            height 22px
            line-height 22px            
            font-size 14px
            float left
        .classify
            color #333
        .all
            span 
                display inline-block
                padding 0px 10px
                background-color #31BBAC
                color #ffffff
                border-radius 10px
        .all-classify
            border-bottom 1px solid #e5e5e5
            margin-left 160px
            padding-bottom 10px
            ul 
                width 100%                              
                li 
                    float left
                    line-height 22px
                    width 16.6%
                    height 22px
                    padding 0px 10px
                    margin-bottom 8px
                    box-sizing border-box
                    position relative                    
                    div 
                        display inline-block
                        position relative
                        padding-bottom 25px
                        cursor pointer
                        &:hover 
                            dl 
                                display block
                        span 
                            font-size 14px
                            &::after 
                                content ''
                                display inline-block
                                position relative
                                left 5px
                                top 2px
                                border 4px solid transparent 
                                border-top-color #666
                            &.xsj::after
                                content ''
                                display none 
                        dl
                            position absolute
                            border 1px solid #e5e5e5
                            border-radius 4px
                            left -10px
                            top 25px
                            width 392px
                            padding 20px 15px 10px 15px
                            box-sizing border-box 
                            background-color #ffffff
                            box-shadow 0 3px 5px 0 rgba(0,0,0,.1)
                            cursor default
                            z-index 99
                            display none
                            dt 
                                font-size 16px
                                color #ccc
                                margin-bottom 10px
                            dd 
                                color #666
                                font-size 12px
                                float left
                                width 120px                           
                            &::before
                                content ""
                                display block
                                position absolute
                                width 7px 
                                height 7px
                                border 1px solid #e5e5e5
                                border-right-color transparent
                                border-bottom-color transparent
                                transform rotate(45deg)
                                background #ffffff
                                left 30px 
                                top -5px     
                    


</style>
