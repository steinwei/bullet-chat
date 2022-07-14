<script setup>
import { BulletChat } from '../utils/bullet-chat';
import { ref, onMounted } from 'vue'
const msg = ref("")

let bc = null
function handleClick() {
  const canvas = document.getElementById("canvas")
  if (!bc) {
    bc = new BulletChat({
      el: canvas,
      fontSize: 40,
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
  bc.add({
    text: msg.value
  })
  bc.add({
    text: msg.value
  })
  bc.start()
}

// onMounted(
//   import('../utils/test.js')
// )

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
      <canvas id="canvas" />
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