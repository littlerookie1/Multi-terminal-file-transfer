<template>
    <div class="home">
        <login-register></login-register>
    </div>
</template>

<script>
    import loginRegister from "../components/loginRegister";

  export default {
    name: "Home",
    components: {
      loginRegister,
    }
  }
</script>

<style scoped>
    .home {
        background: url("../assets/imgs/home_background.jpg") no-repeat 0 220px;
        background-size: 1000px 320px;
    }


</style>