<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Charles' VueLog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/">Home</router-link>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">EDUCATION</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/list">WORK EXPERIENCE</router-link>
            </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-view :datas=exDatas></router-view>

<!-- <List :datas=exDatas /> -->



</template>


<script>

// import List from './components/List.vue'
import exDatas from './assets/exDatas.js'

export default {
  name: 'App',
  data() {
    return{
      exDatas : exDatas,
    }
  },
  components: {
    // List : List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
