import { createRouter, createWebHistory } from 'vue-router';
import PIndex from './components/Pages/PIndex.vue';

export default (app) => {
  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: PIndex,
      },
      {
        path: '/tech-radar',
        name: 'tech-radar',
        component: PIndex,
      },
      {
        path: '/footer',
        name: 'footer',
        component: PIndex,
      },
    ],
  });

  app.use(router);

  return {
    router,
  };
};
