<template>
  <div id="app">
    <router-view></router-view>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import SideBar from "./components/sidebar/sideBar";
  export default {
    components: {SideBar,  }
  }
</script>

<style scoped="scoped">
  /*#app{*/
  /*	width: 100vw;*/
  /*	height: 100vh;*/
  /*	background-color: #f5f5f5;*/
  /*}*/
</style>