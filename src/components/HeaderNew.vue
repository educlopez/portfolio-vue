<template>
  <div class="position-relative panel bg-header-new" data-color="white">
    <section class="section section-lg pt-150">
      <div class="container d-flex">
        <div class="col px-0">
          <div class="row">
            <div class="col-lg-12 text-center">
              <!-- <router-link class="announcement mb-4" to="/recomendaciones">
                <span class="badge badge-pill comingsoon-pill"
                  >Próximamente</span
                >
                <span class="message">
                  Blog
                  <font-awesome-icon :icon="['fas', 'chevron-right']" />
                </span>
              </router-link>-->
              <h1 class="title-h1-header text-black">
                <span class="border-title me-name">Soy Edu</span>
              </h1>
              <span class="title-sub-header"
                >Front-End y Diseñador Gráfico</span
              >

              <div class="btn-wrapper mt-5">
                <a
                  href="mailto:hi@educalvolopez.com"
                  target="_blank"
                  class="btn btn-yellow mb-3 mb-sm-0"
                >
                  <span class="btn-inner--text">Contacto</span>
                </a>
                <router-link to="#works" class="btn btn-white mb-3 mb-sm-0">
                  <span class="btn-inner--text">Proyectos</span>
                </router-link>
              </div>
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
.bg-header-new {
  background: url("/images/bg_header.jpg");
  background-position: center;
  background-size: cover;
}
.me-name {
  color: black;
  font-size: 2em;
}
.comingsoon-pill {
  color: #ffffff;
  background-color: #5e72e4;
  font-size: 0.75rem !important;
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}
.announcement-comingsoo {
  color: #2b035f;
  background: rgb(44 108 251 / 15%);
}
</style>