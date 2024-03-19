<template>
  <div class="container is-widescreen">
    <CompHeader></CompHeader>
      <CompHome></CompHome>
    <CompFooter></CompFooter>
  </div>
</template>


<script>
import CompHeader from './components/header.vue';
import CompHome from './components/Home.vue';
import CompFooter from './components/footer.vue';

export default {
  components: {
    CompHeader,
    CompHome,
    CompFooter
  }
}
</script>

<style>
div{
  border: none;
}
</style>
