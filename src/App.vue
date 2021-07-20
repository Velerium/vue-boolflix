<template>
  <div id="app">
    <Header @search="searchMovies"/>
    <Content :movies="movies" :series="series"/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Content from '@/components/Content.vue';
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
      series: [],
      popularMovies: [],
      popularSeries: [],
    }
  },
  created() {
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=45cddf255553d9e683a61299d8d2c580&language=it-IT')
         .then(response => {
           this.movies = response.data.results;
           this.popularMovies = response.data.results;
           console.log(this.movies)
         })

    axios.get('https://api.themoviedb.org/3/tv/popular?api_key=45cddf255553d9e683a61299d8d2c580&language=it-IT')
         .then(response => {
           this.series = response.data.results;
           this.popularSeries = response.data.results;
           console.log(this.series)
         })
    
  },
  methods: {
    searchMovies(searchQuery) {

      searchQuery = searchQuery.replace(/\s/g, '+') // ...is this regex?

      if(searchQuery === '') {
        this.movies = this.popularMovies;
        this.series = this.popularSeries;
        return;
      }

      axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=45cddf255553d9e683a61299d8d2c580&language=it-IT&query=${searchQuery}`)
           .then(response => {
              this.movies = response.data.results;
            })

      axios.get(`https://api.themoviedb.org/3/search/tv/?api_key=45cddf255553d9e683a61299d8d2c580&language=it-IT&query=${searchQuery}`)
            .then(response => {
              this.series = response.data.results;
            })
    }
  }
}
</script>

<style lang="scss">

  @import './style/app.scss'

</style>
