import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import { VLazyImagePlugin } from "v-lazy-image";
import "@/assets/scss/app.scss";
import "@/assets/scss/argon.css";


import { library } from '@fortawesome/fontawesome-svg-core'
import { faDesktop,faPaintBrush,faPaperPlane,faChevronRight, faMugHot} from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faTwitter,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faDesktop,faPaintBrush,faPaperPlane,faChevronRight,faMugHot,faInstagram,faTwitter,faLinkedin,faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)


import VueCosha from "vue-cosha";

Vue.use(VueCosha, {
  blur: "15px",
  brightness: 1,
  saturation: 1,
  x: 0,
  y: 0,
});

Vue.use(VLazyImagePlugin);

Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
