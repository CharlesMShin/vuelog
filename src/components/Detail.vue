<template>
<div class="card detail">
  <div class="card-body" style="border-bottom: 1px solid #d2d2d2;">
    <h5 class="card-title">Card title</h5>
    <ul>
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
    </ul>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  <img src="../assets/sample.jpg" class="card-img-bottom" style="max-width:100%;" alt="...">
</div>

</template>

<script>
export default {
    name : "Detail"
}
</script>

<style>
.detail{
    margin: 2%;
}

</style>