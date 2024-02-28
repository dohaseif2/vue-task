<template>
  <div class="container my-2">
    <div class="row g-0 text-center">
    <h4 class="text-center m-auto">Landing Component</h4>
    <ul class="d-flex list-unstyled justify-content-evenly">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
    </ul>
    </div>
    <div class="row g-0 border border-danger">
        <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>