<template>
  <section v-if="toyToEdit" class="toy-edit">
    <form @submit.prevent="saveToy" class="form">
      <div class="form-control">
        <label for="name" class="form-label">Toy Name</label>
        <input
          required
          v-model="toyToEdit.name"
          id="name"
          type="text"
          class="form-input"
          placeholder="Enter toy name here..."
        />
      </div>
      <div class="form-control">
        <label for="type" class="form-label">Toy Type</label>
        <input
          required
          v-model="toyToEdit.type"
          id="type"
          type="text"
          class="form-input"
          placeholder="Enter toy type here..."
        />
      </div>
      <div class="form-control">
        <label for="price" class="form-label">Toy price</label>
        <input
          required
          v-model.number="toyToEdit.price"
          id="price"
          type="number"
          class="form-input"
        />
      </div>
      <div class="form-control">
          <label for="in-stock" class="form-label">In Stock</label>
        <input
          v-model="toyToEdit.inStock"
          id="in-stock"
          type="checkbox"
          class="form-input"
        />
      </div>
      <div class="btn-group">
        <button @click="saveToy">Save</button>
        <button @click="goBack" >Go Back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service'

export default {
  name: 'toy-edit',
  data() {
    return {
      toyToEdit: null,
    }
  },
  created() {
    const { id } = this.$route.params
    if (id) {
      toyService.getById(id).then((toy) => {
        this.toyToEdit = toy
      })
    } else this.toyToEdit = toyService.getEmptyToy()
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
    saveToy() {
      this.$store.dispatch({ type: 'saveToy', toy: JSON.parse(JSON.stringify( this.toyToEdit)) })
      .then(() => {
        this.$router.push('/toy')
      })
    },
  },
}
</script>
