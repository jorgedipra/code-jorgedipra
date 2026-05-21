<template>
  <button class="go-top" id="goTopBtn" :class="{ visible: isVisible }" @click="scrollToTop">
    <b-icon pack="fas" icon="arrow-up" size="is-medium"></b-icon>
  </button>
</template>

<script>
export default {
  name: 'GoTopButton',
  data() {
    return {
      isVisible: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 400;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.go-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: var(--transition);
  z-index: 999;
}

.go-top.visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.go-top:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
</style>
