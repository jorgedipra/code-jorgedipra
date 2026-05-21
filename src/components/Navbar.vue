<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-container">
      <a href="#hero" class="navbar-brand">
        <img src="../assets/logo.png" alt="Jorgedipra" />
        <span>Jorgedipra</span>
      </a>
      <div class="navbar-menu">
        <a href="#about" class="navbar-link">Sobre mí</a>
        <a href="#experience" class="navbar-link">Experiencia</a>
        <a href="#portfolio" class="navbar-link">Portafolio</a>
        <a href="#contact" class="navbar-link">Contacto</a>
        <a href="https://github.com/jorgedipra" target="_blank" class="navbar-link navbar-cta">
          <b-icon pack="fab" icon="github" size="is-small"></b-icon>
          GitHub
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'CompNavbar',
  data() {
    return {
      isScrolled: false
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
      this.isScrolled = window.scrollY > 50;
    }
  }
};
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(2, 6, 23, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: var(--transition);
}

.navbar.scrolled {
  padding: 0.75rem 2rem;
  background: rgba(2, 6, 23, 0.95);
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--light);
}

.navbar-brand img {
  height: 40px;
  border-radius: var(--radius-sm);
}

.navbar-brand span {
  font-weight: 700;
  font-size: 1.2rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.navbar-link {
  padding: 0.5rem 2rem;
  color: var(--gray-300);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: var(--radius-sm);
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.navbar-link:hover {
  color: var(--light);
  background: rgba(255, 255, 255, 0.1);
}

.navbar-cta {
  background: var(--gradient-primary);
  color: white !important;
  padding: 0.5rem 1.25rem;
  border-radius: var(--radius-sm);
  margin-left: 0.5rem;
}

.navbar-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }
}
</style>
