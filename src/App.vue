<template>
  <div
    id="app"
    class="container">
    <img
      src="./assets/logo.png"
      class="logo">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}
.logo {
  height: 100px;
  width: 100px;
  float: left;
  margin-left: 40px;
  margin-right: 30px;
}
</style>
