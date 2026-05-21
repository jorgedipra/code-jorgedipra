<template>
  <section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="hero-grid"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-left">
          <div class="hero-badge">
            <b-icon pack="fas" icon="code" size="is-small"></b-icon>
            Disponible para proyectos
          </div>
          <h1 class="hero-title">
            Hola, soy <span>Jorge Díaz</span><br />
            <span class="typing-text">{{ typedText }}</span>
          </h1>
          <p class="hero-description">
            Construyo soluciones web modernas con enfoque en rendimiento, estabilidad y
            escalabilidad. +12 años de experiencia en desarrollo Full-Stack, infraestructura Linux y
            arquitectura de sistemas para proyectos institucionales en Latinoamérica.
          </p>
          <div class="hero-buttons">
            <a href="#portfolio" class="btn btn-primary">
              <b-icon pack="fas" icon="folder" size="is-small"></b-icon>
              Ver Portafolio
            </a>
            <a href="#contact" class="btn btn-secondary">
              <b-icon pack="fas" icon="envelope" size="is-small"></b-icon>
              Contactar
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">10+</div>
              <div class="stat-label">Años de experiencia</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">{{ totalProjects }}+</div>
              <div class="stat-label">Proyectos completados</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">20+</div>
              <div class="stat-label">Clientes satisfechos</div>
            </div>
          </div>
        </div>
        <div class="hero-right">
          <div class="avatar-container">
            <div class="avatar-ring"></div>
            <img src="../assets/avatar.png" alt="Jorge Diaz" class="avatar-img" />
            <div class="avatar-float float-1">
              <b-icon pack="fas" icon="check-circle" size="is-small" type="is-success"></b-icon>
              <span>Trabajo😎</span>
            </div>
            <div class="avatar-float float-2">
              <b-icon pack="fas" icon="map-marker-alt" size="is-small" type="is-danger"></b-icon>
              <span>Bogotá, Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      texts: [
        'Desarrollador Web',
        'Diseñador UI/UX',
        'Problem Solver',
        'Vue.js Expert',
        'Full-Stack Dev'
      ],
      textIndex: 0,
      charIndex: 0,
      isDeleting: false,
      typedText: '',
      totalProjects: 35
    };
  },
  mounted() {
    this.type();
  },
  beforeUnmount() {
    if (this.typeTimeout) {
      clearTimeout(this.typeTimeout);
    }
  },
  methods: {
    type() {
      const currentText = this.texts[this.textIndex];

      if (this.isDeleting) {
        this.typedText = currentText.substring(0, this.charIndex - 1);
        this.charIndex--;
      } else {
        this.typedText = currentText.substring(0, this.charIndex + 1);
        this.charIndex++;
      }

      let timeout = this.isDeleting ? 50 : 100;

      if (!this.isDeleting && this.charIndex === currentText.length) {
        this.isDeleting = true;
        timeout = 2000;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
        timeout = 500;
      }

      this.typeTimeout = setTimeout(this.type, timeout);
    }
  }
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background: var(--darker);
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at top right, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at bottom left, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

.hero-content {
  position: relative;
  z-index: 10;
  padding: 8rem 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-left {
  animation: fadeInUp 0.8s ease;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.2);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-title span {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.typing-text {
  color: var(--accent);
  border-right: 3px solid var(--accent);
  animation: blink 1s infinite;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--gray-500);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--gray-500);
  margin-top: 0.25rem;
}

.hero-right {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 0.8s ease 0.2s both;
}

.avatar-container {
  position: relative;
}

.avatar-ring {
  position: absolute;
  inset: -20px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    var(--primary),
    var(--secondary),
    var(--accent),
    var(--primary)
  );
  animation: rotate 4s linear infinite;
}

.avatar-ring::before {
  content: '';
  position: absolute;
  inset: 4px;
  background: var(--dark);
  border-radius: 50%;
}

.avatar-img {
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--dark);
  z-index: 1;
}

.avatar-float {
  position: absolute;
  background: var(--dark);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.25rem;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: var(--shadow-lg);
  z-index: 2;
}

.avatar-float span {
  font-size: 0.9rem;
  font-weight: 600;
}

.float-1 {
  top: 20%;
  left: -30%;
  animation: float 3s ease-in-out infinite;
}

.float-2 {
  bottom: 20%;
  right: -20%;
  animation: float 3s ease-in-out infinite 1.5s;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-right {
    order: -1;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-buttons {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .avatar-img {
    width: 200px;
    height: 200px;
  }

  .avatar-float {
    display: none;
  }
}
</style>
