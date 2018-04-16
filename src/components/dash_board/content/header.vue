<template>
  <div>
    <button v-on:click="toggle_text_type">Add Type</button>
    <input v-show="adding" v-model.lazy="type" placeholder="add type of hero">
    <button
      v-for="kind in types"
      :key="kind.name"
      :class="['tab-button', { active: currentTab === kind.name }]"
      v-on:click="currentTab = kind.name"
    >{{ kind.name }}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      adding: false,
      types: [],
      type: '',
      currentTab: ''
    }
  },
  watch: {
    type (newType, oldType) {
      this.type = newType
      if (newType !== '') this.add_type()
    }
  },
  methods: {
    toggle_text_type (event) {
      this.adding = !this.adding
    },
    add_type () {
      this.types.push({name: this.type})
      this.type = ''
      this.adding = false
    }
  }
}
</script>
