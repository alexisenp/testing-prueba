<template>
    <div>
      <!-- Título del componente -->
      <h2>Parent Component</h2>
  
      <!-- Mostrar el mensaje recibido del componente Child -->
      <p>Mensaje recibido: {{ mensaje }}</p>
  
      <!-- Incluir el componente Child -->
      <!-- Escuchar el evento 'mensaje-enviado' emitido por Child y llamar al método 'actualizarMensaje' -->
      <Child @mensaje-enviado="actualizarMensaje" />
    </div>
  </template>
  
  <script>
  import Child from '@/components/Child.vue'; // Importar el componente hijo
  
  export default {
    // Registrar el componente Child para usarlo en el template
    components: {
      Child
    },
    // Definir el estado local del componente Parent
    data() {
      return {
        mensaje: '' // Variable para almacenar el mensaje recibido del componente Child
      };
    },
    methods: {
      // Método para actualizar el mensaje
      // Se llama cuando el evento 'mensaje-enviado' es emitido por el componente Child
      actualizarMensaje(mensaje) {
        this.mensaje = mensaje; // Actualiza el mensaje recibido y lo muestra en el componente Parent
      }
    }
  };
  </script>
  