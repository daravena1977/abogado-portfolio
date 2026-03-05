<template>
  <section id="articulos" class="bg-white">
    <div class="section-container">

      <!-- Encabezado -->
      <div class="mb-10">
        <h2 v-bind="reveal()" class="section-title">Artículos legales</h2>
        <p v-bind="reveal({ delay: 100 })" class="section-subtitle mt-4">
          Información jurídica práctica para que conozca sus derechos
          antes de enfrentar cualquier situación legal.
        </p>
      </div>

      <!-- Filtros -->
      <div v-bind="reveal({ delay: 150 })" class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="f in filtros"
          :key="f.valor"
          @click="filtroActivo = f.valor"
          class="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          :class="filtroActivo === f.valor
            ? 'bg-accent text-white shadow-md shadow-accent/20'
            : 'bg-gray-100 text-text-muted hover:bg-gray-200'"
        >
          {{ f.label }}
          <span
            class="ml-1.5 text-xs font-bold opacity-70"
          >{{ contarPorFiltro(f.valor) }}</span>
        </button>
      </div>

      <!-- Grid de artículos -->
      <TransitionGroup
        name="cards"
        tag="div"
        class="grid md:grid-cols-3 gap-8"
      >
        <article
          v-for="articulo in articulosFiltrados"
          :key="articulo.titulo"
          class="group flex flex-col bg-white border border-gray-100 rounded-2xl
                 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Barra de color de categoría -->
          <div class="h-1.5 w-full" :class="articulo.color"></div>

          <div class="flex flex-col flex-1 p-7">
            <!-- Categoría -->
            <span
              class="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1
                     rounded-full w-fit mb-4"
              :class="articulo.badgeClass"
            >
              {{ articulo.categoria }}
            </span>

            <!-- Título -->
            <h3 class="text-lg font-bold text-primary leading-snug mb-3
                       group-hover:text-accent transition-colors duration-200">
              {{ articulo.titulo }}
            </h3>

            <!-- Extracto -->
            <p class="text-text-muted text-sm leading-relaxed flex-1">
              {{ articulo.extracto }}
            </p>

            <!-- Footer del card -->
            <div class="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
              <span class="text-xs text-text-muted">{{ articulo.fecha }}</span>
              <a
                href="#contacto"
                class="inline-flex items-center gap-1 text-accent text-sm font-semibold
                       hover:gap-2 transition-all duration-200"
              >
                Consultar
                <Icon name="heroicons:arrow-right" size="15" />
              </a>
            </div>
          </div>
        </article>
      </TransitionGroup>

      <!-- Estado vacío (no debería ocurrir con los datos actuales) -->
      <div v-if="articulosFiltrados.length === 0" class="text-center py-16">
        <p class="text-text-muted">No hay artículos en esta categoría aún.</p>
      </div>

      <!-- CTA inferior -->
      <div class="text-center mt-14">
        <p class="text-text-muted text-sm">¿Tiene una consulta específica sobre su situación?</p>
        <a href="#contacto" class="btn-primary mt-4 inline-flex">
          Consultar ahora sin costo
        </a>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { reveal } = useScrollReveal()

const filtroActivo = ref('todos')

const filtros = [
  { valor: 'todos',           label: 'Todos' },
  { valor: 'Derecho Civil',   label: 'Civil' },
  { valor: 'Derecho Laboral', label: 'Laboral' },
  { valor: 'Derecho Penal',   label: 'Penal' },
]

const articulos = [
  {
    categoria: 'Derecho Laboral',
    color: 'bg-blue-500',
    badgeClass: 'bg-blue-50 text-blue-700',
    titulo: '¿Me pueden despedir sin causa? Lo que dice la ley chilena',
    extracto:
      'El despido injustificado es una de las consultas más frecuentes. En Chile, ' +
      'el empleador puede poner término al contrato por necesidades de la empresa, ' +
      'pero debe pagar las indemnizaciones correspondientes. Conozca sus derechos.',
    fecha: 'Enero 2025',
  },
  {
    categoria: 'Derecho Penal',
    color: 'bg-red-500',
    badgeClass: 'bg-red-50 text-red-700',
    titulo: 'Fui citado a declarar: ¿debo ir y qué puedo decir?',
    extracto:
      'Recibir una citación policial o del Ministerio Público genera mucha incertidumbre. ' +
      'Es fundamental saber qué tipo de citación es, cuáles son sus derechos y ' +
      'cuándo es indispensable contar con un abogado defensor antes de declarar.',
    fecha: 'Febrero 2025',
  },
  {
    categoria: 'Derecho Civil',
    color: 'bg-green-500',
    badgeClass: 'bg-green-50 text-green-700',
    titulo: 'Arrendatario no paga: pasos para recuperar su propiedad',
    extracto:
      'El juicio de arrendamiento en Chile puede resolverse más rápido de lo que cree. ' +
      'Existen procedimientos especiales para el cobro de rentas y la restitución del ' +
      'inmueble. Le explicamos el proceso paso a paso.',
    fecha: 'Marzo 2025',
  },
  {
    categoria: 'Derecho Laboral',
    color: 'bg-blue-500',
    badgeClass: 'bg-blue-50 text-blue-700',
    titulo: 'Accidente en el trabajo: ¿qué derechos tiene el trabajador?',
    extracto:
      'Un accidente laboral activa una serie de derechos y obligaciones para ambas partes. ' +
      'Desde la denuncia ante la mutual hasta la posible demanda por responsabilidad ' +
      'del empleador, conozca cada paso del proceso.',
    fecha: 'Abril 2025',
  },
  {
    categoria: 'Derecho Penal',
    color: 'bg-red-500',
    badgeClass: 'bg-red-50 text-red-700',
    titulo: 'Delitos informáticos en Chile: qué dice la ley y cómo defenderse',
    extracto:
      'La Ley N° 21.459 amplió el catálogo de delitos informáticos en Chile. ' +
      'Desde el acceso no autorizado hasta el fraude digital, explicamos ' +
      'los tipos penales y cómo ejercer una defensa efectiva.',
    fecha: 'Mayo 2025',
  },
  {
    categoria: 'Derecho Civil',
    color: 'bg-green-500',
    badgeClass: 'bg-green-50 text-green-700',
    titulo: 'Herencia en Chile: cómo funciona la posesión efectiva',
    extracto:
      'Cuando fallece un familiar, el primer paso legal es tramitar la posesión efectiva. ' +
      'Le explicamos quiénes son herederos, cómo se distribuyen los bienes y ' +
      'en qué casos es necesario un abogado para el proceso.',
    fecha: 'Junio 2025',
  },
]

const articulosFiltrados = computed(() =>
  filtroActivo.value === 'todos'
    ? articulos
    : articulos.filter(a => a.categoria === filtroActivo.value),
)

const contarPorFiltro = (filtro: string) =>
  filtro === 'todos'
    ? articulos.length
    : articulos.filter(a => a.categoria === filtro).length
</script>

<style scoped>
.cards-enter-active,
.cards-leave-active {
  transition: all 0.3s ease;
}
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
.cards-leave-active {
  position: absolute;
}
</style>
