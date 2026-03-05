<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled
      ? 'bg-primary dark:bg-gray-900 shadow-lg py-3'
      : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-5'"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

      <!-- Logo / Nombre -->
      <a href="#inicio" class="flex items-center gap-3">
        <div class="w-9 h-9 bg-accent rounded-md flex items-center justify-center
                    font-bold text-white text-sm tracking-wider shrink-0">
          RF
        </div>
        <span class="font-bold text-lg text-primary dark:text-gray-100 transition-colors">
          Rodrigo Fernández
        </span>
      </a>

      <!-- Navegación desktop -->
      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-gray-700 dark:text-gray-300
                 hover:text-accent dark:hover:text-accent transition-colors"
        >
          {{ link.label }}
        </a>

        <!-- Toggle dark mode -->
        <button
          @click="toggle"
          class="w-9 h-9 rounded-lg flex items-center justify-center
                 text-gray-500 dark:text-gray-400
                 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
        >
          <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" size="18" />
        </button>

        <a href="#contacto" class="btn-primary text-sm py-2 px-5">
          Consulta Gratuita
        </a>
      </nav>

      <!-- Controles mobile -->
      <div class="md:hidden flex items-center gap-2">
        <!-- Toggle dark mode mobile -->
        <button
          @click="toggle"
          class="w-9 h-9 rounded-lg flex items-center justify-center
                 text-gray-500 dark:text-gray-400
                 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :aria-label="isDark ? 'Activar modo claro' : 'Activar modo oscuro'"
        >
          <Icon :name="isDark ? 'heroicons:sun' : 'heroicons:moon'" size="18" />
        </button>

        <button
          class="p-2 rounded-md text-primary dark:text-gray-300"
          @click="menuOpen = !menuOpen"
          aria-label="Abrir menú"
        >
          <Icon :name="menuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" size="24" />
        </button>
      </div>
    </div>

    <!-- Menú mobile -->
    <Transition name="slide-down">
      <div
        v-if="menuOpen"
        class="md:hidden bg-primary dark:bg-gray-900 border-t border-gray-800"
      >
        <nav class="flex flex-col px-4 py-4 gap-1">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-gray-300 hover:text-white py-3 text-sm font-medium
                   border-b border-gray-800 last:border-0 transition-colors"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
          <a
            href="#contacto"
            class="btn-primary mt-3 justify-center text-sm"
            @click="menuOpen = false"
          >
            Consulta Gratuita
          </a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const isScrolled = ref(false)
const menuOpen = ref(false)
const { isDark, toggle } = useDarkMode()

const navLinks = [
  { href: '#sobre-mi',    label: 'Sobre mí' },
  { href: '#areas',          label: 'Áreas de práctica' },
  { href: '#como-funciona',  label: '¿Cómo funciona?' },
  { href: '#trayectoria',    label: 'Trayectoria' },
  { href: '#articulos',   label: 'Artículos' },
  { href: '#contacto',    label: 'Contacto' },
]

onMounted(() => {
  const handler = () => { isScrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', handler, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handler))
})
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
