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
