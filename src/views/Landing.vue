<template>
  <div>
    <vue-headful
      title="Edu Calvo - Portfolio"
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
    <Header />
    <About />
    <Services />
    <Works />
    <Clients />
  </div>
</template>
<script>
const Header = () =>
  import(/* webpackChunkName: "landing" */ "@/components/Header.vue");
const About = () =>
  import(/* webpackChunkName: "landing" */ "@/components/About.vue");
const Services = () =>
  import(/* webpackChunkName: "landing" */ "@/components/Services.vue");
const Works = () =>
  import(/* webpackChunkName: "landing" */ "@/components/Works.vue");
const Clients = () =>
  import(/* webpackChunkName: "landing" */ "@/components/Clients.vue");

export default {
  components: {
    Header,
    About,
    Services,
    Works,
    Clients,
  },
};
</script>
<style></style>
