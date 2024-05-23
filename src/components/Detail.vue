<template>
  <!-- 12312
  <router-view></router-view> -->
  <div class="card detail">
    <div class="card-body" style="border-bottom: 1px solid #d2d2d2">
      <h5 class="card-title" style="font-weight: bold;">{{ datas[$route.params.id].title }}</h5>
      <p class="card-text ps-3">
        <small class="text-body-secondary"
          >( 프로젝트 기간 : {{ datas[$route.params.id].date }} )</small
        >
      </p>
      <ul>
        <li>상세내용 : {{ datas[$route.params.id].content }}</li>
        <li>OS : {{ datas[$route.params.id].os }}</li>
        <li>Skill : {{ datas[$route.params.id].skill }}</li>
        <li>DBMS : {{ datas[$route.params.id].dbms }}</li>
      </ul>
    </div>

    <div v-for="(a, i) in datas[$route.params.id].imgeSrcDetail" :key="i">
      <p class="card-text p-3">{{i+1}}.샘플 화면</p>
      <img :src="a" class="img-fluid" alt="..." />
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    datas: Array,
  },
};
</script>

<style>
.detail {
  margin: 2%;
}
</style>