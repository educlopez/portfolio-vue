<template>
<div style="margin-top: 80px;">
    <Services/>
    <section id="services" class="section section-sm panel">
        <div class="container py-lg-md d-flex">
            <div class="col px-0">
                <div class="mb-5" id="ServWeb">
                    <div class="row">
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                <font-awesome-icon :icon="['fas', 'desktop']"/>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <h5 class="card-title text-uppercase text-muted mb-0">Desarrollo</h5>
                            <span class="h2 font-weight-bold mb-0">Web</span>
                        </div>
                        <div class="col">
                            <p>
                                Con la tecnología más avanzada, ofrezo un conjunto sólido de servicios digitales, que incluyen diseño y desarrollo web, mejora de UX / UI y soluciones comerciales que crean un impacto inmediato.
                            </p>
                        </div>
                        <div class="col-lg-11 offset-lg-1">
                            <div class="row">
                                <div class="col-lg-3">
                                    <v-lazy-image alt="Cliente Tantra" src="/images/screen-tantra_website.png" class="image lazyload img-fluid mb-5 img--works"/>
                                </div>
                                <div class="col-lg-3">
                                    <v-lazy-image alt="Cliente UAM" src="/images/screen-uam_dashboard.png" class="image lazyload img-fluid mb-5 img--works"/>
                                </div>
                                <div class="col-lg-3">
                                    <v-lazy-image alt="Cliente Ringsouth" src="/images/screen-ringsouth_sms.png" class="image lazyload img-fluid mb-5 img--works"/>
                                </div>
                                <div class="col-lg-3">
                                    <v-lazy-image alt="Cliente Ringsouth" src="/images/screen-ringsouth_movil.png" class="image lazyload img-fluid mb-5 img--works"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-5" id="ServDesign">
                    <div class="row">
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                <font-awesome-icon :icon="['fas', 'paint-brush']"/>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <h5 class="card-title text-uppercase text-muted mb-0">Diseño</h5>
                            <span class="h2 font-weight-bold mb-0">Gráfico</span>
                        </div>
                        <div class="col">
                            <p>Ofrezco un conjunto de piezas variado, desde logotipos, papelería, banners, diseños digitales para redes sociales,etc. que ayudaran a impulsar su empresa.

                            </p>
                        </div>
                        <div class="col-lg-11 offset-lg-1">
                            <div class="row">
                                <div class="col-lg-3">
                                    <v-lazy-image alt="Logo Ladyboho" src="/images/logo_ladyboho.png" class="image lazyload img-fluid mb-5 img--works"/>
                                </div>
                                <div class="col-lg-3">
                                    <v-lazy-image alt="Icon App Wolf" src="/images/icon_wolf_app.png" class="image lazyload img-fluid mb-5 img--works"/>
                                </div>
                                <div class="col-lg-3">
                                    <v-lazy-image alt="Logo Linkup" src="/images/logo_linkup.jpg" class="image lazyload img-fluid mb-5 img--works"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-5" id="ServNewsletter">
                    <div class="row">
                        <div class="col-auto">
                            <div class="icon icon-shape bg-gradient-primary text-white rounded-circle shadow">
                                <font-awesome-icon :icon="['fas', 'paper-plane']"/>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <h5 class="card-title text-uppercase text-muted mb-0">Mailchimp</h5>
                            <span class="h2 font-weight-bold mb-0">Newsletters</span>
                        </div>
                        <div class="col">
                            <p>
                                Servicio de creación de newsletter para mantener a sus clientes informados de sus últimas novedades de productos o servicios.
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
import Services from '@/components/Services.vue';
export default {
    components: {
     Services
    },
  };
</script>