// Importar funciones para crear el router y el historial desde Vue Router
import { createRouter, createWebHistory } from 'vue-router';
// Importar la función para crear la store desde Vuex
import { createStore } from 'vuex';
// Importar utilidades de Vue Test Utils para montar los componentes
import { mount } from '@vue/test-utils';
// Importar el componente principal de la aplicación
import App from '@/App.vue';
// Importar las configuraciones del router y la store
import routerConfig from '@/router';
import storeConfig from '@/store';

// Definir la suite de pruebas para la navegación de rutas
describe('Navegación de rutas', () => {
    // Declarar las variables que se usarán en cada prueba
    let router, store, wrapper;

    // Ejecutar antes de cada prueba
    beforeEach(() => {
        // Crear una nueva instancia del router antes de cada prueba
        router = createRouter({
            history: createWebHistory(), // Usar el historial de HTML5 para la navegación
            routes: routerConfig.options.routes, // Acceder a las rutas definidas en la configuración del router
        });

        // Utilizar la configuración de la store ya existente
        store = storeConfig;

        // Montar el componente App antes de cada prueba
        wrapper = mount(App, {
            global: {
                plugins: [router, store], // Usar el router y la store como plugins globales en el componente
            },
        });
    });

    // Prueba 1: Verificar la vista de Ejercicio 2
    it('debería cargar la vista de Ejercicio 2 al navegar a /ejercicio2', async () => {
        // Navegar a la ruta '/ejercicio2'
        router.push('/ejercicio2');
        await router.isReady(); // Asegurarse de que el router esté listo

        // Verificar que el HTML de la vista contenga el texto esperado
        expect(wrapper.html()).toContain(
            'Ejercicio 2 - Navegación con Vue Router'
        );
    });

    // Prueba 2: Verificar la vista de Ejercicio 1
    it('debería cargar la vista de Ejercicio 1 al navegar a /ejercicio1', async () => {
        // Navegar a la ruta '/ejercicio1'
        router.push('/ejercicio1');
        await router.isReady();

        // Verificar que el HTML de la vista contenga el texto esperado
        expect(wrapper.html()).toContain('Ejercicio 1 - Contador con Vuex');
    });

    // Prueba 3: Verificar la vista de Ejercicio 3
    it('debería cargar la vista de Ejercicio 3 al navegar a /ejercicio3', async () => {
        // Navegar a la ruta '/ejercicio3'
        router.push('/ejercicio3');
        await router.isReady();

        // Verificar que el HTML de la vista contenga el texto esperado
        expect(wrapper.html()).toContain('Parent Component');
    });
});
