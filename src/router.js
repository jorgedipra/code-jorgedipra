import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/SeccionHome.vue'; // Importa el componente de la página principal
import Contacto from './views/SeccionContacto.vue'; // Importa el componente de contacto


const routes = [
  { path: '/', name: 'home', component: Home }, // Ruta para la página principal
  { path: '/contacto', name: 'contacto', component: Contacto } // Ruta para la página de contacto
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
