<template>
    <div>
        <h4>from students details components</h4>
        <template>{{ loadstudentdata($route.params.id) }}</template>

        <p>Name : {{stdname}}</p>
        <p>City : {{stdcity}}</p>
        <p>ID : {{stdid}}</p>
    </div>

</template>

<script>
export default {
    data:()=>({
        stdid:'',
        stdname:'',
        stdcity:'',

    }),
    methods:{
        async loadstudentdata(id){
           let returned=await fetch(`http://localhost:5003/students/${id}`);
           let jsversion=await returned.json();
           this.stdid=jsversion.id;
           this.stdname=jsversion.name;
           this.stdcity=jsversion.city;

        }
    }
}
</script>

<style>

</style>