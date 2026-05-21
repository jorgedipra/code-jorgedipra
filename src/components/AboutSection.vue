<template>
  <section class="about" id="about">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <span class="section-tag">Sobre mí</span>
        <h2 class="section-title">Conoce mi historia</h2>
        <p class="section-subtitle">
          Más de una década transformando ideas en experiencias digitales.
        </p>
      </div>
      <div class="about-grid">
        <div class="about-image animate-on-scroll">
          <img src="../assets/baner.png" alt="Jorge Diaz - Banner" />
          <div class="about-overlay">
            <h4>10+ Años</h4>
            <p>de experiencia</p>
          </div>
          <div class="tech-categories">
            <div class="tech-category">
              <h4><b-icon pack="fas" icon="code" size="is-small"></b-icon> Stack Principal</h4>
              <div class="tech-tags">
                <span class="tech-tag">PHP</span>
                <span class="tech-tag">Laravel</span>
                <span class="tech-tag">Vue.js</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Python</span>
                <span class="tech-tag">jQuery</span>
              </div>
            </div>
            <div class="tech-category">
              <h4><b-icon pack="fas" icon="database" size="is-small"></b-icon> Bases de Datos</h4>
              <div class="tech-tags">
                <span class="tech-tag">MySQL</span>
                <span class="tech-tag">PostgreSQL</span>
                <span class="tech-tag">SQLite</span>
              </div>
            </div>
            <div class="tech-category">
              <h4><b-icon pack="fas" icon="cloud" size="is-small"></b-icon> Servidores</h4>
              <div class="tech-tags">
                <span class="tech-tag">Linux</span>
                <span class="tech-tag">Windows Server</span>
                <span class="tech-tag">Google Cloud</span>
                <span class="tech-tag">AWS</span>
                <span class="tech-tag">VMware</span>
              </div>
            </div>
            <div class="tech-category">
              <h4><b-icon pack="fas" icon="cog" size="is-small"></b-icon> Herramientas IA</h4>
              <div class="tech-tags">
                <span class="tech-tag">Claude Code</span>
                <span class="tech-tag">Aider</span>
                <span class="tech-tag">OpenCode</span>
                <span class="tech-tag">GitHub Copilot</span>
              </div>
            </div>
            <div class="tech-category">
              <h4><b-icon pack="fas" icon="cubes" size="is-small"></b-icon> CMS</h4>
              <div class="tech-tags">
                <span class="tech-tag">Moodle</span>
                <span class="tech-tag">WordPress</span>
                <span class="tech-tag">Joomla</span>
              </div>
            </div>
            <div class="tech-category">
              <h4><b-icon pack="fas" icon="toolbox" size="is-small"></b-icon> Gestión</h4>
              <div class="tech-tags">
                <span class="tech-tag">Docker</span>
                <span class="tech-tag">Podman</span>
                <span class="tech-tag">Jira</span>
                <span class="tech-tag">Trello</span>
                <span class="tech-tag">Asana</span>
              </div>
            </div>
          </div>
        </div>
        <div class="about-content animate-on-scroll">
          <h3>Desarrollador Full-Stack en Cerlalc-Unesco</h3>
          <p>
            Especialista en desarrollo web con más de 12 años de experiencia construyendo soluciones
            robustas en PHP, Laravel y Vue.js. He trabajado con clientes internacionales como
            Cerlalc y los sistemas Gestor ISBN de las Cámaras del Libro de Ecuador, Venezuela y
            Chile, así como para entidades públicas colombianas como SuperSalud, el Ministerio de
            Trabajo y la Secretaría Distrital de Bogotá. Actualmente activo en Cerlalc.
          </p>
          <p>
            Disponible para proyectos en modalidad freelance o prestación de servicios, ofreciendo
            soluciones personalizadas que combinan funcionalidad, escalabilidad y mejores prácticas
            de desarrollo.
          </p>
          <div class="skills-grid">
            <div class="skill-item" v-for="skill in skills" :key="skill.name">
              <div class="skill-header">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percent">{{ skill.percent }}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" :style="{ width: skill.percent + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      skills: [
        { name: 'PHP / Laravel', percent: 95 },
        { name: 'Vue.js / JavaScript', percent: 90 },
        { name: 'Python / jQuery', percent: 85 },
        { name: 'MySQL / PostgreSQL', percent: 88 },
        { name: 'Linux / Docker / AWS', percent: 85 },
        { name: 'Git / Jira / Trello', percent: 90 }
      ]
    };
  }
};
</script>

<style scoped>
.about {
  padding: 6rem 0;
  background: var(--dark);
  position: relative;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-image {
  position: relative;
}

.about-image img {
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
}

.about-overlay {
  position: absolute;
  top: -2rem;
  right: -2rem;
  background: var(--gradient-primary);
  padding: 1.5rem 2rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-xl);
  z-index: 10;
}

.about-overlay h4 {
  font-size: 1.5rem;
  font-weight: 800;
}

.about-overlay p {
  font-size: 0.9rem;
  opacity: 0.9;
}

.about-content h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.about-content p {
  color: var(--gray-500);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.25rem;
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.skill-item:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
}

.skill-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.skill-name {
  font-weight: 600;
  font-size: 0.95rem;
}

.skill-percent {
  color: var(--accent);
  font-weight: 700;
  font-size: 0.85rem;
}

.skill-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: var(--gradient-primary);
  border-radius: 3px;
  transition: width 1s ease;
}

.tech-categories {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 5rem;
}

.tech-category {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: var(--radius-md);
}

.tech-category h4 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: #fff;
  font-size: 0.85rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--gradient-primary);
  padding: 0.3rem 0.6rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .about-overlay {
    position: relative;
    bottom: auto;
    right: auto;
    margin-top: 1rem;
    display: inline-block;
  }

  .tech-categories {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .tech-categories {
    grid-template-columns: 1fr;
  }
}
</style>
