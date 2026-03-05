import { resolve } from 'path'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
    preload: true,
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Rodrigo Fernández Abogado - Derecho Civil, Laboral y Penal en Chile',
      htmlAttrs: { lang: 'es' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Abogado titulado en Chile con más de 10 años de experiencia en Derecho Civil, Laboral y Penal. Atención personalizada, resultados concretos. Primera consulta sin costo.',
        },
        { name: 'theme-color', content: '#111111' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es_CL' },
        {
          property: 'og:title',
          content: 'Rodrigo Fernández Abogado - Derecho Civil, Laboral y Penal en Chile',
        },
        {
          property: 'og:description',
          content:
            'Abogado con más de 10 años de experiencia. Primera consulta sin costo. Atención en Santiago de Chile.',
        },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  components: [
    {
      path: resolve(__dirname, 'app/components'),
      pathPrefix: false,
    },
  ],

  nitro: {
    preset: 'static',
  },
})
