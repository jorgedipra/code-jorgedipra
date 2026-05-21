<template>
  <div class="is-widescreen">
    <Navbar></Navbar>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <TimelineSection></TimelineSection>
    <SeccionPortafolio></SeccionPortafolio>
    <ServicesSection></ServicesSection>
    <SeccionContacto></SeccionContacto>
    <FooterSection></FooterSection>
    <GoTopButton></GoTopButton>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import HeroSection from '../components/HeroSection.vue';
import AboutSection from '../components/AboutSection.vue';
import TimelineSection from '../components/TimelineSection.vue';
import SeccionPortafolio from '../components/SeccionPortafolio.vue';
import ServicesSection from '../components/ServicesSection.vue';
import SeccionContacto from '../components/SeccionContacto.vue';
import FooterSection from '../components/FooterSection.vue';
import GoTopButton from '../components/GoTopButton.vue';

export default {
  components: {
    Navbar,
    HeroSection,
    AboutSection,
    TimelineSection,
    SeccionPortafolio,
    ServicesSection,
    SeccionContacto,
    FooterSection,
    GoTopButton
  },
  mounted() {
    this.setupScrollAnimations();

    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-S1V7MGTZDB');

    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-S1V7MGTZDB';
    script.async = true;
    document.body.appendChild(script);
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
        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
          observer.observe(el);
        });
      });
    }
  }
};
</script>

<style scoped>
div {
  border: none;
}
</style>
