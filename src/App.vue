<template>
  <div class="container is-widescreen">
    <CompHeader></CompHeader>
      <router-view></router-view>
    <CompFooter></CompFooter>
  </div>
</template>


<script>
import CompHeader from './components/header.vue';
import CompFooter from './components/footer.vue';

export default {
  data() {
        return {
            datos: {}
        }
    },
    mounted() {
      // // Espera a que el DOM esté completamente cargado
      // document.addEventListener("DOMContentLoaded", function() {
      //     // Obtén el elemento <head> del documento
      //     var head = document.querySelector("head");

      //     // Crea un elemento <meta> para la descripción
      //     var metaDescription = document.createElement("meta");
      //     metaDescription.setAttribute("name", "description");
      //     metaDescription.setAttribute("content", "Explora mi web personal para obtener información sobre mi experiencia, habilidades y proyectos.¡Contáctame hoy para empezar!");

      //     // Agrega la meta descripción al elemento <head>
      //     head.appendChild(metaDescription);
      // });

    },
  components: {
    CompHeader,
    CompFooter
  }
}
</script>

<style>
div{
  border: none;
}
</style>
