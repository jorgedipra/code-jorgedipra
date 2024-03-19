import { createRouter, createWebHistory } from 'vue-router';
// Importa los componentes que usarás en tus rutas
import Home from './App.vue';
// import Blog from './components/Home.vue';

const routes = [
  { path: '/', component: Home },
//   { path: '/about', component: Blog }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;