<template>
  <footer class="bg-black dark:bg-gray-950 border-t border-gray-900 py-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">

        <!-- Identidad -->
        <div>
          <p class="font-bold text-white">Rodrigo Fernández Salinas</p>
          <p class="text-gray-500 text-sm mt-0.5">
            Abogado · Mat. N° 12.345-7 · Colegio de Abogados de Chile A.G.
          </p>
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/tu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-3 text-gray-500 hover:text-accent
                   transition-colors duration-200 text-sm group"
          >
            <!-- LinkedIn SVG -->
            <svg viewBox="0 0 24 24" class="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span class="group-hover:underline">LinkedIn</span>
          </a>
        </div>

        <!-- Links -->
        <nav class="flex gap-6 text-sm text-gray-500">
          <a href="#sobre-mi"    class="hover:text-white transition-colors">Sobre mí</a>
          <a href="#areas"          class="hover:text-white transition-colors">Servicios</a>
          <a href="#como-funciona"  class="hover:text-white transition-colors">¿Cómo funciona?</a>
          <a href="#trayectoria"    class="hover:text-white transition-colors">Trayectoria</a>
          <a href="#articulos"   class="hover:text-white transition-colors">Artículos</a>
          <a href="#contacto"    class="hover:text-white transition-colors">Contacto</a>
        </nav>

        <!-- Copyright -->
        <p class="text-gray-600 text-xs text-center md:text-right">
          &copy; {{ currentYear }} Rodrigo Fernández Abogado.<br>
          Todos los derechos reservados.
        </p>

      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
