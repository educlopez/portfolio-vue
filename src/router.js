import { createWebHistory, createRouter } from 'vue-router';
import LandingLayout from '@/layout/LandingLayout';

import Landing from '@/views/Landing.vue';
import ServicesLanding from '@/views/ServicesLanding.vue';
import Recomendations from '@/views/Recomendations.vue';
import Cookies from '@/views/Cookies.vue';
import Legal from '@/views/Legal.vue';
import NotFound from '@/views/NotFound.vue';
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
      {
        path: '/cookies',
        name: 'Cookies',
        component: Cookies,
      },
      {
        path: '/legal',
        name: 'Legal',
        component: Legal,
      },
      {
        path: "/:catchAll(.*)",
        name: '404',
        component: NotFound,
      },
    ],
  },
  
];


const router = createRouter({
  history: createWebHistory(),
  routes,
scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { top: 0, left: 0 }
  },

});
export default router;
