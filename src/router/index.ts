import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/FormView/:id',
      name: 'FormView',
      meta: {
        keepalive: true
      },
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/IframeView',
      name: 'IframeView',
      component: () => import('../views/IframeView.vue')
    },
    {
      path: '/:notFound(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
