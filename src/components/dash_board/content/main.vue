<template>
  <div class="col-md-7">
    <button
      v-show="!adding"
      class="btn-success btn-sm"
      @click="toggleTextType"
    >Add Type</button>
    <input
      v-show="adding"
      v-model.lazy="type"
      placeholder="add type of hero"
      @keyup.esc="toggleTextType">
    <button
      v-for="kind in types"
      :key="kind.name"
      :class="['tab-button', 'btn-info', 'btn-sm', { active: currentTab === kind.name }]"
      @click="currentTab = kind.name"
    >{{ kind.name }}</button>
    <div
      v-for="kind in types"
      v-if="currentTab === kind.name && currentTab !== ''"
      :key="kind.index"
      class="row main-dash"
    >
      <hero-info
        v-for="hero in heros"
        v-if="hero.typesOf.includes(currentTab)"
        :key="hero.index"
        :hero="hero"
        class="col-md-2"/>
    </div>
  </div>
</template>

<script>
import HeroInfoVue from '@/components/dash_board/content/hero_info.vue'

export default {
  components: {
    'hero-info': HeroInfoVue
  },
  props: {
    herotypes: { type: Array, default () { return [] } },
    heros: { type: Array, default () { return [] } }
  },
  data () {
    return {
      adding: false,
      types: this.herotypes,
      type: '',
      currentTab: ''
    }
  },
  watch: {
    type (newType, oldType) {
      this.type = newType
      if (newType !== '') this.addType()
    }
  },
  methods: {
    toggleTextType (event) {
      this.adding = !this.adding
    },
    addType () {
      this.types.push({name: this.type})
      this.type = ''
      this.adding = false
    }
  }
}
</script>
