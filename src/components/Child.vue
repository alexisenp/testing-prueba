<template>
    <div>
      <!-- Título del componente -->
      <h2>Child Component</h2>
  
      <!-- Campo de entrada para escribir un mensaje -->
      <!-- Utilizamos v-model para enlazar el valor del input con la propiedad 'mensaje' del componente -->
      <input v-model="mensaje" type="text" placeholder="Escribe un mensaje" />
  
      <!-- Botón para enviar el mensaje -->
      <!-- Al hacer clic en el botón, se llama al método 'enviarMensaje' -->
      <button @click="enviarMensaje">Enviar Mensaje</button>
    </div>
  </template>
  
  <script>
  export default {
    // Definición del estado local del componente
    data() {
      return {
        mensaje: '' // Variable para almacenar el mensaje ingresado por el usuario
      };
    },
    methods: {
      // Método para enviar el mensaje
      enviarMensaje() {
        // Emite un evento personalizado llamado 'mensaje-enviado' con el valor del mensaje ingresado
        this.$emit('mensaje-enviado', this.mensaje);
      }
    }
  };
  </script>
  