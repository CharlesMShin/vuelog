<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary justify-content-center">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link class="link" to="/list">
          <svg
            class="logo"
            viewBox="0 0 128 128"
            width="24"
            height="24"
            data-v-d2eaf752=""
          >
            <path
              fill="#42b883"
              d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
              data-v-d2eaf752=""
            ></path>
            <path
              fill="#35495e"
              d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
              data-v-d2eaf752=""
            ></path>
          </svg>
          Charles' VueLog
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link class="link" to="/profile">PROFILE</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link class="link" to="/list">WORK EXPERIENCE</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">EDUCATION</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view :datas="exDatas"></router-view>

  <!-- <List :datas=exDatas /> -->
</template>


<script>
// import List from './components/List.vue'
import exDatas from "./assets/exDatas.js";

export default {
  name: "App",
  data() {
    return {
      exDatas: exDatas,
    };
  },
  components: {
    // List : List,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.link {
  text-decoration: none; /* 링크의 밑줄 제거 */
  color: inherit; /* 링크의 색상 제거 */
}
</style>
