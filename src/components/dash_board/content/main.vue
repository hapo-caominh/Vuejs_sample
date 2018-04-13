<template>
  <div class="col-md-7 main">
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
      v-if="currentTab !== ''"
      class="main-dash">
      <div
        v-for="kind in types"
        v-if="currentTab === kind.name"
        :key="kind.index"
      >
        <ul>
          <li
            v-for="hero in heros"
            v-if="hero.typesOf.includes(currentTab)"
            :key="hero.index"
          >{{ hero.name }} is {{ hero.status ? "Alive" : "Died" }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style scope>
.main {
  float: left;
}
.main-dash {
  background-color: #d3d3d3;
}
</style>
