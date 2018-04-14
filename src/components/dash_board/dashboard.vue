<template>
  <div class="child1 col-md-12">
    <div class="col-md-12 header">
      <span class="title">{{ footnote }}</span>
      <br>
      <router-link
        :to="{name: 'root'}"
        class="back-main">Back</router-link>
    </div>
    <div class="container">
      <div class="container">
        <span>Filter:</span>
        <select
          v-model="filter">
          <option
            disabled
            value=""
          >Please select one</option>
          <option>All</option>
          <option>Alive</option>
          <option>Died</option>
        </select>
        <div class="row">
          <hero-info
            v-for="hero in heros"
            v-if="filter === 'All' || hero.status === status"
            :key="hero.index"
            :hero="hero"
            class="col-md-1"/>
        </div>
      </div>
      <div class="row">
        <left-dash
          :herotypes="types"
          :heros="heros"/>
        <main-dash
          :herotypes="types"
          :heros="heros"/>
      </div>
    </div>
  </div>
</template>

<script>
import MainDashVue from '@/components/dash_board/content/main.vue'
import LeftDashVue from '@/components/dash_board/content/left.vue'
import HeroInfoVue from '@/components/dash_board/content/hero_info.vue'

export default {
  components: {
    'main-dash': MainDashVue,
    'left-dash': LeftDashVue,
    'hero-info': HeroInfoVue
  },
  data () {
    return {
      types: [
        {name: 'iron'},
        {name: 'flying'},
        {name: 'legend'}
      ],
      heros: [
        {name: 'Thor', typesOf: ['iron', 'flying', 'legend'], status: true},
        {name: 'Iron man', typesOf: ['iron', 'flying'], status: false}
      ],
      filter: 'All',
      status: false,
      footnote: 'Dash Board interface'
    }
  },
  watch: {
    filter (newFilter, oldFilter) {
      if (newFilter === 'Alive') this.status = true
      if (newFilter === 'Died') this.status = false
    }
  }
}
</script>
