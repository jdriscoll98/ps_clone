<template>
    <div class="base-image-input" :style="{ 'background-image': `url(${imageData})` }" @click="chooseImage">
        <span style="float: right;" v-if="!imageData" class="placeholder">
          Choose an Image
        </span>
        <input
          class="file-input"
          ref="fileInput"
          type="file"
          @input="onSelectFile"
        > 
    </div>
</template>

<script>
export default {
    name: "Image"
}
</script>

<style scoped>
.base-image-input {
    border: 2px solid #000;
    border-radius: 25px;
    width: 72.5%;
    height: 85%;
    margin: 0 0 0 2.5%;
    display: inline-block;
    background: linear-gradient(-90deg, rgba(255, 255, 255, .03) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, .03) 1px, transparent 1px), linear-gradient(-90deg, rgba(255, 255, 255, .03) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, .03) 1px, transparent 1px), linear-gradient(transparent 3px, transparent 3px, transparent 78px, transparent 78px), linear-gradient(-90deg, transparent 1px, transparent 1px), linear-gradient(-90deg, transparent 3px, transparent 3px, transparent 78px, transparent 78px), linear-gradient(transparent 1px, transparent 1px), transparent;
    background-size: 10px 10px, 10px 10px, 10px 10px, 10px 10px, 10px 10px, 10px 10px, 10px 10px, 10px 10px;
}
</style>