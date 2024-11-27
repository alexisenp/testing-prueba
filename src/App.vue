<template>
  <div id="app">
    <!-- Barra de navegación de Bootstrap -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!-- Marca o título de la aplicación -->
        <a class="navbar-brand" href="#">Ejercicios Vue</a>
        <div class="collapse navbar-collapse">
          <!-- Lista de navegación -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- Enlace a la ruta de Ejercicio 1 -->
            <li class="nav-item">
              <router-link to="/ejercicio1" class="nav-link">Ejercicio 1</router-link>
            </li>
            <!-- Enlace a la ruta de Ejercicio 2 -->
            <li class="nav-item">
              <router-link to="/ejercicio2" class="nav-link">Ejercicio 2</router-link>
            </li>
            <!-- Enlace a la ruta de Ejercicio 3 -->
            <li class="nav-item">
              <router-link to="/ejercicio3" class="nav-link">Ejercicio 3</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Vista del componente dinámico según la ruta -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App', // Nombre del componente principal
};
</script>

<style>
/* Importar los estilos de Bootstrap */
@import '~bootstrap/dist/css/bootstrap.min.css';
</style>
