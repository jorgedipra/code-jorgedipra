<template>
  <div class="container is-widescreen">
    <CompHeader></CompHeader>
        <CompHome></CompHome>
  </div>
</template>


<script>
import CompHeader from './components/header.vue';
import CompHome from './components/Home.vue';

export default {
  components: {
    CompHeader,
    CompHome
  }
}
</script>

<style>
div{
  border: none;
}
</style>
