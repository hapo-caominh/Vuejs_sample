<template>
  <div class="child1 container">
    <span>{{ footnote }}</span>
    <br>
    <router-link
      :to="{name: 'root'}"
      class="back-main">Back
    </router-link>
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
