<template>
  <div class="container">
    <button class="btn btn-primary" @click="counterstore.increase">+</button>
    <h4>counter : {{counterstore.counter}}</h4>
    <button class="btn btn-primary" @click="counterstore.decrease">-</button>
    <p>Counter Contains {{counterstore.getcurrentlength()}}</p>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counterstore'
export default {
  data:()=>({
    counterstore:useCounterStore()
  })
}
</script>

<style>

</style>