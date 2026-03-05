<template>
  <section id="trayectoria" class="bg-gray-soft">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-start">

        <div>
          <h2 v-bind="reveal({ direction: 'left' })" class="section-title">Trayectoria profesional</h2>
          <p v-bind="reveal({ direction: 'left', delay: 100 })" class="section-subtitle mt-6">
            Una carrera construida con dedicación, formación constante
            y el compromiso de servir a cada cliente con excelencia.
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Línea vertical -->
          <div class="absolute left-5 top-2 bottom-2 w-0.5 bg-gray-200"></div>

          <div class="space-y-8">
            <TimelineItem
              v-for="(hito, i) in hitos"
              :key="hito.anio"
              v-bind="{ ...hito, delay: i * 120 }"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { reveal } = useScrollReveal()

const hitos = [
  {
    anio: '2013',
    titulo: 'Titulación como Abogado',
    descripcion:
      'Titulado de la Facultad de Derecho de la Universidad de Chile. ' +
      'Memoria de grado en Derecho Civil con distinción máxima.',
  },
  {
    anio: '2013 - 2016',
    titulo: 'Ejercicio en estudio jurídico',
    descripcion:
      'Abogado asociado en Estudio Jurídico Morales & Asociados, ' +
      'especializándose en derecho civil y contractual.',
  },
  {
    anio: '2017',
    titulo: 'Diplomado en Derecho Laboral',
    descripcion:
      'Diplomado en Derecho del Trabajo y Seguridad Social, ' +
      'Pontificia Universidad Católica de Chile.',
  },
  {
    anio: '2018 - 2021',
    titulo: 'Defensor penal licitado',
    descripcion:
      'Ejercicio como defensor penal licitado en la Defensoría Penal Pública, ' +
      'con más de 200 causas tramitadas en juzgados de garantía y tribunales de juicio oral.',
  },
  {
    anio: '2022 - Presente',
    titulo: 'Ejercicio libre de la profesión',
    descripcion:
      'Estudio jurídico propio con foco en atención personalizada. ' +
      'Más de 150 clientes atendidos en materias civiles, laborales y penales.',
  },
]
</script>
