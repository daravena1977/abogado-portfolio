<template>
  <div v-bind="reveal({ direction: 'right', delay })" class="relative flex gap-6 pl-14">
    <!-- Punto del timeline -->
    <div class="absolute left-0 w-10 h-10 bg-accent rounded-full
                flex items-center justify-center shrink-0 shadow-md shadow-accent/20">
      <Icon name="heroicons:check" size="18" class="text-white" />
    </div>

    <!-- Contenido -->
    <div class="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1">
      <span class="inline-block text-accent text-xs font-bold tracking-wider
                   uppercase bg-accent-light px-2 py-1 rounded mb-3">
        {{ anio }}
      </span>
      <h4 class="font-bold text-primary mb-1.5">{{ titulo }}</h4>
      <p class="text-text-muted text-sm leading-relaxed">{{ descripcion }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { reveal } = useScrollReveal()

defineProps<{
  anio: string
  titulo: string
  descripcion: string
  delay?: number
}>()
</script>
