import {defineStore} from 'pinia'
import {useAuthstore} from './authstore'
export const useCounterStore=defineStore("counterstore",{
    state:()=>({
        counter:10
    }),
    actions:{
        increase(){
            if(checkAuth())
            this.counter++;
        },
        decrease(){
            if(checkAuth())

            this.counter--;
        },
        getcurrentlength(){
            return this.counter.toString().length;
        }
    }
})
function checkAuth(){
    const authstore=useAuthstore();
    return authstore.isauthonticated;
}