import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Favorites from '../views/Favorites.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  routes
})

export default router
