import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import('@/views/News/News.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
