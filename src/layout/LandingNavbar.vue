<template>
  <header class="header-global">
    <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light">
        <div class="container">
            <router-link to="/" class="navbar-brand mr-lg-5">
                <img src="/images/logonegro.svg" alt="Logo Edu Calvo Design" style="height: 50px">
            </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbar_global">
            <div class="navbar-collapse-header">
            <div class="row">
                <div class="col-6 collapse-brand">
                
                <router-link to="/">
                    <img src="/images/logonegro.svg" alt="Logo Edu Calvo Design">
                </router-link>
                </div>
                <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span></span>
                    <span></span>
                </button>
                </div>
            </div>
            </div>
            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link" data-toggle="dropdown" role="button">
                        <i class="ni ni-ui-04 d-lg-none"></i>
                        <span class="nav-link-inner--text text-black">Servicios</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-xl">
                        <div class="dropdown-menu-inner">
                            <router-link to="/services#ServWeb" class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-primary rounded-circle">
                                    <font-awesome-icon icon="desktop" />
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="heading text-primary mb-md-1">Desarrollo Web</h6>
                                    <p class="description d-none d-md-inline-block mb-0">Creación del diseño y desarrollo de su página web</p>
                                </div>
                            </router-link>
                            <router-link :to="{ path: '/services', hash: '#ServDesign' }" class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-primary rounded-circle">
                                    <font-awesome-icon icon="paint-brush" />
                                </div>
                                <div class="media-body ml-3">
                                    <h5 class="heading text-primary mb-md-1">Diseño Gráfico</h5>
                                    <p class="description d-none d-md-inline-block mb-0">Logotipos, redes sociales, diseños webs y mucho más</p>
                                </div>
                            </router-link>
                            <router-link to="/services#ServNewsletter" class="media d-flex align-items-center">
                                <div class="icon icon-shape bg-gradient-primary rounded-circle">
                                    <font-awesome-icon icon="paper-plane" />
                                </div>
                                <div class="media-body ml-3">
                                    <h6 class="heading text-primary mb-md-1">Newsletters</h6>
                                    <p class="description d-none d-md-inline-block mb-0">Cierre sus oportunidades de venta y servicio al cliente con Newsletters</p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <!--<a href="#" class="nav-link" data-toggle="dropdown" role="button">-->
                    <router-link to="/#works" class="nav-link" role="button">
                        <span class="nav-link-inner--text text-black">Proyectos</span>
                   </router-link>
                    <!-- <div class="dropdown-menu">
                    <a href="" class="dropdown-item">Ringsouth Móvil</a>
                    <a href="" class="dropdown-item">SmsRingsouth</a>
                    <a href="" class="dropdown-item">Helpring</a>
                    <a href="" class="dropdown-item">Tantra</a>
                    </div>-->
                </li>
                <li class="nav-item ">
                    <router-link to="/recomendaciones" class="nav-link" role="button">
                        <span class="nav-link-inner--text text-black">Recomendaciones</span>
                </router-link>
                </li>
            </ul>
            <ul class="navbar-nav align-items-lg-center ml-lg-auto">
            <li class="nav-item">
                <a rel="noopener" class="nav-link nav-link-icon" href="https://www.instagram.com/educlopez93/" target="_blank" data-toggle="tooltip" title="Sígueme en Instagram">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="text-black" />
                    <span class="nav-link-inner--text d-lg-none">Instagram</span>
                </a>
            </li>
            <li class="nav-item">
                <a rel="noopener" class="nav-link nav-link-icon" href="https://twitter.com/educlopez93" target="_blank" data-toggle="tooltip" title="Sígueme en Twitter">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="text-black" />
                    <span class="nav-link-inner--text d-lg-none">Twitter</span>
                </a>
            </li>
                <li class="nav-item">
                <a rel="noopener" class="nav-link nav-link-icon" href="https://www.linkedin.com/in/educlopez/" target="_blank" data-toggle="tooltip" title="Sígueme en Linkedin">
                    <font-awesome-icon :icon="['fab', 'linkedin']" class="text-black" />
                    <span class="nav-link-inner--text d-lg-none">Linkedin</span>
                </a>
            </li>
            <li class="nav-item">
                <a rel="noopener" class="nav-link nav-link-icon" href="https://github.com/educlopez" target="_blank" data-toggle="tooltip" title="Sígueme en Github">
                    <font-awesome-icon :icon="['fab', 'github']" class="text-black" />
                    <span class="nav-link-inner--text d-lg-none">Github</span>
                </a>
            </li>
            <li class="nav-item d-none d-lg-block ml-lg-4">
                <a href="mailto:hi@educalvolopez.com" target="_blank" class="btn btn-yellow">
                <span class="nav-link-inner--text">Contacto</span>
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </header>

</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
