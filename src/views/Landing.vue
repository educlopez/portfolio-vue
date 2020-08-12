<template>
    <div>
       <router-view></router-view>
       <Header/>
       <About/>
       <Services/>
       <Works/>
       <Clients/>
    </div>
</template>
<script>

import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Services from '@/components/Services.vue';
import Works from '@/components/Works.vue';
import Clients from '@/components/Clients.vue';

  export default {
    components: {
     Header,
     About,
     Services,
     Works,
     Clients
    },
  };
</script>
<style></style>
