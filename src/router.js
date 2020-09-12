import Vue from 'vue';
import Router from 'vue-router';
import LandingLayout from '@/layout/LandingLayout';

Vue.use(Router);

export default new Router({
  //linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'landing',
      component: LandingLayout,
      children: [
        {
          path: '/',
          name: 'landing',
          component: () => import('./views/Landing.vue'),
        },
        {
          path: '/services',
          name: 'services',
          component: () => import('./views/ServicesLanding.vue'),
        },
        {
          path: '/recomendaciones',
          name: 'recomendaciones',
          component: () => import('./views/Recomendations.vue'),
        },
      ],
    },
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});
