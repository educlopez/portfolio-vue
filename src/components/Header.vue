<template>
    <div class="position-relative panel" data-color="white">
        <section class="section section-lg section-shaped pt-100">
            <div class="container d-flex card-style">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-5">
                           <router-link class="announcement mb-4" to="/recomendaciones">
                                <span class="badge badge-pill new-pill">Nuevo</span>
                                <span class="message">
                                    Recomendaciones de equipo y libros <font-awesome-icon :icon="['fas', 'chevron-right']"/>
                                </span>
                            </router-link>
                            <h1 class="title-h1-header text-black">
                                <span class="border-title">
                                    Soy Edu
                                </span>
                            </h1>
                            <span class="title-sub-header">Front-End y Diseñador Gráfico</span>

                            <div class="btn-wrapper mt-5">
                                <a href="mailto:hi@educalvolopez.com" target="_blank" class="btn btn-yellow mb-3 mb-sm-0">
                                    <span class="btn-inner--text">Contacto</span>
                                </a>
                                <router-link to="/#works" class="btn btn-white mb-3 mb-sm-0">
                                    <span class="btn-inner--text">Proyectos</span>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-lg-7 p-0">
                            <!--<v-lazy-image src="images/rock-img.png" alt="img by https://icons8.com" data-toggle="tooltip" title="Ilustración por https://icons8.com" class="image lazyload rock-img"/>-->
                           <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_BWAZgX.json"  background="transparent"  speed="1"   loop  autoplay></lottie-player>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style>
lottie-player{
    width:600px;
}

@media (max-width: 670px) {
    lottie-player{
    width:100%;
}
}
</style>