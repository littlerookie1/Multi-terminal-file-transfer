<template>
    <div class="side-bar-item" @click="itemClick" :class="{active: isActive}">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
    </div>
</template>

<script>
    import sideBar from "./sideBar";
  export default {
    name: "sideBarItem",
    props:{
      path: String
    },
    data() {
      return {
        // isActive: true,
      }
    },
    components: {
      sideBar,
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
    .side-bar-item img {
        width: 40px;
        height: 40px;
    }
    .side-bar-item {
        padding: 8px;
        margin-top: 40px;
        cursor: pointer;
        border-radius: 25px;
    }
    .active {
        background-color: rgba(100,100,100,0.2);
        color: orangered;
        box-shadow: 5px 5px 1px rgba(100,100,100,0.4),-5px -5px 1px rgba(100,100,100,0.4);
    }
</style>