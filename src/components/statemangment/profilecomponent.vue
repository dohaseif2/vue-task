<template>
  <div class="container">
    <div class="row g-0">
        
        <button class="btn btn-primary my-3"  v-if="authstore.isauthonticated==false" @click="authstore.login">login</button>
        <div v-else>
             <button class="btn btn-primary" @click="authstore.logout">logout</button>
             <p>Welcome : {{authstore.user.first_name}} {{authstore.user.last_name}}</p>
        </div>
        <div class="row g-0">
             <button class="btn btn-primary" @click="counterstore.increase">+</button>
             <h4>counter : {{counterstore.counter}}</h4>
             <button class="btn btn-primary" @click="counterstore.decrease">-</button>
             <p>Counter Contains {{counterstore.getcurrentlength()}}</p>
        </div>

    </div>
  </div>
</template>

<script>
import { useCounterStore } from '@/stores/counterstore'
import { useAuthstore } from '@/stores/authstore'

export default {
    data:()=>({
        counterstore:useCounterStore(),
    authstore:useAuthstore()
    })
    
}
</script>

<style>

</style>