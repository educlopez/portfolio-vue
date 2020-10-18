<template>
  <transition
    name="router-anim"
    enter-active-class="animated fadeInDown"
    leave-active-class="animated fadeOutDown"
  >
    <div>
      <LandingNavbar />
      <router-view />
      <LandingTabbar />
      <LandingFooter />
    </div>
  </transition>
</template>
<script>
import LandingNavbar from './LandingNavbar.vue';
import LandingFooter from './LandingFooter.vue';
import LandingTabbar from './LandingTabbar.vue';

export default {
  components: {
    LandingNavbar,
    LandingFooter,
    LandingTabbar,
  },
};
</script>
<style scoped></style>
