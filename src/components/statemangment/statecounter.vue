<template>
    <div class="container my-2">
        <h3>Counter Component</h3>
        <p>{{counterstore.counter}}</p>
        <button class="btn btn-success" @click="counterstore.increase">+</button>
    <h4>counter : {{counterstore.counter}}</h4>
    <button class="btn btn-success" @click="counterstore.decrease">-</button>
        <div class="row g-0 border py-2 my-2">
            <counteroperation/>
        </div>
    </div>
</template>

<script>
import {useCounterStore} from '@/stores/counterstore.js'
import counteroperation from './counteroperation.vue'
export default {
    data:()=>({
        counterstore:useCounterStore()
    }),
    components:{counteroperation}
}
</script>

<style>

</style>