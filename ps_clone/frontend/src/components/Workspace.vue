<template>
  <div class="container app-frame">
      <div class="heading">
        <h2 style="color: white; padding-top: 10px;">Photoshop clone</h2>
        </div>
      <Toolbar />
      <Image-container />
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'
import Image from './Image.vue'

export default {
  components: {
    'Toolbar': Toolbar,
    'Image-container': Image
  }
}
</script>

<style  scoped>
  .app-frame {
    width: 98vw;
    height: 95vh;
    margin: 2.5vh auto 2.5vh auto;
   background-color: #2d3436;
        border: 2px solid #000;
    border-radius: 25px;
    
  }
  .heading {
    width: 100%;
    text-align: center;
  }
</style>
