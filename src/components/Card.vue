<template>
  <div class="item col-6 col-md-4 col-xl-2" :style="{ backgroundImage: 'url(' + this.image + ')' }">
    <div class="layer"></div>
    <div class="series-info">
      <h5>{{ movies[index].title }}</h5>
      <div style="fontSize: 13px"> Titolo Originale: </div>
      <div class="or-title">{{ movies[index].original_title }}</div>
      <div style="fontSize: 13px"> Lingua Originale: </div>      
      <div class="or-lang">{{ movies[index].original_language }}</div>
      <div style="fontSize: 13px">Rating:</div>
      <div>{{ movies[index].vote_average }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    movies: Array,
    index: Number,
  },

   data() {
        return {
            image: 'https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg'
            
       }
   },

}
</script>


<style scoped lang="scss">
    .item {
        position: relative;
        height: 450px;
        border: 1px solid #fff;
        margin-bottom: 20px;
        padding: 20px;
        z-index: 1;
        text-align: center;
        background-size: cover;

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

            h5 {
                height: 50px;
                font-weight: bold;
            }

            .or-title, .or-lang {
                margin-bottom: 20px;
            }
            
        }

        &:hover .series-info {
            display: flex;
            flex-direction: column;
        }

        
    }

</style>
