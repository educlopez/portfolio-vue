<template>
  <div>
    <vue-headful
      title="Net2phone Móvil"
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
    <Header header="Net2phone" subheader="Servicio móvil"/>
    <section class="section section-md panel" data-color="white">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-4">
            <h3 class="text-black">El cliente </h3>
            <p>
              <a href="https://net2phone.es/" target="_blank" rel="noopener">Net2phone</a> es una empresa internacional. Ofrece productos y servicios de telefonía basados en VoIP y computación en la nube. La compañía es una subsidiaria de IDT Corporation
            </p>
            <h3 class="text-black">El problema </h3>
            <p>
              Atraer a particulares jovenes e informar del nuevo servicio incluido en la empresa Ringsout Europa, posteriormente unificada en la empresa <a href="https://net2phone.es/" target="_blank" rel="noopener">Net2phone</a>
            </p>
            <h3 class="text-black">La solución </h3>
            <p>
            Landing capaz de sintetizar toda la información del servicio, sin llegar a saturar al usuario. Capaz de solventar todas las dudas y problemas que pueda tener un usuario final en la configuración del servicio.
            <br>
            Se realizo una segunda intervencio para modificar toda la imagen de marca de Ringsouth durante la unión con <a href="https://net2phone.es/" target="_blank" rel="noopener">Net2phone</a>
            </p>
            <p>
              <b>Descargo de responsabilidad:</b> Ciertos aspectos del trabajo de diseño que se presenta aquí se han modificado para proteger la privacidad del cliente.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-8">
            <picture>
              <source type="image/webp" data-srcset="/compressed_images/net2phone_movil1.webp" />
              <img
                alt="Cliente Ringsouth"
                data-src="/images/net2phone_movil1.png"
                class="image lazyload img-fluid rounded shadow-client mb-4 border-img"
              />
            </picture>
          </div>
          <div class="col-12 col-md-4">
            <picture>
              <source type="image/webp" data-srcset="/compressed_images/net2phone_movil2.webp" />
              <img
                alt="Cliente Ringsouth"
                data-src="/images/net2phone_movil2.png"
                class="image lazyload img-fluid rounded shadow-client mb-4 border-img"
              />
            </picture>
             <picture>
              <source type="image/webp" data-srcset="/compressed_images/net2phone_movil3.webp" />
              <img
                alt="Cliente Ringsouth"
                data-src="/images/net2phone_movil3.png"
                class="image lazyload img-fluid rounded shadow-client border-img"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Header from "@/components/HeaderSubPage.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style></style>
