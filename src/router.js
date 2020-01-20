import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './pages/home'
import Layout from './pages/layout'
import Animation from './pages/animation'

const routes = [
  { path: '/', component: Home },
  { path: '/layout', component: Layout },
  { path: '/animation', component: Animation },
]

const router = new VueRouter({
  routes,
})

export default router
