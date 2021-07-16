<template>
  <div id="app">
    <Header />
    <Content :movies="movies"/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Content from './components/Content.vue';
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Content,
  },
  data() {
    return {
      movies: [],
    }
  },
  created() {
    axios.get('https://api.themoviedb.org/3/search/movie/?api_key=45cddf255553d9e683a61299d8d2c580&language=it-IT&query=ritorno+al+futuro')
         .then(response => {
           this.movies = response.data.results
           console.log(this.movies)
         })
  }
}
</script>

<style lang="scss">

  @import './style/app.scss'

</style>
