<template>
    <div class="product">
        <div class="head">
            <span>Product</span>
            <img src="../assets/imgs/home_background.jpg" alt="">
        </div>
        <div id="context">
            <span class="text1">What it is?</span>
            <span class="text2">这是一个基于P2P的多端文件传输系统，
                它采取了一种简单，快速的方法来传输文件，而且单次传输的文件大小超乎你的想象。
                <br>我们致力于将此产品研究开发成可以在各个设备之间快捷的传输文件。
            </span>
            <span class="text3">How it works</span>
            <img class="img1" src="../assets/imgs/how-01.png" alt="">
            <div class="total_text1">
                <h3>One-to-many almost real-time transmission</h3>
                <span>它可以做到近乎实时的传输文件，接收方只需输入一个端口号就可以极快的接受发送的文件。</span>
            </div>
            <img class="img2" src="../assets/imgs/how-02.png" alt="">
            <div class="total_text2">
                <h3>Share files with a port number</h3>
                <span>发送方和接收方通过一个端口号来发送和接受文件</span>
            </div>
            <img class="img3" src="../assets/imgs/how-03.png" alt="">
            <div class="total_text3">
                <h3>Device to device</h3>
                <span>它可以用于任何设备到任何设备之间传输文件。例如电脑端到手机端，手机端到电脑端</span>
            </div>
        </div>
        <div id="foot">
            <span>@2020.12&nbsp;sdnu&nbsp;Multi-terminal file transfer</span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Product"
  }
</script>

<style scoped>
    .head span {
        position: absolute;
        top: 200px;
        left: 200px;
        font: italic 40px Georgia,Serif;
        z-index: 2;
    }
    .head img {
        position: absolute;
        top: 180px;
        left: 250px;
        width: 1000px;
        height: 320px;
    }
    #context .text1 {
        position: absolute;
        top: 570px;
        left: 670px;
        font-weight: bolder;
        font-size: 25px;
    }
    #context .text2 {
        position: absolute;
        top: 650px;
        left: 360px;
        font-size: 16px;
        opacity: 0.7;
    }
    #context .text3 {
        position: absolute;
        top: 800px;
        left: 670px;
        font-weight: bolder;
        font-size: 25px;
    }
    #context .img1 {
        position: absolute;
        top: 870px;
        left: 1000px;
        width: 200px;
        height: 200px;
    }
    .total_text1 {
        width: 500px;
        position: absolute;
        top: 920px;
        left: 260px;
    }
    .total_text1 span {
        position: absolute;
        top: 50px;
        opacity: .7;
    }

    .total_text2 {
        position: absolute;
        width: 500px;
        top: 1150px;
        right: 450px;
    }
    .total_text2 span {
        position: absolute;
        top: 50px;
        opacity: .7;
    }
    #context .img2 {
       position: absolute;
        left: 210px;
        top: 1080px;
        width: 200px;
        height: 200px;
    }
    .total_text3 {
        position: absolute;
        left: 260px;
        top: 1370px;
        width: 500px;
    }
    .total_text3 span {
        position: absolute;
        top: 50px;
        opacity: .7;
    }
    #context .img3 {
        position: absolute;
        left: 1000px;
        width: 200px;
        height: 200px;
        top: 1330px;
    }
    #foot {
        position: absolute;
        top: 1800px;
        left: 550px;
        opacity: .7;
    }
</style>