<template>
  <div class="toolbar">
      <name-field />
      <edit-sliders />

  </div>
</template>

<script>
import Name from './Name'
import Slider from './Slider'
export default {
    components: {
      'name-field': Name,
      'edit-sliders': Slider,
    }
}
</script>

<style scoped>
.toolbar {
    border: 2px solid #000;
    border-radius: 25px;

    height: 85%;
    width: 20%;
    margin: 2.5% 0 0 2.5%;
    display: inline-block;
}
.button {
  width: 90%;
}
.save {
  background-color: white;
  color: black;
}
</style>>