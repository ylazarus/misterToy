
<template>
  
  <RouterView />
</template>

<script>
export default{
name: 'app',
created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
}
import { RouterLink, RouterView } from 'vue-router'
</script>


