<template>
  <div class="position-relative panel" data-color="white">
    <section class="section section-lg pt-100">
      <div class="container d-flex card-style">
        <div class="col px-0">
          <div class="row">
            <div class="col-lg-5">
              <router-link class="announcement mb-4" to="/recomendaciones">
                <span class="badge badge-pill new-pill">Nuevo</span>
                <span class="message">
                  Recomendaciones de equipo y libros
                  <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </span>
              </router-link>
              <h1 class="title-h1-header text-black">
                <span class="border-title">Soy Edu</span>
              </h1>
              <span class="title-sub-header">Front-End y Diseñador Gráfico</span>

              <div class="btn-wrapper mt-5">
                <a
                  href="mailto:educlopez93@gmail.com"
                  target="_blank"
                  class="btn btn-yellow mb-3 mb-sm-0"
                >
                  <span class="btn-inner--text">Contacto</span>
                </a>
                <router-link to="/#works" class="btn btn-white mb-3 mb-sm-0">
                  <span class="btn-inner--text">Proyectos</span>
                </router-link>
              </div>
            </div>
            <div class="col-lg-7 p-0">
              <picture>
                <source type="image/webp" data-srcset="/compressed_images/Welcome.webp" />
                <img
                  alt="welcome Edu web"
                  data-src="/images/Welcome.png"
                  class="lazyload img-fluid img-welcome"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style scoped>
</style>

