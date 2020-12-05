<template>
    <div id="side-bar">
        <div id="control-side-bar" @click="show =! show, rotate" >
            <img src="../../assets/imgs/图层管理.svg" alt="" >
        </div>
        <transition name="slide-fade">
            <div v-if="show" id="side-bar-container" >
                <side-bar-item path="/home">
                    <img slot="item-icon" src="../../assets/imgs/首页.svg" alt="">
                    <span slot="item-text">首页</span>
                </side-bar-item>
                <side-bar-item path="/product">
                    <img slot="item-icon" src="../../assets/imgs/首页.svg" alt="">
                    <span slot="item-text">首页</span>
                </side-bar-item>
                <side-bar-item path="help">
                    <img slot="item-icon" src="../../assets/imgs/首页.svg" alt="">
                    <span slot="item-text">首页</span>
                </side-bar-item>
                <side-bar-item path="download">
                    <img slot="item-icon" src="../../assets/imgs/首页.svg" alt="">
                    <span slot="item-text">首页</span>
                </side-bar-item>
            </div>
        </transition>
    </div>
</template>

<script>

  import SideBarItem from "./sideBarItem";
  export default {
    name: "sideBar",
    data() {
      return {
        show: false,
      }
    },
    components: {
      SideBarItem
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      },
    }
  }
</script>

<style scoped>
    #side-bar {
        position: absolute;
        top: 180px;
        left: 0px;
        width: 100px;
        height: 500px;
        /*background-color: aquamarine;*/
    }
    #control-side-bar {
        position: fixed;
        top: 100px;
        left: 30px;
        cursor: pointer;
    }
    #control-side-bar img {
        width: 60px;
        height: 60px;
    }
    #side-bar-container {
        display: flex;
        flex-direction: column;
    }


    /*控制sidebar出入动画*/
    .slide-fade-enter-active {
        transition: all .6s ease;
    }
    .slide-fade-leave-active {
        transition: all .9s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(-10px);
        opacity: 0;
    }

</style>