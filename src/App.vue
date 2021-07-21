<template>
  <div id="app">
    <Header @search="APICallQueryShows" @removeEntry="removeEntry" @filterByFav="filterByFav" :watchLater="watchLater"/>
    <Content :movies="movies" :series="series" :watchLater="watchLater" @addEntry="addEntry" @removeEntry="removeEntry"/>
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
      watchLater: [],
      type: '',
      URL: '',
      searchQuery: '',
      flagShows: false,
      modalMessage: ''
    }
  },
  created() {
    
    this.APICallMovies();
    this.APICallSeries();
    
  },
  methods: {

    GetAPIURL() {
      return `https://api.themoviedb.org/3/${this.type}?api_key=45cddf255553d9e683a61299d8d2c580&language=it-IT&query=${this.searchQuery}`
    },

    APICallMovies() {
      this.type = 'movie/popular';
       axios.get(this.GetAPIURL())
         .then(response => {
           this.movies = response.data.results;
           this.popularMovies = response.data.results;
         })
    },

    APICallSeries() {
      this.type = 'tv/popular';
       axios.get(this.GetAPIURL())
         .then(response => {
           this.series = response.data.results;
           this.popularSeries = response.data.results;
         })
    },

    APICallQueryShows(searchQuery) {
      this.flagShows = false;

      this.type = 'search/movie';
      this.searchMovies(searchQuery);

      if (this.flagShows === false) {  // Might save resources.
        this.type = 'search/tv'
        this.searchSeries();
      }
    },

    searchMovies(searchQuery) {
      
      this.searchQuery = searchQuery.replace(/\s/g, '+') // ...is this regex?

      if(this.searchQuery === '') {
        this.movies = this.popularMovies;
        this.series = this.popularSeries;
        this.flagShows = true;
        return;
      }

      axios.get(this.GetAPIURL())
           .then(response => {
              this.movies = response.data.results;
            })
    },

    searchSeries() {

      axios.get(this.GetAPIURL())
            .then(response => {
              this.series = response.data.results;
            })
    },

    addEntry(showName) {
      if(this.watchLater.includes(showName)) {
        this.modalMessage = 'That show is already in your "Watch Later" list!'
        return;
      }
      this.watchLater.push(showName);
    },

    removeEntry(showName) {
      let value = this.watchLater.indexOf(showName);
      this.watchLater.splice(value, 1);
    },

    filterByFav(item) {
      this.searchQuery = item;
      this.APICallQueryShows(this.searchQuery);
    }
  }
}
</script>

<style lang="scss">

  @import './style/app.scss'

</style>
