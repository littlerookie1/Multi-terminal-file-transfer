<template>
   <div id="download">
       <span class="title">Download</span>
       <img class="download_bg" src="../assets/imgs/download_bg.jpg" alt="">
       <span class="bottom_text">It is available on all major platforms</span>
   </div>
</template>

<script>
  export default {
    name: "Download"
  }
</script>

<style scoped>
    #download .title {
        position: absolute;
        top: 150px;
        left: 200px;
        font: italic 40px Georgia,Serif;
        z-index: 2;
    }
    .download_bg {
        position: absolute;
        top: 180px;
        left: 260px;
        width: 1000px;
        height: 320px;
    }
    #download .bottom_text {
        position: absolute;
        top: 520px;
        left: 585px;
        opacity: .7;
    }
</style>