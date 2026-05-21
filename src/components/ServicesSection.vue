<template>
  <section class="services-section" id="services">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="section-tag">Servicios</span>
        <h2 class="section-title">¿En qué puedo ayudarte?</h2>
        <p class="section-subtitle">
          Soluciones personalizadas para llevar tu proyecto al siguiente nivel.
        </p>
      </div>
      <div class="services-grid">
        <div
          class="service-card animate-on-scroll"
          v-for="service in services"
          :key="service.title"
        >
          <div class="service-icon">
            <b-icon pack="fas" :icon="service.icon" size="is-medium"></b-icon>
          </div>
          <h4>{{ service.title }}</h4>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Desarrollo Web',
          icon: 'code',
          description: 'Aplicaciones web modernas, responsivas y optimizadas para SEO.'
        },
        {
          title: 'UI/UX Design',
          icon: 'palette',
          description: 'Interfaces intuitivas y experiencias de usuario memorables.'
        },
        {
          title: 'Backend & APIs',
          icon: 'server',
          description: 'Arquitecturas escalables, APIs RESTful y bases de datos.'
        },
        {
          title: 'DevOps & Cloud',
          icon: 'cloud',
          description: 'Despliegue, CI/CD, Docker y servicios cloud (AWS/GCP).'
        }
      ]
    };
  }
};
</script>

<style scoped>
.services-section {
  padding: 6rem 0;
  background: var(--darker);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.service-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem;
  border-radius: var(--radius-lg);
  text-align: center;
  transition: var(--transition);
}

.service-card:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
}

.service-icon {
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: white;
}

.service-card h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.service-card p {
  color: var(--gray-500);
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
