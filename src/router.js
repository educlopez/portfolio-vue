import Vue from 'vue';
import Router from 'vue-router';
import LandingLayout from '@/layout/LandingLayout';

Vue.use(Router);
const Landing = () =>
  import(/* webpackChunkName: "landing" */ './views/Landing.vue');
const ServicesLanding = () =>
  import(/* webpackChunkName: "services" */ './views/ServicesLanding.vue');
const Recomendations = () =>
  import(/* webpackChunkName: "recomendations" */ './views/Recomendations.vue');

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
          component: Landing,
        },
        {
          path: '/services',
          name: 'services',
          component: ServicesLanding,
        },
        {
          path: '/recomendaciones',
          name: 'recomendaciones',
          component: Recomendations,
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
