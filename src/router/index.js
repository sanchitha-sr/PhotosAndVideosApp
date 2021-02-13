import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Videos from '../views/Videos.vue'
import Favorites from '../views/Favorites.vue'
import Details from '../views/Details.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // props: true
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  }
]

const router = new VueRouter({
  routes
})

export default router
