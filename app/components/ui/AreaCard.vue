<template>
  <article
    v-bind="reveal({ delay })"
    class="group relative bg-white border border-gray-100 rounded-2xl p-8
           shadow-sm hover:shadow-xl hover:-translate-y-1
           transition-all duration-300 overflow-hidden"
  >
    <!-- Borde superior con acento al hover -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-accent
                scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                origin-left rounded-t-2xl"></div>

    <!-- Ícono -->
    <div class="w-14 h-14 bg-accent-light rounded-xl flex items-center justify-center mb-6">
      <Icon :name="icono" size="28" class="text-accent" />
    </div>

    <!-- Contenido -->
    <h3 class="text-xl font-bold text-primary mb-3">{{ titulo }}</h3>
    <p class="text-text-muted leading-relaxed text-sm">{{ descripcion }}</p>

    <!-- CTA -->
    <a
      href="#contacto"
      class="inline-flex items-center gap-1 text-accent font-semibold text-sm mt-6
             hover:gap-2 transition-all"
    >
      Consultar ahora
      <Icon name="heroicons:arrow-right" size="16" />
    </a>
  </article>
</template>

<script setup lang="ts">
const { reveal } = useScrollReveal()

defineProps<{
  icono: string
  titulo: string
  descripcion: string
  delay?: number
}>()
</script>
