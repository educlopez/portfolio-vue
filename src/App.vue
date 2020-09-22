<template>
  <div>
    <router-view />

  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
};
</script>

<style lang="scss">
@import './assets/scss/app.scss';
@import './assets/scss/argon.scss';

.mediabox-img.ls-blur-up-is-loading,
.mediabox-img.lazyload:not([src]) {
  visibility: hidden;
}

.ls-blur-up-img,
.mediabox-img {
  display: block;
  /* only if you want to change the blur-up option from always to auto or want to use blur up effect without a lowsrc image. */
  font-family: 'blur-up: auto', 'object-fit: cover';
  object-fit: cover;
}

.ls-blur-up-img {
  filter: blur(10px);
  opacity: 1;
  transition: opacity 1000ms, filter 1500ms;
}

.ls-blur-up-img.ls-inview.ls-original-loaded {
  opacity: 0;
  filter: blur(5px);
}

</style>
