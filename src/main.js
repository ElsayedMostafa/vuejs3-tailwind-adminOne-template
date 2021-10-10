import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/tailwind.css';
import './assets/main.css';


store.dispatch('auth/attempt', localStorage.getItem('token'))
.then(()=>{
    createApp(App).use(router).use(store).mount('#app')
})

