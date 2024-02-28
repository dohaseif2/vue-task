<template>
  <div class="border text-center mx-auto my-2 py-5 w-75">
    <h4 class="text-center">home</h4>
    <div class="bg-info my-3 py-3">
      <button class="btn btn-primary px-5 py-2 my-2" @click="counter++">+</button>
      <h6>counter : {{counter}}</h6>
      <button class="btn btn-primary px-5 py-2 my-2" @click="counter--">-</button>

    </div>
  </div>
</template>

<script>
export default {
  data:()=>({
    counter:10
  }),
  // activated(){
  //   alert("home active");
  //   // if(this.counter>20) this.counter=10;
  // },
  // deactivated(){
  //   alert("home deactive");
  // }
}
</script>

<style>

</style>