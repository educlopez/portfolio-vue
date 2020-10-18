<template>
  <div class="position-relative panel bg-header-new" data-color="white">
    <section class="nav-header-p">
      <div class="container d-flex">
        <div class="col px-0">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h1 class="text-black me-name">
               {{ header }}
              </h1>
                <span class="title-sub-header"
                >{{ subheader }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
        props: {
          header: {
            type: String,
            required: true,
          },
           subheader: {
            type: String,
            required: true,
          },
        }
    }
</script>

<style scoped>
.nav-header-p{
  padding: 10rem 0 6rem 0
}
.bg-header-new {
  background: url("/images/bg_header.jpg");
  background-position: center;
  background-size: cover;
}
.me-name {
  font-size: 1em;
  line-height: 1.2em;
  overflow-wrap: break-word;
  letter-spacing: 0.026em;
  font-size: 4.25em;
  font-weight: 900;
  text-transform: uppercase;
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
@media (max-width: 767px) {
  .me-name {
    font-size: 2em;
    line-height: 1em;
  }
  .nav-header-p{
    padding: 100px 0 40px 0
  }
  .bg-header-new {
    background: url("/images/bg_header.jpg");
    background-position: left bottom;;
    background-size: auto;
  }
}
</style>