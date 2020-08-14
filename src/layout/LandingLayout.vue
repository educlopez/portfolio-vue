<template>
  <div>
    <LandingNavbar/>
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
    </fade-transition>
    <LandingTabbar />
    <LandingFooter/>
  </div>
</template>
<script>
  import LandingNavbar from './LandingNavbar.vue';
  import LandingFooter from './LandingFooter.vue';
  import LandingTabbar from './LandingTabbar.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      LandingNavbar,
      LandingFooter,
      LandingTabbar,
      FadeTransition
    },
  };
</script>
<style lang="scss">
</style>
