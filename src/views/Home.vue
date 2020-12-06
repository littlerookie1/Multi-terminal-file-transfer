<template>
    <div class="home">
        <nav-bar></nav-bar>
        <login-register></login-register>
    </div>
</template>

<script>
    import loginRegister from "../components/loginRegister";
    import NavBar from "../components/navBar";

  export default {
    name: "Home",
    components: {
      NavBar,
      loginRegister,
    }
  }
</script>

<style scoped>
    .home {
        background: url("../assets/imgs/home_background.jpg") no-repeat -600px;
    }


</style>