<template>
  <div>
    <LandingNavbar />
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
    </fade-transition>
    <LandingTabbar />
    <LandingFooter />
  </div>
</template>
<script>
const LandingNavbar = () =>
  import(/* webpackChunkName: "layout" */ "./LandingNavbar.vue");
const LandingFooter = () =>
  import(/* webpackChunkName: "layout" */ "./LandingFooter.vue");
const LandingTabbar = () =>
  import(/* webpackChunkName: "layout" */ "./LandingTabbar.vue");
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    LandingNavbar,
    LandingFooter,
    LandingTabbar,
    FadeTransition,
  },
};
</script>
