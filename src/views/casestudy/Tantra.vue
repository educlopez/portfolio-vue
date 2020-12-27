<template>
  <div>
    <vue-headful
      title="Tantra Website"
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
    <Header header="Tantra" subheader="Website"/>
    <section class="section section-md panel" data-color="white">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-4">
            <h3 class="text-black">El cliente </h3>
            <p>
              <a href="https://trantaspain.com/" target="_blank" rel="noopener">Tantra</a> es una firma de moda y complementos española creada en 1999. Comenzó su andadura con complementos de vestir como bolsos, chales, bisutería incorporando posteriormente ropa y las marcas, Tantra Chic By Tantra, Divine y Lady Boho
            </p>
            <h3 class="text-black">El problema </h3>
            <p>
              Mostrar colecciones y galería de imágenes sin tienda online y permitir la solicitud de un catálogomediante mail.
            </p>
            <h3 class="text-black">La solución </h3>
            <p>
            Landing autogestionable, al depositar imagenes en las carpetas de las respectivas colecciones se autogeneran las páginas de la colección con todas las imagenes en galería con páginado
            </p>
            <p>
              <b>Descargo de responsabilidad:</b> Ciertos aspectos del trabajo de diseño que se presenta aquí se han modificado para proteger la privacidad del cliente.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-8">
            <picture>
              <source type="image/webp" data-srcset="/compressed_images/tantra1.webp" />
              <img
                alt="Cliente Tantra"
                data-src="/images/tantra1.png"
                class="image lazyload img-fluid rounded shadow-client mb-4 border-img"
              />
            </picture>
          </div>
          <div class="col-12 col-md-4">
            <picture>
              <source type="image/webp" data-srcset="/compressed_images/tantra2.webp" />
              <img
                alt="Cliente Tantra"
                data-src="/images/tantra2.png"
                class="image lazyload img-fluid rounded shadow-client mb-4 border-img"
              />
            </picture>
             <picture>
              <source type="image/webp" data-srcset="/compressed_images/tantra3.webp" />
              <img
                alt="Cliente Tantra"
                data-src="/images/tantra3.png"
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
