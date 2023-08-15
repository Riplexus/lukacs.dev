import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './components/04.pages/IndexPage.vue'

const handleError = (err) => {
    console.error('Page routing failed')
    throw err
}

export default (app) => {
  const router = createRouter({
    history: createWebHistory(),
    // base: import.meta.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: IndexPage
      },
      {
        path: '/tech-radar',
        name: 'tech-radar',
        component: IndexPage
      },
      {
        path: '/coming-soon',
        name: 'projects',
        component: IndexPage
      },
      {
        path: '/footer',
        name: 'footer',
        component: IndexPage
      },
      {
        path: '/colors',
        name: 'colors',
        component: () => import('./components/04.pages/ColorsPage.vue').catch(handleError)
      }
    ]
  })

  app.use(router)

  return {
    router
  }
}
