<template>
  <div id="app">   
    <router-view></router-view>
  </div>
</template>

<script>
import MtHeader from "./pages/MtHeader"
import MtFooter from './pages/MtFooter'
import MtBottom from './pages/MtBottom'

export default {
  name: "App",
  components: {
    MtHeader,
    MtFooter,
    MtBottom
  }
};
</script>

<style>
  @import url('./assets/reset.css');

  

  .clearfix::after {
    content: " ";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }
      
  .clearfix::before {
    content: " ";
    display: block;
    height: 0;
    visibility: hidden;
    clear: both;
  }    
  
</style>
