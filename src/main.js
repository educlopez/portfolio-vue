import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
//import { gsap } from 'gsap';
//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faDesktop,
  faPaintBrush,
  faPaperPlane,
  faChevronRight,
  faMugHot,
  faHome,
  faStar,
  faBook,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(
  faDesktop,
  faPaintBrush,
  faPaperPlane,
  faChevronRight,
  faMugHot,
  faHome,
  faStar,
  faBook,
  faBriefcase,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub
);

//Images
import 'lazysizes';
import 'lazysizes/plugins/blur-up/ls.blur-up';

//SEO
import vueHeadful from 'vue-headful';
createApp(App)
  .use(router)
  .component('vue-headful', vueHeadful)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
