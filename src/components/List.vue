<template>
  <div class="row row-cols-1 row-cols-md-4 g-4 list">
    <div class="col" v-for="(data, i) in datas" :key="i">
      <div class="card h-100">
        <img @click="$router.push('/detail/' + data.number)" :src="data.imgeSrc" alt="..." />
        <div class="card-body">
          <router-link class="link" :to="`/detail/${data.number}`">
            <h5 class="card-title">{{ data.title }}</h5>
          </router-link>
          <p class="card-text"><small class="text-body-secondary">{{ data.content }}</small></p>
        </div>
        <div class="card-footer text-center">
          <small class="text-body-secondary">{{ data.date }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    datas: Object,
  },
};
</script>

<style>
#img {
  height: 100%;
}
.list {
  margin-right: auto;
  margin-left: 1%;
  margin-top: 0px;
  margin-bottom: 1%;
}
.link {
   text-decoration: none; /* 링크의 밑줄 제거 */  
   color: inherit; /* 링크의 색상 제거 */
}
</style>