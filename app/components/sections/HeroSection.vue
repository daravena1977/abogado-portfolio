<template>
  <section id="inicio" class="min-h-screen bg-primary flex items-center pt-20">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-center">

        <!-- Columna texto -->
        <div class="order-2 lg:order-1 animate-fade-up">

          <!-- Credencial -->
          <div class="inline-flex items-center gap-2 bg-accent/10 border border-accent/20
                      rounded-full px-4 py-1.5 mb-8">
            <span class="w-2 h-2 bg-accent rounded-full shrink-0"></span>
            <span class="text-accent text-sm font-medium">
              Abogado habilitado · Colegio de Abogados de Chile
            </span>
          </div>

          <!-- Headline -->
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white
                     leading-tight mb-6">
            Defensa legal con
            <span class="text-accent"> compromiso</span>
            y resultados
          </h1>

          <!-- Tagline -->
          <p class="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Más de 10 años representando a personas y empresas en Chile.
            Soluciones jurídicas claras, estratégicas y a su medida.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4">
            <a
              :href="whatsAppUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              <Icon name="heroicons:chat-bubble-left-ellipsis" size="20" />
              Escribir por WhatsApp
            </a>
            <a
              href="#contacto"
              class="btn-outline border-white text-white hover:bg-white hover:text-primary"
            >
              Agendar consulta
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-gray-800">
            <div v-for="stat in stats" :key="stat.label">
              <p class="text-3xl font-extrabold text-white">{{ stat.value }}</p>
              <p class="text-sm text-gray-500 mt-1">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Columna foto -->
        <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div class="relative">
            <!-- Decoración geométrica -->
            <div class="absolute -top-4 -right-4 w-full h-full
                        border-2 border-accent/30 rounded-2xl pointer-events-none"></div>
            <!-- Foto placeholder -->
            <div class="relative w-72 h-96 sm:w-80 sm:h-[26rem] lg:w-96 lg:h-[30rem]
                        bg-gray-800 rounded-2xl overflow-hidden">
              <div class="absolute inset-0 flex flex-col items-center justify-center
                          bg-gradient-to-br from-gray-800 to-gray-900">
                <Icon name="heroicons:user" size="80" class="text-gray-600" />
                <p class="text-gray-600 text-sm mt-3">Foto profesional</p>
              </div>
              <!-- Badge matrícula -->
              <div class="absolute bottom-4 left-4 right-4
                          bg-primary/90 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
                <p class="text-white font-bold text-sm">Rodrigo Fernández Salinas</p>
                <p class="text-accent text-xs mt-0.5">Abogado · Mat. N° 12.345-7</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { getWhatsAppUrl } = useWhatsApp()
const whatsAppUrl = getWhatsAppUrl(
  'Hola, me gustaría agendar una consulta legal gratuita.'
)

const stats = [
  { value: '+10', label: 'Años de experiencia' },
  { value: '+500', label: 'Casos resueltos' },
  { value: '3', label: 'Áreas de práctica' },
]
</script>
