<template>
  <div class="main">
      <h2>ORIGINALI NETFLIX</h2>
      <div class="series-list">
        <Card v-for="(item, index) in movies" :key="item.id" :movies="movies" :index="index"/>
      </div>
  </div>
  
</template>

<script>
import Card from './Card.vue'
export default {
  name: 'Content',
  components: {
    Card,
  },
  props: {
    movies: Array,
  }
}
</script>

<style scoped lang="scss">
    .main {
       flex-grow: 1;

       h2 {
           font-weight: 800;
           margin-bottom: 15px;
       }

        .series-list {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
