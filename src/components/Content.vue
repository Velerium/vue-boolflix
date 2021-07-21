<template>
  <div class="main">
    <div v-if="movies.length !== 0">
      <h2>ORIGINALI NETFLIX - FILM</h2>
      <div class="series-list">
        <Card v-for="(item, index) in movies"
            :key="item.id"
            :movies="movies"
            :index="index"
            :showName="item.title"
            :showTrueName="item.original_title"
            :language="item.original_language"
            :rating="item.vote_average"
            :image="item.poster_path"/>

      </div>
    </div>
    <div v-if="series.length !== 0" >
      <h2 class="series-title">ORIGINALI NETFLIX - SERIE TV</h2>
      <div class="series-list">
        <Card v-for="(item, index) in series"
            :key="item.id"
            :series="series"
            :index="index"
            :showName="item.name"
            :showTrueName="item.original_name"
            :language="item.original_language"
            :rating="item.vote_average"
            :image="item.poster_path"/>
      </div>
    </div>
    <div v-if="movies.length === 0 && series.length === 0" class="no-result">
      <p>We looked far and wide for what you searched, but we couldn't find anything...</p>
      <p>Try using different keywords!</p>
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

      ::-webkit-scrollbar {
        height: 7px;
      }

      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px $main-bg; 
        border-radius: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: red; 
        border-radius: 10px;
      }

    }
</style>
