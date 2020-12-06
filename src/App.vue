<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import SideBar from "./components/sidebar/sideBar";
  import navBar from "./components/navBar";
  export default {
    components: {
      SideBar,
      navBar
    }
  }
</script>

<style scoped="scoped">
  /*#app{*/
  /*	width: 100vw;*/
  /*	height: 100vh;*/
  /*	background-color: #f5f5f5;*/
  /*}*/
</style>