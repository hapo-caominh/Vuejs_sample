<template>
  <div
    class="hero-info">
    <img
      v-if="image === ''"
      src="@/assets/avatar.jpeg"
      class="img-info"
    >
    <p class="text-center">{{ name }}</p>
    <p v-if="status" class="text-center">A</p>
  </div>
</template>

<script>
export default {
  props: {
    hero: { type: Object, default () { return {} } }
  },
  data () {
    return {
      image: '',
      name: this.hero.name,
      status: this.hero.status,
      typesOf: this.hero.typesOf
    }
  },
  mounted() {
    console.log(this.hero);
    console.log(this.hero);
  }
}
</script>
