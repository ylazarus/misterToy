<template>
  <li class="toy-preview">
    <h3>Name: {{ toy.name }}</h3>
    <p>Price: {{toy.price}}</p>
    <p>Type: {{toy.labels}}</p>
    <p>{{isInStock}}</p>

    <button @click="goToEdit">Edit</button>
    <button @click="goToDetail">Details</button>
    <button @click="removeCar(toy._id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: "toy-preview",
  props: {
    toy: Object,
  },
  computed:{
    isInStock(){
      return this.toy.inStock ? 'Item is in stock' : 'Out of Stock'
    }

  },
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy._id}`)
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy._id}`)
    },
    removeCar(toyId) {
      console.log(toyId);
      this.$emit("removeToy", toyId)
    },
  },
}
</script>

<style></style>
