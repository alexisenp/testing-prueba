// src/router/index.js

// Importar las funciones necesarias para crear el router
import { createRouter, createWebHistory } from 'vue-router';

// Importar las vistas que se utilizarán en las rutas
import Ejercicio1 from '@/views/Ejercicio1.vue';
import Ejercicio2 from '@/views/Ejercicio2.vue';
import Ejercicio3 from '@/views/Ejercicio3.vue';

// Definir las rutas de la aplicación
const routes = [
  {
    path: '/',
    redirect: '/ejercicio1' // Redirigir a '/ejercicio1' cuando el usuario acceda a la raíz
  },
  {
    path: '/ejercicio1',       // URL que se muestra en el navegador para acceder a esta ruta
    name: 'Ejercicio1',        // Nombre identificador de la ruta
    component: Ejercicio1      // Componente que se carga cuando se accede a esta ruta
  },
  {
    path: '/ejercicio2',
    name: 'Ejercicio2',
    component: Ejercicio2
  },
  {
    path: '/ejercicio3',
    name: 'Ejercicio3',
    component: Ejercicio3
  }
];

// Crear la instancia del router
const router = createRouter({
  history: createWebHistory(), // Utilizar el modo de historial HTML5 para la navegación
  routes                         // Pasar la lista de rutas definidas
});

// Exportar la instancia del router para usarla en la aplicación principal
export default router;
