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
      <div class="bell-container">
        <font-awesome-icon class="fas fa-bell" icon="bell" />
        <div class="notif">2</div>
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
    }
  },
  props: {
    
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
        margin-right: 60px;
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

      * {
        margin-left: 20px;
      }

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
        font-size: 22px;
        cursor: pointer;
      }

      .bell-container {
        align-self: flex-end;
        position: relative;
        margin: 0;
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
      }
    }

  }

</style>
