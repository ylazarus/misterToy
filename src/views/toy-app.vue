<template>
  <section class="toy-app">
    <button @click="goToEdit">Add A New Toy</button>
    <toy-filter @setFilter="setFilter" />
    <toy-list @remove-toy="removeToy" v-if="toys" :toys="toysToShow" />
  </section>
</template>

<script>
import toyList from '../components/toy-list.vue'
import toyFilter from '../components/toy-filter.vue'

export default {
  name: "toy-app",
  data() {
    return {
      filterBy: null,
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    toysToShow() {
      if (!this.filterBy) return this.toys
      const regex = new RegExp(this.filterBy.name, 'i')
      return this.toys.filter((toy) => regex.test(toy.name))
    },
  },
  created() {},
  methods: {
    loadToys() {
      toyService.query().then((toys) => (this.toys = toys))
    },
    setFilter(filterBy) {
      this.filterBy = filterBy
    },
    goToEdit() {
      this.$router.push(`/toy/edit`)
    },
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', id: toyId })
    },
  },
  components: {
    toyList,
    toyFilter,
  },
}
</script>

<style></style>
