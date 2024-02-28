import { createApp } from 'vue'
// import App from './App.vue'
import wrappercomponent from './wrappercomponent.vue'

import { createPinia } from 'pinia'
import profilecomponent from '@/components/statemangment/profilecomponent.vue'
import statecomponent from '@/components/statemangment/statecounter.vue'
import dynamiccomponent from './dynamicwrapper.vue'
// createApp(dynamiccomponent).mount('#app')
// createApp(wrappercomponent).mount('#app')
// createApp(statecomponent).mount('#app')
// const app = createApp(statecomponent);
// const app = createApp(profilecomponent);

import landingcomponent from './components/views/landingcomponent.vue'
import router from './routers/index'
createApp(landingcomponent).use(router).mount("#app");
const app = createApp(landingcomponent);
app.use(router);
// app.mount('#app');
const pinia = createPinia();
app.use(pinia);
app.mount('#app');



