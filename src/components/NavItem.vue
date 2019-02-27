<template>
    <li>        
        <i class="el-icon-tickets"></i>
        <a>{{title}}</a>
        <i class="el-icon-arrow-right" style="font-size: 10px"></i>
    </li>
</template>


<script>
export default {
    data() {
        return {

        }
    },
    props: {
        title: {
            default: '标题',
            type: String
        }
    }
};
</script>


<style lang="stylus" scoped>
</style>
