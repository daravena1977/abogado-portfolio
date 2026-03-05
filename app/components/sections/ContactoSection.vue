<template>
  <section id="contacto" class="bg-primary">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16">

        <!-- Datos de contacto -->
        <div>
          <h2 v-bind="reveal({ direction: 'left' })" class="section-title text-white">
            Hablemos de su caso
          </h2>
          <p v-bind="reveal({ direction: 'left', delay: 100 })" class="text-gray-400 mt-6 mb-10 leading-relaxed">
            La primera consulta es sin costo ni compromiso. Cuénteme su situación
            y encontraremos juntos la mejor solución legal.
          </p>

          <div class="space-y-6">
            <a
              v-for="(dato, i) in datosContacto"
              :key="dato.label"
              v-bind="{ ...reveal({ direction: 'left', delay: 200 + i * 100 }), href: dato.href, target: dato.external ? '_blank' : undefined, rel: dato.external ? 'noopener noreferrer' : undefined }"
              class="flex items-center gap-4 group"
            >
              <div class="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl
                          flex items-center justify-center shrink-0
                          group-hover:bg-accent transition-colors duration-200">
                <Icon :name="dato.icono" size="20"
                      class="text-accent group-hover:text-white transition-colors" />
              </div>
              <div>
                <p class="text-gray-500 text-xs uppercase tracking-wider">{{ dato.label }}</p>
                <p class="text-white font-medium">{{ dato.valor }}</p>
              </div>
            </a>
          </div>
        </div>

        <!-- Formulario -->
        <div v-bind="reveal({ direction: 'right', delay: 150 })">
          <ContactForm />
        </div>

      </div>

      <!-- Mapa -->
      <div v-bind="reveal({ delay: 200 })" class="mt-16">
        <div class="flex items-center gap-3 mb-5">
          <div class="w-8 h-8 bg-accent/10 border border-accent/20 rounded-lg
                      flex items-center justify-center shrink-0">
            <Icon name="heroicons:map-pin" size="16" class="text-accent" />
          </div>
          <div>
            <p class="text-white font-semibold text-sm">Cómo llegar</p>
            <p class="text-gray-500 text-xs">Av. Providencia 1234, Of. 56, Santiago</p>
          </div>
          <a
            href="https://maps.google.com/?q=Av.+Providencia+1234,+Santiago,+Chile"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-auto inline-flex items-center gap-1.5 text-accent text-xs
                   font-semibold hover:underline shrink-0"
          >
            Abrir en Maps
            <Icon name="heroicons:arrow-top-right-on-square" size="13" />
          </a>
        </div>

        <!-- iframe embed -->
        <div class="rounded-2xl overflow-hidden border border-gray-800 h-72 lg:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.9!2d-70.6093!3d-33.4262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6b5b5b5b5b%3A0x0!2sAv.+Providencia+1234%2C+Providencia%2C+Santiago!5e0!3m2!1ses!2scl!4v1"
            width="100%"
            height="100%"
            style="border:0; filter: grayscale(20%) contrast(1.05);"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Ubicación oficina Rodrigo Fernández Abogado"
          ></iframe>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { reveal } = useScrollReveal()
const { getWhatsAppUrl } = useWhatsApp()

const datosContacto = [
  {
    icono: 'heroicons:phone',
    label: 'Teléfono / WhatsApp',
    valor: '+56 9 5165 5965',
    href: getWhatsAppUrl(),
    external: true,
  },
  {
    icono: 'heroicons:envelope',
    label: 'Correo electrónico',
    valor: 'contacto@rfernandezabogado.cl',
    href: 'mailto:contacto@rfernandezabogado.cl',
    external: false,
  },
  {
    icono: 'heroicons:map-pin',
    label: 'Dirección',
    valor: 'Av. Providencia 1234, Of. 56, Santiago',
    href: 'https://maps.google.com/?q=Av.+Providencia+1234,+Santiago,+Chile',
    external: true,
  },
  {
    icono: 'heroicons:clock',
    label: 'Horario de atención',
    valor: 'Lun. a Vie., 9:00 - 18:00 hrs.',
    href: '#contacto',
    external: false,
  },
]
</script>
