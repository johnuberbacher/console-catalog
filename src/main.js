import Vue from 'vue/dist/vue.js'
import App from './App.vue';
import VueRouter from 'vue-router';
import 'vue-awesome/icons/star'
import Home from "./routes/Home.vue";
import Platform from "./routes/Platform.vue";
import Game from "./routes/game/Game.vue";

import './index.css'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { name: "Home", path: '/', component: Home, props: true },
  { name: "Platform", path: '/platform:id', component: Platform, props: true },
  { name: "Game", path: '/:slug', component: Game, props: true }
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