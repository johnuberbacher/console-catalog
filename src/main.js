import Vue from 'vue/dist/vue.js'
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from "./routes/Home.vue";
import Platform from "./routes/Platform.vue";
import Game from "./routes/Game.vue";

import './index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/platform', component: Platform },
    { path: '/game', component: Game }
]

const router = new VueRouter({
    routes
})

new Vue({
    router,
    template: '<App />',
    components: {
        App
    }
}).$mount('#app')