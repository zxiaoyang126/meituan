<template>
    <div class="home-wrap">
        <mt-header />
        <router-view></router-view>
        <mt-bottom />
        <mt-footer />
    </div>    
</template>


<script>
import MtHeader from "./MtHeader"
import MtFooter from './MtFooter'
import MtBottom from './MtBottom'

export default {
    name: 'Home',
    components: {
        MtHeader,
        MtFooter,
        MtBottom
    }
    
}
</script>
