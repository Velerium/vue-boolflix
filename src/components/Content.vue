<template>
  <div class="main">
    <div v-if="movies.length !== 0">
      <h2>ORIGINALI NETFLIX - FILM</h2>
      <div class="series-list">
        <CardMovies v-for="(item, index) in movies" :key="item.id" :movies="movies" :index="index"/>
      </div>
    </div>
    <div v-if="series.length !== 0" >
      <h2 class="series-title">ORIGINALI NETFLIX - SERIE TV</h2>
      <div class="series-list">
        <CardSeries v-for="(item, index) in series" :key="item.id" :series="series" :index="index"/>
      </div>
    </div>
    <div v-if="movies.length === 0 && series.length === 0" class="no-result">
      <p>We looked far and wide for what you searched, but we couldn't find anything...</p>
      <p>Try using different keywords!</p>
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

  @import '../style/colors';

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

      .no-result {
        width: 600px;
        font-size: 32px;
        text-align: center;
        color: $options-hover;
        margin: 80px auto;

        p {
          margin-bottom: 40px;
        }
      }

    }
</style>
