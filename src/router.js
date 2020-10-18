import { createWebHistory, createRouter } from 'vue-router';
import LandingLayout from '@/layout/LandingLayout';

import Landing from '@/views/Landing.vue';
import ServicesLanding from '@/views/ServicesLanding.vue';
import Recomendations from '@/views/Recomendations.vue';
import CaseStudyRingsouthMovil from '@/views/casestudy/Ringsouthmovil.vue';

const routes = [
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
      {
        path: '/case-study/ringsouth-movil',
        name: 'casestudyringsouthmovil',
        component: CaseStudyRingsouthMovil,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
