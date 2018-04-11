<template>
  <div class="child1 container">
    <span>{{ footnote }}</span>
    <br>
    <router-link to="/" class="back-main">Back</router-link>
    <header-dash></header-dash>
  </div>
</template>

<script>
import HeaderVue from '@/components/dash_board/content/header.vue'

export default {
  data () {
    return {
      footnote: 'Dash Board interface'
    }
  },
  components: {
    'header-dash': HeaderVue
  }
}
</script>

<style scoped>
span {
  margin: 0 20px 0 20px;
  font-size: 24px;
  font-weight: bold;
}
.back-main {
  margin-left: 100px;
}
</style>
