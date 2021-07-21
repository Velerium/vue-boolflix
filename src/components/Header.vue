<template>
  <div class="nav">

    <div class="nav-left">
      <img src="../assets/Netflix-logo.png" alt="">
      <ul>
        <li>Home</li>
        <li>Serie TV</li>
        <li>File</li>
        <li>Originali</li>
        <li>Aggiunti di recente</li>
        <li>La mia lista</li>
      </ul>
    </div>

    <div class="nav-right">
      <input v-model="searchQuery" @keyup.enter="$emit('search', searchQuery)" size="35" type="text" placeholder="Click on the magnifying glass to search!">
      <font-awesome-icon class="fas fa-search" icon="search" @click="$emit('search', searchQuery)"/>
      <div class="category">BAMBINI</div>

      <div class="dropdown bell-container" @click="dropdownF">
        <font-awesome-icon class="fas fa-bell" icon="bell" />
        <div v-if="watchLater.length > 0" class="notif">{{ watchLater.length }}</div>
          <div v-if="flagNotif" class="dropdown-content">
            <div v-if="watchLater.length === 0">
              <h5 class="warn">Your "Watch Later" list is empty...</h5>
              <p>Fill it by clicking the heart icon on show you'd like to see!</p>
            </div>

            <div v-else class="warn">Your "Watch Later" list:</div>
            <div class="fav" v-for="(item, index) in watchLater" @click="$emit('filterByFav', item)" :key="index">
              {{ item }}
              <font-awesome-icon class="fas fa-times" icon="times" @click="$emit('removeEntry', item)" />
            </div>
        </div>
      </div>
      <div class="profile-pic">:3</div>
      <font-awesome-icon class="fas fa-caret-down" icon="caret-down" />

    </div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      searchQuery: '',
      flagNotif: false,
    }
  },
  props: {
    watchLater: Array,
  },
  methods: {
    dropdownF() {
      if (this.flagNotif) {
        this.flagNotif = false
        } else {
        this.flagNotif = true
      }

    }
  }
}
</script>

<style scoped lang="scss">

  @import '../style/colors';

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    .nav-left {
      display: flex;

      img {
        width: 150px;
        margin-right: 30px;
      }
  
      ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin-bottom: 0;
      
        li {
          margin-right: 15px;
          cursor: pointer;

          &:first-child {
            font-weight: bold;
          }

          &:hover {
            color: $options-hover;
          }
        }
      }
    }

    .nav-right {
      display: flex;
      align-items: center;

      .category {
        margin-left: 50px;

        &:hover {
          color: $options-hover;
          cursor: pointer;
        }
      }

      input {
        outline: none;
        border: 1px solid #333;
        background-color: initial;
        color: #fff;
      }

      .fas {
        margin-left: 20px;
        font-size: 22px;
        cursor: pointer;
      }

      .bell-container {
        position: relative;
        align-self: flex-end;
        margin: 0;

        .dropdown-content {
          position: absolute;
          top: 30px;
          right: 0;
          min-width: 300px;
          max-height: 200px;
          overflow-y: scroll;
          text-align: center;
          background-color: #222;
          border: 4px solid red;
          border-radius: 10px;
          padding: 10px;
          z-index: 2;

          .warn {
            text-align: center;
            margin-bottom: 40px;
            border: none;
          }

          p {
            margin-bottom: 0;
          }
          
          .fav {
            margin-bottom: 5px;
            border-bottom: 1px solid #444;
            font-size: 15px;
            position: relative;

            .fa-times {
              display: none;
              color: #666;
            }

            &:hover {
              background-color: #444;

              .fa-times {
                display: block;
                position: absolute;
                top: 20%;
                right: 5px;
                font-size: 15px;

                &:hover {
                  color: #fff
                }
              }
            }
          }
        }
      }

      .notif {
        text-align: center;
        font-size: 9px;
        width: 12px;
        height: 12px;
        background: red;
        border-radius: 50%;
        position: absolute;
        top: 0;
        right: -3px;
      }

      .profile-pic {
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 30px;
        background: teal;
        margin-left: 20px;
      }
    }

    ::-webkit-scrollbar {
        width: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: red; 
        border-radius: 10px;
    }
  }

</style>
