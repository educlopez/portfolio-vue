<template>
  <div>
    <LandingNavbar/>
    <fade-transition :duration="200" origin="center top" mode="out-in">
      <!-- your content here -->
      <router-view></router-view>
    </fade-transition>
    <LandingFooter/>
  </div>
</template>
<script>
  import LandingNavbar from './LandingNavbar.vue';
  import LandingFooter from './LandingFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      LandingNavbar,
      LandingFooter,
      FadeTransition
    },
  };
</script>
<style lang="scss">
</style>
