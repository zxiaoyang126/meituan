<template>
    <div class="changecity-wrap">
        <div class="province-wrap">
            <div class="province-content">
                <span class="title">按省份选择：</span>

                <div class="province-city-choose">
                    <div class="province-choose item clearfix" @click.stop="showAllProvinceHandler">
                        {{ currentProvince }}<i class="el-icon-caret-bottom"></i>

                        <div class="all-province" v-if="showAllProvince">
                            <p>省份</p>
                            <ul class="clearfix">
                                <li>
                                    <span 
                                        v-for="item in ProvinceList.slice(0, 12)" 
                                        :key="item"
                                        :class="{active: currentProvince == item}" 
                                        @click.stop="chooseProvinceHandler(item)">{{item}}
                                    </span>                                    
                                </li>
                                <li>
                                    <span 
                                        v-for="item in ProvinceList.slice(12, 24)" 
                                        :key="item"
                                        :class="{active: currentProvince == item}" 
                                        @click.stop="chooseProvinceHandler(item)">{{item}}
                                    </span>                                    
                                </li>
                                <li>
                                    <span 
                                        v-for="item in ProvinceList.slice(24, 36)" 
                                        :key="item"
                                        :class="{active: currentProvince == item}" 
                                        @click.stop="chooseProvinceHandler(item)">{{item}}
                                    </span>                                    
                                </li>                               
                            </ul>
                        </div>
                    </div>
                    <div class="city-choose item clearfix" :class="{allow: currentProvince == '省份'}"  @click.stop="showAllcityHandler">
                        城市<i class="el-icon-caret-bottom"></i>

                         <div class="all-city" v-if="showAllcity">
                            <p>城市</p>
                            <ul class="clearfix">
                                <li v-for="(item, index) in cityList" :key="index">
                                    <span v-for="city in item.column" :key="city" @click="changeCity(city)">{{city}}</span>
                                </li>                                              
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div class="city-search">
                <span class="title">直接搜索：</span>
                <input type="text" placeholder="请输入城市中文或拼音" 
                        v-model="searchCityKeyWord" 
                        @input="searchHandler" 
                        @focus="searchHandler"
                        @blur="blurHandler" 
                />

                <div class="search-result" v-if="showSearchResult">
                    <div class="no-result" v-if="showNoResult">未找到匹配城市</div>

                    <div class="has-result" v-if="showHasResult">
                        <a href="#" v-for="item in 20" :key="item">城市{{searchCityKeyWord}}</a>                      
                    </div>
                </div>
            </div>
        </div>

        <div class="hot-city">
            <span class="title">热门城市：</span>
            <a @click.prevent="changeCity(city)" v-for="(city, index) in hotCity" :key="index + city">{{city}}</a>      
        </div>
        <div class="visited">
            <span class="title">最近访问：</span>
            <a href="#">西安</a>
            <a href="#">重庆</a>
            <a href="#">杭州</a>
            <a href="#">南京</a>
            <a href="#">武汉</a>
        </div>

        <div class="first-letter">
            <span class="title">按拼音首字母选择：</span>
            <a :href="'#city-' + item" v-for="item in ABC" :key="item">{{item}}</a>
        </div>

        <div class="first-letter-list">

            <first-letter-item 
                v-for="item in letterListData" 
                :key="item.title" 
                :title="item.title" 
                :data="item.data"
                :changeCity="changeCity" 
            />

        </div>
       
    </div>
</template>


<script>
import FirstLetterItem from '../components/FirstLetterItem';
import { mapMutations } from 'vuex'


export default {
    data() {
        return {
            showAllProvince: false,
            showAllcity: false,
            showSearchResult: false,
            showNoResult: false,
            showHasResult: false,
            currentProvince: '省份',
            searchCityKeyWord: '',
            ProvinceList: [
                '山东', '甘肃', '江苏', '北京', '云南', '海南', 
                '浙江', '上海', '天津', '陕西', '新疆', '贵州', 
                '安徽', '澳门', '湖南', '河北', '香港', '辽宁', 
                '四川', '宁夏', '吉林', '福建', '湖北', '广东',
                '重庆', '陕西', '江西', '黑龙江', '青海', '河南',
                '台湾', '内蒙古', '西藏', '广西'
            ],
            cityList: [
                {
                    column: ['博尔塔拉', '陕西', '江西', '黑龙江', '青海', '河南', '四川', '宁夏', '吉林', '福建', '湖北', '广东',]
                },
                {
                    column: ['山东', '甘肃', '江苏', '北京', '云南', '海南', '浙江', '上海', '乌鲁木齐', '陕西', '新疆', '贵州',]
                },
                {
                    column: ['安徽', '澳门', '湖南', '河北', '香港', '阿图什市', '四川', '宁夏', '吉林', '福建', '湖北', '广东',]
                },
                {
                    column: ['重庆', '陕西', '江西', '黑龙江', '青海', '河南', '台湾', '内蒙古', '西藏', '广西']
                }
            ],
            ABC: 'ABCDEFGHJKLMNPQRSTWXYZ',
            letterListData: [
                {
                    title: 'A',
                    data: ['鞍山', '安庆', '安阳', '安顺', '安康', '安丘', '安岳', '安陆市', '阿克苏',
                        '安州区', '阿图什市', '安吉', '阿拉善盟', '阿荣旗', '安平', '安溪', '安宁', '安化',
                        '阿拉尔', '安福', '阿勒泰市', '阿城区', '澳门', '阿勒泰', '阿里', '阿坝'
                    ]
                },
                {
                    title: 'B',
                    data: ['北京', '包头', '保定', '蚌埠', '亳州', '滨州', '宝鸡', '白城', '霸州',
                        '巴彦淖尔', '北海', '百色', '巴中', '毕节', '保山', '本溪', '白银', '巴楚县',
                        '宝丰', '博兴', '彬州市', '巴彦县', '泊头市', '博罗县', '北安市', '博尔塔拉'
                    ]
                },
                {
                    title: 'C',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'D',
                    data: ['大连', '东莞', '大同', '大庆', '德州', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'E',
                    data: ['鄂尔多斯', '鄂州', '恩施', '恩平', '峨眉山', '额敏县', '额尔古纳']
                },
                {
                    title: 'F',
                    data: ['重庆', '福州', '常州', '佛山', '长春', '阜阳', '奉化', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '丰城', '崇州', '成武县', '肥城'
                    ]
                },
                {
                    title: 'G',
                    data: ['广州', '成都', '贵阳', '长沙', '长春', '桂林', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '高州', '昌都'
                    ]
                },
                {
                    title: 'H',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'J',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'K',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'L',
                    data: ['鄂尔多斯', '鄂州', '恩施', '恩平', '峨眉山', '额敏县', '额尔古纳']
                },
                {
                    title: 'M',
                    data: ['重庆', '福州', '常州', '佛山', '长春', '阜阳', '奉化', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '丰城', '崇州', '成武县', '肥城'
                    ]
                },
                {
                    title: 'N',
                    data: ['广州', '成都', '贵阳', '长沙', '长春', '桂林', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '高州', '昌都'
                    ]
                },
                {
                    title: 'P',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'Q',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'R',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'S',
                    data: ['鄂尔多斯', '鄂州', '恩施', '恩平', '峨眉山', '额敏县', '额尔古纳']
                },
                {
                    title: 'T',
                    data: ['重庆', '福州', '常州', '佛山', '长春', '阜阳', '奉化', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '丰城', '崇州', '成武县', '肥城'
                    ]
                },
                {
                    title: 'W',
                    data: ['广州', '成都', '贵阳', '长沙', '长春', '桂林', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '高州', '昌都'
                    ]
                },
                {
                    title: 'X',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'Y',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                },
                {
                    title: 'Z',
                    data: ['重庆', '成都', '常州', '长沙', '长春', '沧州', '长治', '赤峰', '慈溪',
                        '滁州', '常熟', '常德', '承德', '郴州', '潮州', '巢湖', '长兴', '长乐',
                        '昌吉', '澄迈县', '常宁市', '长丰县', '崇明区', '崇州', '成武县', '昌都'
                    ]
                }
            ],
            hotCity: ['北京', '上海', '深圳', '天津', '西安', '重庆', '杭州', '南京', '武汉', '成都']
        }
    },
    methods: {
        showAllProvinceHandler() {
            this.showAllProvince = true;
        },
        showAllcityHandler() {
            if(this.currentProvince == '省份') return;
            this.showAllcity = true;
        },
        chooseProvinceHandler(city) {
            this.currentProvince = city;
            this.showAllProvince = false;
        },
        searchHandler() {
            if(this.searchCityKeyWord === '1' || this.searchCityKeyWord === '') {
                this.showSearchResult = true;
                this.showNoResult = true;
                this.showHasResult = false;
            } else {
                this.showSearchResult = true;
                this.showNoResult = false;
                this.showHasResult = true;
            }
        },        
        blurHandler() {
            this.showSearchResult = false;
            this.showNoResult = false;
            this.showHasResult = false;
        },
        ...mapMutations({
            cityChange: 'changeCity'
        }),
        changeCity(city) {
            this.cityChange(city);
            this.$router.push('/home');
        }
    },
    computed: {

    },
    mounted() {
        document.onclick = () => {
            this.showAllProvince = false;
            this.showAllcity = false;           
        }
    },
    components: {        
        FirstLetterItem
    }
}
</script>


<style lang="stylus" scoped>
    $hover-color = #31BBAC
    a {
        cursor: pointer
    }
    .changecity-wrap 
        width 1190px
        margin 0 auto
        border 1px solid #e5e5e5
        box-sizing border-box 
        border-radius 4px
        padding 20px
        margin 20px auto 0
        background #ffffff
        .title
            font-size 16px
            font-weight 500
            color #333
        .province-wrap 
            border-bottom 1px solid #e5e5e5
            padding-bottom 30px
            .province-content
                display inline-block
                margin-right 40px
                .province-city-choose
                    display inline-block
                    .item
                        display inline-block   
                        vertical-align middle
                        width 150px
                        height 40px
                        line-height 20px
                        padding 10px 
                        border 1px solid #e5e5e5
                        border-radius 4px
                        cursor pointer
                        box-sizing border-box
                        font-size 14px 
                        color #666
                        margin 0 10px
                        position relative
                        i 
                            float right
                        &.allow
                            cursor not-allowed
                        .all-province, .all-city
                            position absolute
                            border 1px solid #e5e5e5
                            border-radius 4px
                            left -1px
                            top 45px
                            min-width 264px
                            height 375px
                            padding 20px 0px 20px 15px
                            box-sizing border-box 
                            background-color #ffffff
                            box-shadow 0 3px 5px 0 rgba(0,0,0,.1)
                            cursor default
                            //三角形
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
                                left 40px 
                                top -5px
                            p
                                font-size 16px
                                color #ccc
                                margin-bottom 10px
                            //省份列表
                            ul
                                li 
                                    float left
                                    span 
                                        display table
                                        box-sizing border-box                                        
                                        font-size 12px
                                        color #666
                                        padding 0px 8px                                        
                                        cursor pointer
                                        margin 6px 38px 6px 0px                                        
                                        min-width 40px
                                        &:hover 
                                            color $hover-color
                                        &.active
                                            background $hover-color
                                            border-radius 10px
                                            color #fff
                        .all-city
                            min-width 150px              
                            ul 
                                display table-row
                                li
                                    display table-cell
                                    float none
                                    white-space nowrap

                            
            .city-search
                display inline-block
                position relative
                input 
                    width 220px
                    height 40px
                    text-indent 10px
                    margin-left 10px
                    border 1px solid #e5e5e5
                    border-radius 4px
                    outline none
                    color #666
                    box-sizing border-box
                .search-result
                    position absolute
                    border 1px solid #e5e5e5
                    border-radius 4px
                    left 94px
                    top 45px                    
                    box-sizing border-box 
                    background-color #ffffff
                    box-shadow 0 3px 5px 0 rgba(0,0,0,.1)
                    cursor default
                    //三角形
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
                        left 40px 
                        top -5px
                    .no-result
                        font-size 12px
                        color #666
                        box-sizing: border-box
                        min-width 40px
                        padding: 10px 20px 10px 15px                       
                    .has-result
                        min-width 150px
                        max-height 375px
                        overflow-y scroll
                        padding 5px 20px 5px 15px
                        box-sizing border-box 
                        background-color #ffffff
                        border-radius 4px
                        a 
                            display block
                            padding 0px 8px
                            margin 6px 38px 6px 0
                            &:hover
                                color $hover-color
                    
        .hot-city, .visited
            line-height 80px
            height 80px
            border-bottom 1px solid #e5e5e5
            a
                font-size 14px
                color #666
                margin 0 20px 0 10px
                &:hover
                    color $hover-color
        .first-letter
            border none
            line-height 80px
            height 80px
            a   
                margin 0px
                border-radius 50%
                width 25px
                height 25px
                display inline-block
                text-align center 
                line-height 25px
                margin 0 10px
                &:hover
                    background #e5e5e5

</style>
