<template>
  <div class="name-form">
        <form>
          <label class="label" >Name: </label>
          <input class="input" type="text" name="name">
        </form>
</div>
</template>

<script>
export default {
    name: "Name"
}
</script>

<style>
.name-form {
    width: 100%;
    float: left;
    margin: 2.5% 0 0 0;
    padding: 0 0 2.5% 0;
    color: whitesmoke;
    border-bottom: 2px solid black;
}
.label {
    margin: 0 2.5% 0 5%;
}
.input {
    width: 70%;
}
</style>