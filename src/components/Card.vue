<template>
  <div class="item col-6 col-md-4 col-xl-2" :style="{ backgroundImage: `url( ${this.getImage()} )`}">
    <div class="layer"></div>

    <div class="series-info">
      <h5>{{ showName }}</h5>

      <div class="subtitle"> Titolo Originale: </div>
      <div class="or-title">{{ showTrueName }}</div>

      <div class="subtitle lang"> Lingua Originale:      
        <img v-if="flagExists" class="or-lang" :src="getFlagUrl(language)">
        <div v-else class="or-lang"> {{ language }} </div>
      </div>

      <div class="subtitle">Rating:</div>
      <div class="all-stars">

        <div v-if="flagNoVotes">No votes yet...</div>
        <font-awesome-icon v-else v-for="stars in 5" :key=stars class="far fa-star" :icon="['far', 'star']" />

        <div v-if="!flagNoVotes">{{ rating }}</div>
        <div class="star-rating">
          {{ getStars() }}
          <font-awesome-icon v-for="stars in trueStars" :key=stars class="fas fa-star" :icon="['fas', 'star']" />
        </div>
      </div>

      <div class="watch-later">
        <font-awesome-icon v-if="!watchLater.includes(showName)" class="far fa-heart" @click="$emit('addEntry', showName)" :icon="['far', 'heart']" />
        <font-awesome-icon v-else class="fas fa-heart" @click="$emit('removeEntry', showName)" :icon="['fas', 'heart']" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      flagExists: true,
      flagNoVotes: false,
      trueStars: 0,
      missingImage: 'https://png2.cleanpng.com/sh/9b45967c7b67474da3a608ce21c9512b/L0KzQYm3UcI5N5J6fZH0aYP2gLBuTfxwb5CyeuRqbnSwdrF1lL14bZN4geZuLYTsgMS0VfE3bJU8T6UEYUG6cYq1U8Y4PGo2Sqo6NUG6QYWBUME6PmQ2SpD5bne=/kisspng-logo-brand-font-website-tips-5a6dd7739a17a9.3674912815171480196312.png',
      
    }
  },
  props: {
    movies: Array,
    series: Array,
    watchLater: Array,
    index: Number,
    showName: String,
    showTrueName: String,
    language: String,
    rating: Number,
    image: String
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
      if (this.image === null) {
        return this.missingImage;
      }
      return `https://image.tmdb.org/t/p/w342${this.image}`;
    },

    getStars() {
      
      if(Math.round(this.rating/2 === 0)) {
        this.flagNoVotes = true;
        return;
      }
      
      this.trueStars = Math.round(this.rating/2);
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

            h5 {
                height: 80px;
                font-weight: bold;
            }

            .subtitle {
              font-size: 13px;
              margin: 20px 0 5px 0;
            }

            .or-title, .lang {
              height: 60px;
            }

            .or-lang {
              margin: 10px auto;
              width: 15%;
              border-radius: 5px;
              display: block;
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
            
            .fa-heart {
              position: absolute;
              bottom: 10px;
              right: 10px;
              font-size: 18px;
            }
        }

        &:hover .series-info {
            display: flex;
            flex-direction: column;
        }

        
    }

</style>
