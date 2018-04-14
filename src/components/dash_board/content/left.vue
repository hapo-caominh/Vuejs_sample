<template>
  <div class="col-md-3 form-div">
    <form
      class="hero-form"
      @submit.prevent="submit1">
      <fieldset>
        <p>Hero submit form</p>
        <div>
          <label for="name">Name</label>
          <input
            v-model="name"
            type="text"
            name="name"
            required="true"
          >
        </div>
        <div>
          <label
            for="types"
          >Types of this hero in</label>
          <ul>
            <li
              v-for="type in types"
              :key="type.index"
            >
              <input
                :value="type.name"
                v-model="typesOf"
                type="checkbox"
              >
              <label for="typesOf">{{ type.name }}</label>
            </li>
          </ul>
        </div>
        <div>
          <label for="status">Living status</label>
          <input
            v-model="status"
            type="checkbox"
            name="died"
          >
          <label for="status">{{ status ? "Alive" : "Died" }}</label>
        </div>
        <input
          type="submit"
          value="Add"
          class="btn btn-primary"
        >
      </fieldset>
    </form>
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
      name: '',
      typesOf: [],
      status: false,
      types: this.herotypes
    }
  },
  methods: {
    submit1 () {
      if (this.typesOf.length === 0) {
        alert('You should choose a type for the hero')
        return
      }
      if (this.heros.find(check => check.name === this.name)) {
        alert('Already have hero with this name. Choose differently')
        return
      }
      this.heros.push({name: this.name, typesOf: this.typesOf, status: this.status})
      this.name = ''
      this.status = false
      this.typesOf = []
    }
  }
}
</script>
