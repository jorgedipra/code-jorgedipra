<template>
    <div class="container is-widescreen">
      <CompHome></CompHome>
      <br><br>
      <CompPorta></CompPorta>
      <br><br>
      <CompContat></CompContat>
    </div>
</template>

<script>
  import CompHome from '../components/Home.vue';
  import CompContat from '../components/SeccionContacto.vue';
  import CompPorta from '../components/SeccionPortafolio.vue';

export default {
  components: {
    CompHome,
    CompContat,
    CompPorta
  },
  mounted() {
    // Declarar la variable dataLayer
    window.dataLayer = window.dataLayer || [];

    // Google tag (gtag.js)
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-S1V7MGTZDB');

    var script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-S1V7MGTZDB";
    script.async = true;
    document.body.appendChild(script);
    //AddToAny END
  }
}
</script>

<style>
div{
    border: none;
}
</style> 