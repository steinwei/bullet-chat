<script setup>
import { BulletChat } from '../lib/bullet-chat';
import { ref, onMounted } from 'vue'
const msg = ref("")

let bc = null
const handleClick = () => {
  const canvas = document.getElementById("canvas")
  if (!bc) {
    bc = new BulletChat({
      el: canvas,
      fontSize: 20,
      duration: 8000,
      trackHeight: 40 * 1.5,
      engine: "canvas",
      usePointerEvents: true,
     })
  }
  console.log(222, msg)
  bc.add({
    text: msg.value
  })
  bc.start()
}

onMounted(
  () => {
    function getRandomWord() {
      const words = ["Thanks for visiting!", "ABarrage弹幕库", "干杯！！！🍻"];
      const index = Math.floor(Math.random() * 3);
      return words[index];
    }

    function mockBarrage() {
      return {
        text: getRandomWord(),
        color: "#fff",
      };
    }

    const $ = (selector) => document.querySelector(selector);

    const danmu = $("#canvas");
    const barrage = new BulletChat({
      el: danmu,
      fontSize: 20,
      duration: 8000,
      trackHeight: 40 * 1.5,
      engine: "canvas",
      usePointerEvents: true,
    });

    const buildBarrageHandler = () => {
      const BUILD_COUNT = 20;
      for (let i = 0; i < BUILD_COUNT; ++i) {
        const text = mockBarrage();
        barrage.add(text);
      }
      setTimeout(buildBarrageHandler, 5000);
    };

    buildBarrageHandler();

    const rect = document.body.getBoundingClientRect();
    danmu.width = rect.width;
    danmu.height = rect.height;

    barrage.start();
  }
)

</script>

<template>
  <div class="wrapper">
    <div class="container">
      <video id="my-player" class="video-js" controls preload="auto" poster="https://vjs.zencdn.net/v/oceans.png"
          data-setup='{}'>
          <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
          <source src="https://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
          <source src="https://vjs.zencdn.net/v/oceans.ogv" type="video/ogg" />
        </video>
      <canvas id="canvas"/>
    </div>
    <div class="dashboard">
      <span>输入弹幕：</span>
      <input type="text" v-model="msg"/>
      <button class="btn" @click="handleClick">发送弹幕</button>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    width: 100%;
  }
  .container {
    margin: 0 auto;
    width: 960px;
    height: 400px;
    position: relative;
  }
  .dashboard {
    /* display: flex; */
    width: 100%;
    margin-top: 20px;
  }
  .btn {
    margin-left: 20px;
  }
  #my-player {
    width: 100%;
    height: 100%;
  }
  #canvas {
    width: 960px;
    height: 400px;
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
  }
</style>