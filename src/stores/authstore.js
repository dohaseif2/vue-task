import {defineStore} from 'pinia'
export const useAuthstore= defineStore("authstore",{
    state:()=>({
        isauthonticated:false,
        user:{
        }
    }),
    actions:{
        async login(){
            this.isauthonticated=true;
            let resp=await fetch("https://reqres.in/api/users/2")
            let logedinuser=await resp.json();
            this.user=logedinuser.data;
        },
        logout(){
            this.isauthonticated=false;
            this.user={}
        }
    }
})