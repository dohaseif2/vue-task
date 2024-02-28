import {createRouter, createWebHistory } from "vue-router"
import wrappercomponent from '../wrappercomponent.vue'

import aboutcomponent from '../components/views/aboutcomponent.vue'
import contactcomponent from '../components/views/contactcomponent.vue'
import studentdetailscomponent from '../components/views/studentdetailscomponent.vue'
import underconstructioncomponent from '../components/views/underconstructioncomponent.vue'
const routes =[
    {
        path:'/',
        component:wrappercomponent
    },
    {
        path:'/about',
        component:aboutcomponent
    },
    {
        path:'/contact',
        component:contactcomponent
    },
    {
        path:'/studentdetails/:id',
        component:studentdetailscomponent
    },
    {
        path:'/:catchAll(.*)',
        component:underconstructioncomponent
    }
]

const router = createRouter({
    routes:routes,
    history:createWebHistory()
});

export default router;







