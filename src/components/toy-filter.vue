<template>
  <section class="toy-filter">
    <input
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      class="form-input"
      placeholder="Search toy name..."
    />
    <br />
    <label class="cursor-pointer">
      <input
        type="radio"
        v-model="filterBy.stock"
        @change="setFilter"
        value= 'all'
      />
      All</label
    >
    <label class="cursor-pointer">
      <input
        type="radio"
        v-model="filterBy.stock"
        @change="setFilter"
        value= 'true'
      />
      In Stock</label
    >
    <label class="cursor-pointer">
      <input
        type="radio"
        v-model="filterBy.stock"
        @change="setFilter"
        value= 'false'
      />
      Out of Stock</label>
      <br />
    <label> Toy Type:
    <select v-model.number="filterBy.type" @change="setFilter">
      <option value="all">All</option>
      <option value="funny">Funny</option>
      <option value="adult">Adult</option>
      <option value="educational">Educational</option>
    </select>
    </label>
    
  </section>
</template>

<script>
export default {
  name: "toy-filter",
  data() {
    return {
      filterBy: {
        name: "",
        stock: "both",
        type: "",
      },
    }
  },
  methods: {
    setFilter() {
      this.$emit("setFilter", this.filterBy)
    },
  },
}
</script>
