<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <br>
    <router-link
      :to="{name: 'dash_board'}"
      class="link-dashboard">to Dash Board
    </router-link>
    <br>
    <router-link
      :to="{name: 'main_img'}"
      class="link-dashboard">to Main screen
    </router-link>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: "Welcome to CCM's Vue.js Sample"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin-left: 20px;
}
h1, h2 {
  font-weight: normal;
}
.title {
  text-align: left;
  margin: 10px 0 0 80px;
  font-size: 24px;
  font-weight: bold;
}
.link-dashboard {
  float: left;
  margin-left: 100px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
