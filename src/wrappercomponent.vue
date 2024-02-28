<template>
<div class="container">
    <div class="row">
        <div class="col-12">
            <headercomponent/>
        </div>
    </div>
    <div class="row justify-content-between">
        <div class="col-3">
            <navcomponent/>
        </div>
        <div class="col-8">
            <bodycomponent/>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <footercomponent/>
        </div>
    </div>
</div>
</template>

<script>
import headercomponent from './components/headercomponent.vue'
import Footercomponent from './components/footercomponent.vue'
import navcomponent from './components/navcomponent.vue';
import Navcomponent from './components/navcomponent.vue';
import bodycomponent from './components/bodycomponent.vue';
export default {
  components: { headercomponent, Footercomponent, Navcomponent, bodycomponent },
    data:()=>({
        methods:{},
        components:{
            navcomponent,
            headercomponent,
            headercomponent,
            bodycomponent,
        }
    })
}
</script>

<style>

</style>