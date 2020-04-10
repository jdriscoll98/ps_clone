<template>
  <div class="sliders">
      <div class="crop">
         <i class="fa fa-crop icon"></i>
        </diV>
      <div class="crop">
         <i class="fa  fa-adjust icon"></i>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </diV>
      <div class="crop">
         <i class="fa fa-sun-o icon"></i>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </diV>
      <div class="crop">
         <i class="fa fa-fire icon"></i>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </diV>
      <div class="crop">
         <i class="fa fa-caret-up icon"></i>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </diV>
      <div class="crop">
         <i class="fa fa-caret-down icon"></i>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </diV>
      <div class="crop">
         <i class="fa fa-circle icon"></i>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </diV>
      <div class="crop">
         <i class="fa fa-circle icon"></i>
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
        </diV>
              <div class="button">
        <button type="submit" class="save"> Save </button>
      </div>
      </div>
</template>

<script>
export default {
    name: "Slider"
}
</script>

<style scoped>
.sliders {
    height: 90%;
    width: 90%;
    margin: 5% 0 0 5%;
    float: left;
}
.slider {
    float: right;
    margin: 7.5% 15% 0 0;
}
.icon {
    margin: 7.5%;
    color: white;
    font-size: 1.5em;
}
.button {
    width: 80%;
}
.save {
    width: 100%;
    border: 1px solid black;
    box-shadow: 2px 5px black;
    margin: 10% 0 0 10%;
}
</style>