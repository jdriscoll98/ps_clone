import Vue from 'vue'
import VueRouter from 'vue-router'

import Workspace from '@/components/Workspace.vue'

const routes = [
  {path: '*', component: Workspace}
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return {x: 0, y: 0} },
  mode: 'history',
  routes
})

export default router
