import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EnrollView from '../views/EnrollView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/enroll',
    name: 'enroll',
    component: EnrollView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
