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
