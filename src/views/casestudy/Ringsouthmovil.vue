<template>
  <div>
    <vue-headful
      title="Ringsouth Móvil"
      description="Website de Eduardo Calvo López, diseñador Front-end y Gráfico. Portfolio con Case Study de proyectos y una pequeña sección de recomendaciones"
      keywords="Portfolio, Diseño, Front-End, Development"
      image="https://api.microlink.io?url=https%3A%2F%2Feducalvolopez.com&waitFor=10&overlay.browser=dark&overlay.background=%23fbb828&screenshot=true&meta=false&embed=screenshot.url"
      lang="es"
      url="https://www.educalvolopez.com"
      ogTitle="Eduardo Calvo López Portfolio"
      ogURL="https://www.educalvolopez.com"
      ogType="website"
      ogImage="https://api.microlink.io?url=https%3A%2F%2Feducalvolopez.com&waitFor=10&overlay.browser=dark&overlay.background=%23fbb828&screenshot=true&meta=false&embed=screenshot.url"
      ogDescription="Website de Eduardo Calvo López, diseñador Front-end y Gráfico. Portfolio con Case Study de proyectos y una pequeña sección de recomendaciones"
      ogLocale="es_ES"
      twitterDescription="Website de Eduardo Calvo López, diseñador Front-end y Gráfico. Portfolio con Case Study de proyectos y una pequeña sección de recomendaciones"
      twitterImage="https://api.microlink.io?url=https%3A%2F%2Feducalvolopez.com&waitFor=10&overlay.browser=dark&overlay.background=%23fbb828&screenshot=true&meta=false&embed=screenshot.url"
    />

    <router-view></router-view>
    <HeaderStudy />
  </div>
</template>
<script>
const HeaderStudy = () =>
  import(/* webpackChunkName: "landing" */ "@/components/HeaderStudy.vue");
export default {
  components: {
    HeaderStudy,
  },
};
</script>
<style></style>
