<template>
  <section id="sobre-mi" class="bg-gray-soft">
    <div class="section-container">
      <div class="grid lg:grid-cols-5 gap-16 items-start">

        <!-- Foto + credenciales -->
        <div class="lg:col-span-2 flex flex-col items-center lg:items-start gap-6">
          <div
            v-bind="reveal({ direction: 'left' })"
            class="w-56 h-64 sm:w-64 sm:h-72 bg-gray-200 rounded-2xl
                   flex items-center justify-center overflow-hidden"
          >
            <Icon name="heroicons:user" size="64" class="text-gray-400" />
          </div>
          <div
            v-bind="reveal({ direction: 'left', delay: 150 })"
            class="w-full bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
          >
            <p class="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
              Habilitación profesional
            </p>
            <p class="text-primary font-bold">Rodrigo Fernández Salinas</p>
            <p class="text-accent font-semibold text-sm">Matrícula N° 12.345-7</p>
            <p class="text-text-muted text-sm mt-1">Colegio de Abogados de Chile A.G.</p>
            <p class="text-text-muted text-sm">Titulado Universidad de Chile · 2013</p>
          </div>
        </div>

        <!-- Texto -->
        <div class="lg:col-span-3">
          <h2 v-bind="reveal()" class="section-title">Sobre mí</h2>
          <div v-bind="reveal({ delay: 100 })" class="space-y-4 text-gray-700 leading-relaxed mb-10 mt-6">
            <p>
              Soy abogado titulado de la Universidad de Chile, con más de 10 años de
              trayectoria en el ejercicio libre de la profesión. A lo largo de mi carrera
              he representado a personas naturales y empresas en materias civiles,
              laborales y penales, siempre con un enfoque orientado al resultado y al
              acompañamiento cercano del cliente.
            </p>
            <p>
              Mi compromiso es brindar una asesoría legal clara y comprensible, sin
              tecnicismos innecesarios, para que cada cliente pueda tomar decisiones
              informadas sobre su situación jurídica. Creo que el acceso a una buena
              defensa legal es un derecho fundamental de toda persona.
            </p>
          </div>

          <!-- Valores -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div
              v-for="(valor, i) in valores"
              :key="valor.titulo"
              v-bind="reveal({ delay: 150 + i * 100 })"
              class="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div class="w-10 h-10 bg-accent-light rounded-lg flex items-center
                          justify-center shrink-0">
                <Icon :name="valor.icono" size="20" class="text-accent" />
              </div>
              <div>
                <p class="font-semibold text-primary text-sm">{{ valor.titulo }}</p>
                <p class="text-text-muted text-sm mt-0.5">{{ valor.descripcion }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { reveal } = useScrollReveal()

const valores = [
  {
    icono: 'heroicons:shield-check',
    titulo: 'Confidencialidad absoluta',
    descripcion: 'Toda información es tratada con estricta reserva profesional.',
  },
  {
    icono: 'heroicons:clock',
    titulo: 'Respuesta oportuna',
    descripcion: 'Atención dentro de las 24 horas hábiles siguientes.',
  },
  {
    icono: 'heroicons:academic-cap',
    titulo: 'Rigor técnico-jurídico',
    descripcion: 'Actualización permanente en legislación y jurisprudencia chilena.',
  },
  {
    icono: 'heroicons:hand-raised',
    titulo: 'Ética profesional',
    descripcion: 'Actuación transparente y honesta en cada etapa del proceso.',
  },
]
</script>
