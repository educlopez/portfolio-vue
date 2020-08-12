<template>
<div >
  <router-view/>
</div>
</template>

<script>


export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
.v-lazy-image,.loading {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded,.loaded {
  filter: blur(0);
}
</style>