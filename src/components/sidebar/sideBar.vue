<template>
    <div id="side-bar">
        <div id="control-side-bar" @click="show =! show" >
            <img  src="../../assets/imgs/图层管理.svg" alt="" @click="isRotate"
                  :class="{rotate:isOnclick,rotateBack:noOnclick}">
        </div>
        <transition name="slide-fade">
            <div v-if="show" id="side-bar-container" >
                <side-bar-item path="/home">
                    <img slot="item-icon" src="../../assets/imgs/shouye.svg" alt="">
                    <span slot="item-text">首页</span>
                </side-bar-item>
                <side-bar-item path="/product">
                    <img slot="item-icon" src="../../assets/imgs/chanpin.svg" alt="">
                    <span slot="item-text">产品</span>
                </side-bar-item>
                <side-bar-item path="/download">
                    <img slot="item-icon" src="../../assets/imgs/xiazai.svg" alt="">
                    <span slot="item-text">下载</span>
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
        isOnclick: false,
        noOnclick: true
      }
    },
    components: {
      SideBarItem
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      },
      isRotate() {
        this.isOnclick = !this.isOnclick
        this.noOnclick = !this.noOnclick
      }
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
        position: absolute;
        top: -75px;
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
        background-color: rgba(100,100,100,0.2);
        border-radius: 0 20px 20px 0 ;
    }

    .side-bar-item span {
        position: relative;
        top: -14px;
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

    .rotate {
        animation: Rotate 0.5s;
    }
    .rotateBack {
        animation: RotateBack 0.5s;
    }
    @keyframes Rotate {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }
    @keyframes RotateBack {
        0% {transform: rotate(0deg)}
        100% {transform: rotate(360deg)}
    }

</style>