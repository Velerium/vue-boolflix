<template>
  <div class="main">
      <h2>ORIGINALI NETFLIX - FILM</h2>
      <div class="series-list">
        <CardMovies v-for="(item, index) in movies" :key="item.id" :movies="movies" :index="index"/>
      </div>
      <h2 class="series-title">ORIGINALI NETFLIX - SERIE TV</h2>
      <div class="series-list">
        <CardSeries v-for="(item, index) in series" :key="item.id" :series="series" :index="index"/>
      </div>
  </div>
  
</template>

<script>
import CardMovies from './CardMovies.vue'
import CardSeries from './CardSeries.vue'
export default {
  name: 'Content',
  components: {
    CardMovies,
    CardSeries
  },
  props: {
    movies: Array,
    series: Array,
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

        .series-title {
          margin-top: 20px;
        }

        .series-list {
            display: flex;
            flex-wrap: nowrap;
            overflow-x: scroll;
            cursor: pointer;
        }
    }
</style>
