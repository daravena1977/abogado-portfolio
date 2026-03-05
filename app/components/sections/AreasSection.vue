<template>
  <section id="areas" class="bg-white">
    <div class="section-container">
      <div class="text-center mb-14">
        <h2 v-bind="reveal()" class="section-title inline-block">Áreas de práctica</h2>
        <p v-bind="reveal({ delay: 100 })" class="section-subtitle mx-auto mt-6">
          Asesoría especializada en las materias jurídicas más demandadas en Chile,
          con enfoque práctico y soluciones reales para cada situación.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <AreaCard
          v-for="(area, i) in areas"
          :key="area.titulo"
          v-bind="{ ...area, delay: i * 150 }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { reveal } = useScrollReveal()

const areas = [
  {
    icono: 'heroicons:home-modern',
    titulo: 'Derecho Civil',
    descripcion:
      'Redacción y revisión de contratos, responsabilidad civil, arrendamientos, ' +
      'acciones posesorias, sucesiones y herencias, y gestiones ante el Conservador de Bienes Raíces.',
  },
  {
    icono: 'heroicons:briefcase',
    titulo: 'Derecho Laboral',
    descripcion:
      'Defensa en despidos injustificados y tutela de derechos fundamentales, ' +
      'negociación de finiquitos, accidentes del trabajo y asesoría integral a trabajadores y empleadores.',
  },
  {
    icono: 'heroicons:scale',
    titulo: 'Derecho Penal',
    descripcion:
      'Defensa penal en todas las etapas del proceso, representación en delitos económicos, ' +
      'delitos informáticos, violencia intrafamiliar, y recursos de amparo y protección.',
  },
]
</script>
