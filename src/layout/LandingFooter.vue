<template>
  <footer class="footer has-cards">
    <div class="container">
      <div class="row row-grid align-items-center my-md">
        <div class="col-lg-12 text-lg-right text-center btn-wrapper">
          <a
            class="mb-0 btn btn-yellow btn-md"
            href="/doc/curriculum_vitae_eduardo_calvo_2019.pdf"
            download
            >Descargar Curriculum Vitae</a
          >
        </div>
      </div>
      <hr />
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            <p class="copyright text-lg-left text-right">
              &copy; 2017 - {{ year }} Eduardo Calvo
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <a
                href="#"
                data-toggle="modal"
                data-target="#privacyModal"
                class="nav-link"
                target="_blank"
                >Política de privacidad y Aviso Legal</a
              >
            </li>
            <li class="nav-item">
              <a
                href="#"
                data-toggle="modal"
                data-target="#cookiesModal"
                class="nav-link"
                target="_blank"
                >Política de Cookies</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
