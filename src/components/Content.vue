<template>
  <div class="main">
    <div v-if="movies.length !== 0">
      <h2>ORIGINALI NETFLIX - FILM</h2>
      <span>(click on the heart to add the entry to your "Watch Later" list (bell icon)).</span>
      <div class="series-list">
        <Card @addEntry="addEntry" @removeEntry="removeEntry" v-for="(item, index) in movies"
            :watchLater="watchLater"
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
        <Card @addEntry="addEntry" @removeEntry="removeEntry" v-for="(item, index) in series"
            :watchLater="watchLater"
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
    watchLater: Array,
  },
  methods: {
    addEntry(showName) {
      this.$emit('addEntry', showName)
    },

    removeEntry(showName) {
      this.$emit('removeEntry', showName)
    },
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
          margin-right: 10px;
          display: inline-block;
      }

      span {
        color: #777;
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

      ::-webkit-scrollbar-thumb {
          background: red; 
          border-radius: 10px;
      }
    }
</style>
