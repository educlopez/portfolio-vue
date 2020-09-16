<template>
  <div style="margin-top: 80px;">
    <vue-headful
      title="Edu Calvo - Servicios"
      description="Servicios que ofrece Edu Calvo"
      keywords="Portfolio, Diseño, Front-End, Development"
      image="https://api.microlink.io?url=https%3A%2F%2Feducalvolopez.com&waitFor=10&overlay.browser=dark&overlay.background=%23fbb828&screenshot=true&meta=false&embed=screenshot.url"
      lang="es"
      url="https://www.educalvolopez.com/servicios"
      ogTitle="Eduardo Calvo - Servicios"
      ogURL="https://www.educalvolopez.com/servicios"
      ogType="website"
      ogImage="https://api.microlink.io?url=https%3A%2F%2Feducalvolopez.com&waitFor=10&overlay.browser=dark&overlay.background=%23fbb828&screenshot=true&meta=false&embed=screenshot.url"
      ogDescription="Servicios que ofrece Edu Calvo"
      ogLocale="es_ES"
      twitterDescription="Servicios que ofrece Edu Calvo"
      twitterImage="https://api.microlink.io?url=https%3A%2F%2Feducalvolopez.com&waitFor=10&overlay.browser=dark&overlay.background=%23fbb828&screenshot=true&meta=false&embed=screenshot.url"
    />
    <Services />
    <section id="services" class="section section-sm panel">
      <div class="container py-lg-md d-flex">
        <div class="col px-0">
          <div class="mb-5" id="ServWeb">
            <div class="row">
              <div class="col-auto">
                <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                  <font-awesome-icon :icon="['fas', 'desktop']" />
                </div>
              </div>
              <div class="col-lg-3">
                <h5 class="card-title text-uppercase text-muted mb-0">Desarrollo</h5>
                <span class="h2 font-weight-bold mb-0">Web</span>
              </div>
              <div class="col">
                <p>
                  Con la tecnología más avanzada, ofrezo un conjunto sólido de
                  servicios digitales, que incluyen diseño y desarrollo web,
                  mejora de UX / UI y soluciones comerciales que crean un
                  impacto inmediato.
                </p>
              </div>
              <div class="col-lg-11 offset-lg-1">
                <div class="row">
                  <div class="col-lg-3">
                    <picture>
                      <source
                        type="image/webp"
                        data-srcset="compressed_images/screen-tantra_website.webp"
                      />
                      <img
                        alt="Cliente tantra website"
                        data-src="images/screen-tantra_website.png"
                        class="image lazyload mediabox-img img-fluid mb-5 img--works"
                      />
                    </picture>
                  </div>
                  <div class="col-lg-3">
                    <picture>
                      <source
                        type="image/webp"
                        data-srcset="compressed_images/screen-uam_dashboard.webp"
                      />
                      <img
                        alt="Cliente uam dashboard website"
                        data-src="images/screen-uam_dashboard.png"
                        class="image lazyload mediabox-img img-fluid mb-5 img--works"
                      />
                    </picture>
                  </div>
                  <div class="col-lg-3">
                    <picture>
                      <source
                        type="image/webp"
                        data-srcset="compressed_images/screen-ringsouth_sms.webp"
                      />
                      <img
                        alt="Cliente ringsouth sms website net2phone"
                        data-src="images/screen-ringsouth_sms.png"
                        class="image lazyload mediabox-img img-fluid mb-5 img--works"
                      />
                    </picture>
                  </div>
                  <div class="col-lg-3">
                    <picture>
                      <source
                        type="image/webp"
                        data-srcset="compressed_images/screen-ringsouth_movil.webp"
                      />
                      <img
                        alt="Cliente ringsouth movil net2phone website"
                        data-src="images/screen-ringsouth_movil.png"
                        class="image lazyload mediabox-img img-fluid mb-5 img--works"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5" id="ServDesign">
            <div class="row">
              <div class="col-auto">
                <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                  <font-awesome-icon :icon="['fas', 'paint-brush']" />
                </div>
              </div>
              <div class="col-lg-3">
                <h5 class="card-title text-uppercase text-muted mb-0">Diseño</h5>
                <span class="h2 font-weight-bold mb-0">Gráfico</span>
              </div>
              <div class="col">
                <p>
                  Ofrezco un conjunto de piezas variado, desde logotipos,
                  papelería, banners, diseños digitales para redes sociales,etc.
                  que ayudaran a impulsar su empresa.
                </p>
              </div>
              <div class="col-lg-11 offset-lg-1">
                <div class="row">
                  <div class="col-lg-3">
                    <picture>
                      <source type="image/webp" data-srcset="compressed_images/logo_ladyboho.webp" />
                      <img
                        alt="Cliente tantra spain ladyboho website"
                        data-src="images/logo_ladyboho.png"
                        class="image lazyload mediabox-img img-fluid mb-5 img--works"
                      />
                    </picture>
                  </div>
                  <div class="col-lg-3">
                    <picture>
                      <source type="image/webp" data-srcset="compressed_images/icon_wolf_app.webp" />
                      <img
                        alt="Cliente icono lobo"
                        data-src="images/icon_wolf_app.png"
                        class="image lazyload mediabox-img img-fluid mb-5 img--works"
                      />
                    </picture>
                  </div>
                  <div class="col-lg-3">
                    <picture>
                      <source type="image/webp" data-srcset="compressed_images/logo_linkup.webp" />
                      <img
                        alt="Cliente linkup logo"
                        data-src="images/logo_linkup.png"
                        class="image lazyload mediabox-img img-fluid mb-5 img--works"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5" id="ServNewsletter">
            <div class="row">
              <div class="col-auto">
                <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                  <font-awesome-icon :icon="['fas', 'paper-plane']" />
                </div>
              </div>
              <div class="col-lg-3">
                <h5 class="card-title text-uppercase text-muted mb-0">Mailchimp</h5>
                <span class="h2 font-weight-bold mb-0">Newsletters</span>
              </div>
              <div class="col">
                <p>
                  Servicio de creación de newsletter para mantener a sus
                  clientes informados de sus últimas novedades de productos o
                  servicios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const Services = () =>
  import(/* webpackChunkName: "services" */ "@/components/Services.vue");
export default {
  components: {
    Services,
  },
};
</script>
<style scoped></style>
