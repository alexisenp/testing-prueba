// Importar la función para crear la store desde Vuex
import { createStore } from 'vuex';
// Importar la configuración del store desde el archivo correspondiente
import storeConfig from '@/store';

// Definir la suite de pruebas para la Vuex Store - Contador
describe('Vuex Store - Contador', () => {
    let store;

    // Ejecutar antes de cada prueba
    beforeEach(() => {
        // Crear una nueva instancia del store usando la configuración existente
        store = storeConfig;
    });

    // Prueba 1: Verificar que el valor inicial del contador sea 0
    it('debería tener un valor inicial de contador igual a 0', () => {
        // Esperar que el valor inicial del estado del contador sea 0
        expect(store.state.contador).toBe(0);
    });

    // Prueba 2: Verificar la funcionalidad de incremento del contador
    it('debería incrementar el valor del contador', () => {
        // Llamar a la mutación 'increment' para incrementar el contador
        store.commit('increment');
        // Esperar que el valor del contador sea 1 después de incrementarlo
        expect(store.state.contador).toBe(1);
        store.commit('decrement');
    });

    // Prueba 3: Verificar la funcionalidad de decremento del contador
    it('debería decrementar el valor del contador', () => {
        // Incrementar el valor del contador primero para que sea 1
        store.commit('increment');
        // Decrementar el valor del contador
        store.commit('decrement');
        // Esperar que el valor del contador sea 0 después de incrementarlo y luego decrementar
        expect(store.state.contador).toBe(0);
    });
});
