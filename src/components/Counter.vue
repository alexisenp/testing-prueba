<template>
    <div class="counter">
      <!-- Título del componente -->
      <h2>Ejercicio 1 - Contador con Vuex</h2>
  
      <!-- Mostrar el valor actual del contador -->
      <!-- El valor es obtenido del getter 'contador' de la store de Vuex -->
      <p>Valor del contador: {{ contador }}</p>
  
      <!-- Botón para incrementar el valor del contador -->
      <!-- Al hacer clic, se llama al método 'incrementar' -->
      <button @click="incrementar" class="btn btn-primary">Incrementar</button>
  
      <!-- Botón para decrementar el valor del contador -->
      <!-- Al hacer clic, se llama al método 'decrementar' -->
      <button @click="decrementar" class="btn btn-danger">Decrementar</button>
    </div>
  </template>
  
  <script>
  export default {
    // Computed properties para obtener datos del store
    computed: {
      // Getter para obtener el valor del contador desde Vuex
      contador() {
        return this.$store.getters.contador; // Se usa el getter 'contador' para acceder al valor del contador almacenado en la store
      }
    },
    methods: {
      // Método para incrementar el contador
      incrementar() {
        // Despacha la acción 'incrementar' de Vuex para incrementar el valor del contador
        this.$store.dispatch('incrementar');
      },
      // Método para decrementar el contador
      decrementar() {
        // Despacha la acción 'decrementar' de Vuex para decrementar el valor del contador
        this.$store.dispatch('decrementar');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para el componente */
  .counter {
    text-align: center; /* Centra el contenido del componente */
    margin-top: 20px;   /* Añade un margen superior */
  }
  </style>
  