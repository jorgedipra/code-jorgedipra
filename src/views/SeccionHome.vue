<template>
    <div class="container is-widescreen">
      <CompHome></CompHome>
      <CompPorta></CompPorta>
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
  }
}
</script>

<style>
div{
    border: none;
}
</style> 