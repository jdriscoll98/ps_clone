<template lang="html">
  <div class="app">
    <router-view/>
  </div>
</template>

<style >
* {
  margin: 0;
  padding: 0;
}
.dark {
background-color: #485461;
background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);

}
</style>
<script>
export default {
  name: 'App'
}
</script>
