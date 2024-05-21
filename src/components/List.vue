<template>
 
  <div onclick="alert('123')" class="row row-cols-1 row-cols-md-3 g-4 list">
    <div class="col" v-for="(data, i) in datas" :key="i">
      <div class="card h-100">
        <img :src="data.imgeSrc" alt="..." />
        <div class="card-body">
          <router-link to="/detail">
          <h5 class="card-title">{{ data.title }}</h5>
          </router-link>
          <p class="card-text">{{ data.content }}</p>
        </div>
        <div class="card-footer">
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
.list {
  margin-right:auto;
  margin-left : 1%;
  margin-top : 0px;
  margin-bottom : 1%;
}

</style>