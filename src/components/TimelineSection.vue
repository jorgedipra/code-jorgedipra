<template>
  <section class="timeline-section">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="section-tag">Experiencia</span>
        <h2 class="section-title">Mi trayectoria</h2>
        <p class="section-subtitle">
          Un camino de aprendizaje constante y crecimiento profesional.
        </p>
      </div>
      <div class="timeline">
        <div
          class="timeline-item animate-on-scroll"
          v-for="(item, index) in timelineItems"
          :key="index"
          :class="{ reverse: index % 2 === 1 }"
        >
          <div class="timeline-content" v-if="index % 2 === 0">
            <span class="timeline-year">{{ item.year }}</span>
            <h4>{{ item.subtitle }}</h4>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
          <div class="timeline-dot"></div>
          <div class="timeline-content" v-if="index % 2 === 1">
            <span class="timeline-year">{{ item.year }}</span>
            <h4>{{ item.subtitle }}</h4>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimelineSection',
  data() {
    return {
      timelineItems: [
        {
          year: '2020 - Presente',
          title: 'Cerlalc-Unesco',
          subtitle: 'Desarrollador Master',
          description:
            'Liderando proyectos de transformación digital para instituciones culturales latinoamericanas.'
        },
        {
          year: '2015 - 2020',
          title: 'Freelance',
          subtitle: 'Desarrollador Senior',
          description:
            'Desarrollo de aplicaciones web para clientes internacionales en múltiples industrias.'
        },
        {
          year: '2012 - 2015',
          title: 'Agencia Digital',
          subtitle: 'Desarrollador Junior',
          description: 'Desarrollo de sitios web responsivos y aplicaciones interactivas para PYME.'
        }
      ]
    };
  }
};
</script>

<style scoped>
.timeline-section {
  padding: 6rem 0;
  background: var(--darker);
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.timeline-item.reverse {
  direction: rtl;
}

.timeline-item.reverse > * {
  direction: ltr;
}

.timeline-item:nth-child(odd) .timeline-content {
  text-align: right;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 2rem;
  width: 16px;
  height: 16px;
  background: var(--primary);
  border-radius: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.3);
}

.timeline-content h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
}

.timeline-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: var(--gray-500);
  font-size: 0.9rem;
}

.timeline-year {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    grid-template-columns: 1fr;
    padding-left: 50px;
    gap: 0;
  }

  .timeline-item.reverse {
    direction: ltr;
  }

  .timeline-item:nth-child(odd) .timeline-content {
    text-align: left;
  }

  .timeline-dot {
    left: 20px;
  }
}
</style>
