<template>
  <div class="container">
    <div class="row g-0 my-2">
  <ul class="d-flex list-unstyled w-100 justify-content-evenly ">
    <li  @click.prevent="targetone='home'" ><a href="#">Home</a></li>
    <li  @click.prevent="targetone='about'"><a href="#">About</a></li>
    <li  @click.prevent="targetone='contact'"><a href="#">Contact</a></li>
    
  </ul>
</div>

  <div class="row g-0 py-5 ">
    <keep-alive>
      <component :is="targetone"/>
    </keep-alive>
  </div>
</div>
</template>
<script>
import home from './components/views/homecomponent.vue'
import contact from './components/views/contactcomponent.vue'
import about from './components/views/aboutcomponent.vue'

export default {
  data:()=>({
    targetone:'home',
  }),
components:{
  home,contact,about
}
}
</script>

<style>

</style>