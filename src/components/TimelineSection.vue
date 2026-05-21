<template>
  <section class="timeline-section" id="experience">
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
            <p v-if="expandedItems[index]">{{ item.description }}</p>
            <button class="expand-btn" @click="toggleExpand(index)">
              {{ expandedItems[index] ? 'Leer menos' : 'Leer más' }}
            </button>
          </div>
          <div class="timeline-dot"></div>
          <div class="timeline-content" v-if="index % 2 === 1">
            <span class="timeline-year">{{ item.year }}</span>
            <h4>{{ item.subtitle }}</h4>
            <h3>{{ item.title }}</h3>
            <p v-if="expandedItems[index]">{{ item.description }}</p>
            <button class="expand-btn" @click="toggleExpand(index)">
              {{ expandedItems[index] ? 'Leer menos' : 'Leer más' }}
            </button>
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
      datos: {},
      expandedItems: {}
    };
  },
  computed: {
    timelineItems() {
      return this.datos.experiences || [];
    }
  },
  async mounted() {
    try {
      const response = await fetch('./data/timeline.json');
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      this.datos = data;
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }

    this.$nextTick(() => {
      this.setupScrollAnimations();
    });
  },
  methods: {
    toggleExpand(index) {
      this.expandedItems[index] = !this.expandedItems[index];
    },
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
        document.querySelectorAll('.timeline-section .animate-on-scroll').forEach((el) => {
          observer.observe(el);
        });
      });
    }
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
  white-space: pre-line;
}

.timeline-year {
  font-size: 0.85rem;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
}

.expand-btn {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: var(--transition);
  margin-top: 0.5rem;
}

.expand-btn:hover {
  background: var(--primary);
  color: white;
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
