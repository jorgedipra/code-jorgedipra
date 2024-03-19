import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa las rutas desde router.js
import '@fortawesome/fontawesome-free/css/all.css';
import Buefy from '@ntohq/buefy-next'; // Importa Buefy desde el paquete instalado https://buefy.org/
import '@ntohq/buefy-next/dist/buefy.css'; // Importa los estilos de Buefy

createApp(App)
    .use(router) // Usa las rutas en la aplicación Vue
    .use(Buefy)
    .mount('#app');