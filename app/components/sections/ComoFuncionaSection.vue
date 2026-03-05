<template>
  <section id="como-funciona" class="bg-gray-soft dark:bg-gray-950">
    <div class="section-container">

      <!-- Encabezado -->
      <div class="text-center mb-16">
        <h2 v-bind="reveal()" class="section-title inline-block">¿Cómo funciona?</h2>
        <p v-bind="reveal({ delay: 100 })" class="section-subtitle mx-auto mt-6">
          Contratar un abogado es más simple de lo que parece.
          Así es el proceso desde el primer contacto hasta la resolución de su caso.
        </p>
      </div>

      <!-- Pasos -->
      <div class="relative">

        <!-- Línea conectora (solo desktop) -->
        <div class="hidden lg:block absolute top-14 left-1/2 -translate-x-1/2 w-2/3 h-0.5
                    bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

        <div class="grid md:grid-cols-3 gap-10 lg:gap-16">
          <div
            v-for="(paso, i) in pasos"
            :key="paso.numero"
            v-bind="reveal({ delay: i * 150 })"
            class="flex flex-col items-center text-center"
          >
            <!-- Número / ícono -->
            <div class="relative mb-6">
              <!-- Círculo exterior decorativo -->
              <div class="w-28 h-28 rounded-full bg-accent/10 dark:bg-accent/20
                          flex items-center justify-center">
                <!-- Círculo interior -->
                <div class="w-20 h-20 rounded-full bg-accent flex items-center
                            justify-center shadow-lg shadow-accent/30">
                  <Icon :name="paso.icono" size="32" class="text-white" />
                </div>
              </div>
              <!-- Badge con número -->
              <span class="absolute -top-1 -right-1 w-7 h-7 bg-primary dark:bg-gray-800
                           text-white text-xs font-bold rounded-full
                           flex items-center justify-center border-2 border-white dark:border-gray-900">
                {{ paso.numero }}
              </span>
            </div>

            <!-- Texto -->
            <h3 class="text-xl font-bold text-primary dark:text-gray-100 mb-3">
              {{ paso.titulo }}
            </h3>
            <p class="text-text-muted dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              {{ paso.descripcion }}
            </p>

            <!-- Detalle adicional -->
            <div class="mt-5 inline-flex items-center gap-2 bg-white dark:bg-gray-800
                        border border-gray-100 dark:border-gray-700
                        rounded-full px-4 py-1.5 shadow-sm">
              <Icon name="heroicons:check-circle" size="15" class="text-accent shrink-0" />
              <span class="text-xs font-medium text-text-muted dark:text-gray-400">
                {{ paso.detalle }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div v-bind="reveal({ delay: 300 })" class="text-center mt-16">
        <a :href="whatsAppUrl" target="_blank" rel="noopener noreferrer" class="btn-primary">
          <Icon name="heroicons:chat-bubble-left-ellipsis" size="20" />
          Iniciar con una consulta gratuita
        </a>
        <p class="text-text-muted dark:text-gray-500 text-xs mt-3">
          Sin compromiso · Respuesta en menos de 24 horas
        </p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { reveal } = useScrollReveal()
const { getWhatsAppUrl } = useWhatsApp()
const whatsAppUrl = getWhatsAppUrl('Hola, me gustaría agendar una consulta legal gratuita.')

const pasos = [
  {
    numero: '1',
    icono: 'heroicons:chat-bubble-left-right',
    titulo: 'Consulta inicial',
    descripcion:
      'Contáctese por WhatsApp, teléfono o formulario. Cuénteme brevemente su situación ' +
      'y coordinaremos una reunión presencial o por videollamada sin costo.',
    detalle: 'Primera consulta gratuita',
  },
  {
    numero: '2',
    icono: 'heroicons:magnifying-glass',
    titulo: 'Diagnóstico legal',
    descripcion:
      'Analizo en detalle su caso, reviso los antecedentes y le explico con claridad ' +
      'cuáles son sus opciones, los plazos y las probabilidades de éxito.',
    detalle: 'Evaluación clara y honesta',
  },
  {
    numero: '3',
    icono: 'heroicons:shield-check',
    titulo: 'Representación',
    descripcion:
      'Me hago cargo de todo el proceso legal: redacción de documentos, presentación ' +
      'de demandas, audiencias y negociaciones, manteniéndole informado en cada etapa.',
    detalle: 'Acompañamiento en todo el proceso',
  },
]
</script>
