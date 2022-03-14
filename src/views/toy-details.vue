<template>
  <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
    <article>
      <p>ID: {{ toy._id }}</p>
      <p>Name: {{ toy.name }}</p>
      <p>Price: {{ toy.price }}</p>
      <p>Labels: {{ toy.label }}</p>
      <p>Reviews: {{toy.reviews}}</p>
      <p>{{ isInStock }}</p>
    </article>
    <button @click="goBack" >Back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
    }
  },
  computed:{
    isInStock(){
      return this.toy.inStock ? 'Item is in stock' : 'Out of Stock'
    }

  },
  created() {
    const { id } = this.$route.params
    toyService.getById(id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>