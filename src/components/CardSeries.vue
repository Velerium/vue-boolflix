<template>
  <div class="item col-6 col-md-4 col-xl-2" :style="{ backgroundImage: 'url(' + this.image + ')' }">
    <div class="layer"></div>
    <div class="series-info">
      <h5>{{ this.series[this.index].name }}</h5>
      <div class="subtitle"> Titolo Originale: </div>
      <div class="or-title">{{ series[index].original_name }}</div>
      <div class="subtitle"> Lingua Originale: </div>      
      <img v-if="this.flagExists === true" class="or-lang" :src="getFlagUrl(series[index].original_language)">
      <div v-else class="or-lang"> {{series[index].original_language}} </div>
      <div class="subtitle">Rating:</div>
      <div class="all-stars" >
        <font-awesome-icon v-for="stars in 5" :key=stars class="far fa-star" :icon="['far', 'star']" />
        <div>{{ series[index].vote_average }}</div>
        <div class="star-rating">
          {{ getStars() }}
          <font-awesome-icon v-for="stars in this.trueStars" :key=stars class="fas fa-star" :icon="['fas', 'star']" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSeries',
  data() {
    return {
      image: this.getImage(),
      flagExists: true,
      trueStars: 0
    }
  },
  props: {
    series: Array,
    index: Number,
  },
  methods: {

    getFlagUrl(flag) {   // Missing France on purpose, to show handling of missing flag situation

      try {
        `../assets/flags/${flag}-flag.jpg`;
          this.flagExists = true;
          return require(`../assets/flags/${flag}-flag.jpg`);
      } catch {
          this.flagExists = false;
          return;
      }
    },

    getImage() {
      let image = this.series[this.index].poster_path
      if (image === null) {
        return 'https://png2.cleanpng.com/sh/9b45967c7b67474da3a608ce21c9512b/L0KzQYm3UcI5N5J6fZH0aYP2gLBuTfxwb5CyeuRqbnSwdrF1lL14bZN4geZuLYTsgMS0VfE3bJU8T6UEYUG6cYq1U8Y4PGo2Sqo6NUG6QYWBUME6PmQ2SpD5bne=/kisspng-logo-brand-font-website-tips-5a6dd7739a17a9.3674912815171480196312.png'
      }
      return `https://image.tmdb.org/t/p/w342${image}`
    },

    getStars() {
      this.trueStars = Math.round(this.series[this.index].vote_average/2);
    } 
  },

}
</script>


<style scoped lang="scss">
    .item {
        position: relative;
        height: 450px;
        padding: 20px;
        z-index: 1;
        text-align: center;
        background-size: cover;
        background-position: center;

        .layer {
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;  // WHY DOES THIS EVEN WORK?!
            bottom: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.8);
            display: none;
        }

        &:hover .layer {
            display: block;
        }

        .series-info {
            display: none;
            font-size: 16px;
            align-items: center;

            .subtitle {
              font-size: 13px;
              margin: 20px 0 5px 0;
            }

            h5 {
                height: 80px;
                font-weight: bold;
            }

            .or-lang {
              margin: 0 auto;
              width: 15%;
              border-radius: 5px;
            }

            .all-stars {
              position: relative;
            }

            .star-rating {          // WHAT HAVE I DONE xD
              text-align: left;
              position: absolute;
              width: 100%;
              top: 0;
              left: 50%;
              transform: translate(-50%, 0%);
            }
            
        }

        &:hover .series-info {
            display: flex;
            flex-direction: column;
        }

        
    }

</style>
