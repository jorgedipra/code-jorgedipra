<template>
  <footer class="footer-wave">
    <div class="footer-wave-bg"></div>
    <div class="container">
      <div class="footer-content">
        <div class="footer-grid">
          <div class="footer-brand">
            <h3>Jorgedipra</h3>
            <p>
              Desarrollador web passionné por crear experiencias digitales únicas. Especializado en
              Vue.js, React y tecnologías modernas.
            </p>
            <div class="footer-social">
              <a href="https://github.com/jorgedipra" target="_blank">
                <b-icon pack="fab" icon="github" size="is-small"></b-icon>
              </a>
              <a href="https://linkedin.com/in/jorgedipra/" target="_blank">
                <b-icon pack="fab" icon="linkedin-in" size="is-small"></b-icon>
              </a>
              <a href="https://twitter.com/jorgedipra" target="_blank">
                <b-icon pack="fab" icon="twitter" size="is-small"></b-icon>
              </a>
              <a href="https://www.youtube.com/jorgedipra" target="_blank">
                <b-icon pack="fab" icon="youtube" size="is-small"></b-icon>
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Navegación</h4>
            <ul class="footer-links">
              <li><a href="#hero">Inicio</a></li>
              <li><a href="#about">Sobre mí</a></li>
              <li><a href="#portfolio">Portafolio</a></li>
              <li><a href="#services">Servicios</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Servicios</h4>
            <ul class="footer-links">
              <li><a href="#">Desarrollo Web</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Backend & APIs</a></li>
              <li><a href="#">DevOps & Cloud</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contacto</h4>
            <ul class="footer-links">
              <li><a href="#">Bogotá, Colombia</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            Copyright © 2024 <a href="#">Jorgedipra</a> by Jorge Diaz. Licensed under
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. Content licensed under
            <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
};
</script>

<style scoped>
.footer-wave {
  position: relative;
  background: var(--darker);
}

.footer-wave-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 100'%3E%3Cpath fill='%230f172a' d='M0,50 C360,100 720,0 1440,50 L1440,0 L0,0 Z'/%3E%3C/svg%3E")
    no-repeat;
  background-size: cover;
}

.footer-content {
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-brand h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.footer-brand p {
  color: var(--gray-500);
  font-size: 0.9rem;
  line-height: 1.8;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.footer-social a {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-300);
  transition: var(--transition);
  text-decoration: none;
}

.footer-social a:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: white;
}

.footer-col h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: var(--light);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: var(--gray-500);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: var(--gray-500);
  font-size: 0.85rem;
}

.footer-bottom a {
  color: var(--accent);
  text-decoration: none;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .footer-wave-bg {
    height: 60px;
  }
}
</style>
