<template>
    <div class="position-relative panel" data-color="white">
        <section class="section section-lg section-shaped pb-250 pt-100">
            <div class="container d-flex card-style">
                <div class="col px-0">
                    <div class="row">
                        <div class="col-lg-12 mb-2">
                             <router-link class="announcement" to="/recomendaciones">
                                <span class="badge badge-pill new-pill">Nuevo</span>
                                <span class="message">
                                    Sección de recomendaciones de equipo y libros <font-awesome-icon :icon="['fas', 'chevron-right']"/>
                                </span>
                            </router-link>
                        </div>
                        <div class="col-lg-6">
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
                        <div class="col-lg-6">
                             <v-lazy-image src="images/rock-img.png" alt="img by https://icons8.com" data-toggle="tooltip" title="Ilustración por https://icons8.com" class="image lazyload rock-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    
</script>