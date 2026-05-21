<template>
  <section class="portfolio-section" id="portfolio">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="section-tag">Portafolio</span>
        <h2 class="section-title">Proyectos destacados</h2>
        <p class="section-subtitle">
          Una selección de trabajos que representan mi experiencia y pasión.
        </p>
      </div>
      <div class="portfolio-filters">
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'all' }"
          @click="setFilter('all')"
        >
          Todos
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'web' }"
          @click="setFilter('web')"
        >
          Web
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'isbn' }"
          @click="setFilter('isbn')"
        >
          ISBN
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'cursos' }"
          @click="setFilter('cursos')"
        >
          Cursos
        </button>
        <button
          class="filter-btn"
          :class="{ active: activeFilter === 'repositorio' }"
          @click="setFilter('repositorio')"
        >
          Repositorio
        </button>
      </div>
      <div class="portfolio-grid">
        <article
          class="portfolio-card animate-on-scroll"
          v-for="(articulo, index) in filteredArticulos"
          :key="index"
        >
          <div
            class="portfolio-image"
            :style="{ backgroundImage: 'url(' + articulo.imageUrl + ')' }"
          ></div>
          <div class="portfolio-body">
            <span class="portfolio-badge" :class="'badge-' + articulo.categoria">{{
              getCategoryLabel(articulo.categoria)
            }}</span>
            <h3 class="portfolio-title">{{ articulo.titulo }}</h3>
            <p class="portfolio-description">{{ articulo.descripcion }}</p>
            <div class="portfolio-links">
              <a :href="articulo.externalLink" target="_blank" class="portfolio-link">
                <b-icon pack="fas" icon="external-link-alt" size="is-small"></b-icon>
                {{ articulo.linkText_1 }}
              </a>
              <a
                v-if="articulo.externalLink_1"
                :href="articulo.externalLink_1"
                target="_blank"
                class="portfolio-link"
              >
                <b-icon pack="fab" icon="github" size="is-small"></b-icon>
                Ver código
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SeccionPortafolio',
  data() {
    return {
      datos: {},
      activeFilter: 'all'
    };
  },
  computed: {
    filteredArticulos() {
      if (this.activeFilter === 'all') {
        return this.datos.articulos || [];
      }
      return (this.datos.articulos || []).filter(
        (articulo) => articulo.categoria === this.activeFilter
      );
    }
  },
  mounted() {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => (this.datos = data))
      .catch((error) => console.error('Error al cargar los datos:', error));

    this.setupScrollAnimations();
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
      this.$nextTick(() => {
        this.setupScrollAnimations();
      });
    },
    getCategoryLabel(categoria) {
      const labels = {
        web: 'Web',
        isbn: 'ISBN',
        cursos: 'Cursos',
        repositorio: 'Repositorio'
      };
      return labels[categoria] || categoria;
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
        document.querySelectorAll('.portfolio-section .animate-on-scroll').forEach((el) => {
          observer.observe(el);
        });
      });
    }
  }
};
</script>

<style scoped>
.portfolio-section {
  padding: 6rem 0;
  background: var(--dark);
}

.portfolio-filters {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.filter-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--gray-300);
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.portfolio-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
}

.portfolio-card:hover {
  transform: translateY(-8px);
  border-color: var(--primary);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.portfolio-image {
  width: 100%;
  height: 180px;
  background-size: cover;
  background-position: center;
  background-color: var(--gray-700);
}

.portfolio-body {
  padding: 1.5rem;
}

.portfolio-badge {
  display: inline-block;
  background: var(--gradient-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.portfolio-badge.badge-isbn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
}

.portfolio-badge.badge-cursos {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
}

.portfolio-badge.badge-repositorio {
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
}

.portfolio-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.portfolio-description {
  color: var(--gray-500);
  font-size: 0.85rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.portfolio-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.portfolio-link {
  color: var(--gray-500);
  text-decoration: none;
  font-size: 0.85rem;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.portfolio-link:hover {
  color: var(--primary);
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>
