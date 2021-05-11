import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    alias: '/notebooks',
    component: () => import('../components/NotebookList.vue')
  },
  {
    path: '/login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/note',
    component: () => import('../components/NoteDetail.vue')
  },
  {
    path: '/trash',
    component: () => import('../components/TrashDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
