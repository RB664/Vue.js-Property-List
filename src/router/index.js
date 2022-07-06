import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/properties',
    name: 'properties',
    component: () => import('../views/Properties.vue')
  },
  {
    path:'/propertries/:id',
    name: 'singleproperty',
    component: () => import('../views/SingleProperty.vue')
  },
  {
    path:'/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
