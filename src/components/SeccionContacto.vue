<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="section-tag">Contacto</span>
        <h2 class="section-title">Hablemos de tu proyecto</h2>
        <p class="section-subtitle">
          ¿Tienes una idea en mente? Me encantaría escuchar tu propuesta.
        </p>
      </div>
      <div class="contact-grid">
        <div class="contact-info animate-on-scroll">
          <h3>Conectemos</h3>
          <p>
            Estoy siempre abierto a explorar nuevas oportunidades, colaboraciones y proyectos
            emocionantes. No dudes en contactarme a través de cualquiera de estos medios.
          </p>
          <div class="contact-cards">
            <a href="https://github.com/jorgedipra" target="_blank" class="contact-card">
              <b-icon pack="fab" icon="github" size="is-large"></b-icon>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/jorgedipra/" target="_blank" class="contact-card">
              <b-icon pack="fab" icon="linkedin-in" size="is-large"></b-icon>
              <span>LinkedIn</span>
            </a>
            <a href="https://twitter.com/jorgedipra" target="_blank" class="contact-card">
              <b-icon pack="fab" icon="twitter" size="is-large"></b-icon>
              <span>Twitter</span>
            </a>
            <a href="mailto:jorgedipra@example.com" class="contact-card">
              <b-icon pack="fas" icon="envelope" size="is-large"></b-icon>
              <span>Email</span>
            </a>
          </div>
        </div>
        <div class="contact-form-container animate-on-scroll">
          <h4>Envíame un mensaje</h4>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSexIeSAvhNR0FkprGsVgoO3mlRnw-y_CPy2IOh0GbV-iHfJuQ/viewform?embedded=true"
            width="100%"
            height="600"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            style="border: none; overflow: hidden"
            allow="autoplay 'self'; fullscreen 'self'"
          >
            Cargando…
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SeccionContacto',
  mounted() {
    this.setupScrollAnimations();
  },
  methods: {
    setupScrollAnimations() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      this.$nextTick(() => {
        document.querySelectorAll('.contact-section .animate-on-scroll').forEach((el) => {
          observer.observe(el);
        });
      });
    }
  }
};
</script>

<style scoped>
.contact-section {
  padding: 6rem 0;
  background: var(--dark);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3rem;
}

.contact-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.contact-info p {
  color: var(--gray-500);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.contact-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.contact-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  text-align: center;
  text-decoration: none;
  color: var(--light);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.contact-card:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
}

.contact-card >>> .icon {
  color: var(--accent);
}

.contact-card span {
  font-size: 0.9rem;
  font-weight: 500;
}

.contact-form-container {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2.5rem;
  border-radius: var(--radius-lg);
}

.contact-form-container h4 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-cards {
    grid-template-columns: repeat(4, 1fr);
  }

  .contact-form-container {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
