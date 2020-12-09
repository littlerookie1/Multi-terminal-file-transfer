<template>
    <div id="nav-bar">
        <div class="nav-bar-item1">
            <img src="../assets/imgs/发送.svg" alt="">
        </div>
        <div class="nav-bar-item2">
            <span>Multi-terminal file transfer</span>
        </div>
        <div class="nav-bar-item3" >
            <img src="../assets/imgs/登录.svg" alt="">
        </div>
        <div class="nav-bar-item4" @click="toLogin" >
            <span>登录/注册</span>
        </div>
        <div class="nav-bar-item5">
            <img src="../assets/imgs/我的.svg" alt="">
        </div>
        <div class="nav-bar-item6">
            <span>Simple And Quick</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "navBar",
    methods: {
      toLogin() {
        this.$router.replace('/home')
        console.log(123)
      },
    }
  }
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    #nav-bar {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 90px;
        background-color: #f0f0f0;
        box-shadow : 0px 1px 1px rgba(100,100,100,0.4);
        z-index: 99;
    }
    .nav-bar-item1 {
        position: relative;
        top: 15px;
        left: 40px;
    }
    .nav-bar-item1 img {
        width: 70px;
        height: 70px;
    }
    .nav-bar-item2 span {
        position: absolute;
        top: 38px;
        left: 110px;
        font-size: 20px;
    }
    .nav-bar-item3 {
        position: absolute;
        top: 30px;
        right: 200px;
    }
    .nav-bar-item3 img {
        width: 40px;
        height: 40px;
    }
    .nav-bar-item4 {
        position: absolute;
        top: 30px;
        right: 110px;
        padding: 10px;
        border: 1px solid bisque;
        border-radius: 60px;
        background-color: bisque;
        cursor: pointer;
    }
    .nav-bar-item5 {
        position: absolute;
        top: 25px;
        right: 50px;
    }
    .nav-bar-item5 img {
        width: 50px;
        height: 50px;
    }
    .nav-bar-item6 {
        position: absolute;
        top: 25px;
        left: 600px;
        font: italic 40px Georgia,Serif;
        color: lightsalmon;
    }
</style>