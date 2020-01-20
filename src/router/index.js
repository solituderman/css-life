import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../components/d-not-found'

Vue.use(VueRouter)

import home from './home'
import layout from './layout'
import animation from './animation'

const router = new VueRouter({
  routes: [
    ...home,
    ...layout,
    ...animation,
    { path: '*', component: NotFound },
  ],
})

export default router
