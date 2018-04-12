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
      <div class="col-md-12">
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
        <div v-if="filter === 'All'">
          <h3
            v-for="hero in heros"
            :key="hero.index"
            class="pull-left"
          >{{ hero.name }} is {{ hero.status ? "Alive" : "Died" }}
            in {{ hero.typesOf }}</h3>
        </div>
        <div v-else>
          <h3
            v-for="hero in heros"
            v-if="hero.status === status"
            :key="hero.index"
            class="pull-left">
            {{ hero.name }} in {{ hero.typesOf }}
          </h3>
        </div>
      </div>
      <left-dash
        :herotypes="types"
        :heros="heros"/>
      <main-dash
        :herotypes="types"
        :heros="heros"/>
    </div>
  </div>
</template>

<script>
import MainDashVue from '@/components/dash_board/content/main.vue'
import LeftDashVue from '@/components/dash_board/content/left.vue'

export default {
  components: {
    'main-dash': MainDashVue,
    'left-dash': LeftDashVue
  },
  data () {
    return {
      types: [
        {name: 'iron'},
        {name: 'flying'},
        {name: 'legend'}
      ],
      heros: [
        {name: 'thor', typesOf: ['iron', 'flying', 'legend'], status: true}
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

<style scoped>
.title {
  margin: 0 20px 0 20px;
  font-size: 24px;
  font-weight: bold;
}
.back-main {
  margin-left: 100px;
}
.header {
  margin-bottom: 70px;
}
</style>
