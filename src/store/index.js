// Importar la función para crear una instancia de la store desde Vuex
import { createStore } from 'vuex';

// Crear y exportar la instancia de la store
export default createStore({
    // Definición del estado global de la aplicación
    state: {
        contador: 0, // Inicializamos el contador en 0
    },
    // Mutaciones: funciones síncronas que modifican el estado
    mutations: {
        // Mutación para incrementar el valor del contador
        increment(state) {
            state.contador++; // Incrementa el valor de 'contador' en 1
        },
        // Mutación para decrementar el valor del contador
        decrement(state) {
            state.contador--; // Decrementa el valor de 'contador' en 1
        },
    },
    // Acciones: funciones que pueden ser asíncronas y que disparan mutaciones
    actions: {
        // Acción para despachar la mutación 'increment'
        incrementar({ commit }) {
            commit('increment'); // Llama a la mutación 'increment' para modificar el estado
        },
        // Acción para despachar la mutación 'decrement'
        decrementar({ commit }) {
            commit('decrement'); // Llama a la mutación 'decrement' para modificar el estado
        },
    },
    // Getters: funciones que obtienen datos del estado y permiten accederlos fácilmente
    getters: {
        // Getter para obtener el valor actual del contador
        contador: (state) => {
            return state.contador; // Devuelve el valor del contador desde el estado
        },
    },
});
