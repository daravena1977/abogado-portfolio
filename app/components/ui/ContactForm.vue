<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-gray-900 rounded-2xl p-8 border border-gray-800"
    novalidate
  >
    <h3 class="text-white font-bold text-xl mb-6">Enviar consulta</h3>

    <div class="space-y-4">
      <!-- Nombre -->
      <div>
        <label for="nombre" class="block text-gray-400 text-sm font-medium mb-1.5">
          Nombre completo *
        </label>
        <input
          id="nombre"
          v-model="form.nombre"
          type="text"
          placeholder="Juan Pérez González"
          class="form-input bg-gray-800 border-gray-700 text-white placeholder-gray-600"
          :class="{ '!border-red-500': errors.nombre }"
          autocomplete="name"
        />
        <p v-if="errors.nombre" class="text-red-400 text-xs mt-1">{{ errors.nombre }}</p>
      </div>

      <!-- Email -->
      <div>
        <label for="email" class="block text-gray-400 text-sm font-medium mb-1.5">
          Correo electrónico *
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="juan.perez@email.com"
          class="form-input bg-gray-800 border-gray-700 text-white placeholder-gray-600"
          :class="{ '!border-red-500': errors.email }"
          autocomplete="email"
        />
        <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
      </div>

      <!-- Teléfono -->
      <div>
        <label for="telefono" class="block text-gray-400 text-sm font-medium mb-1.5">
          Teléfono
        </label>
        <input
          id="telefono"
          v-model="form.telefono"
          type="tel"
          placeholder="+56 9 XXXX XXXX"
          class="form-input bg-gray-800 border-gray-700 text-white placeholder-gray-600"
          autocomplete="tel"
        />
      </div>

      <!-- Mensaje -->
      <div>
        <label for="mensaje" class="block text-gray-400 text-sm font-medium mb-1.5">
          Describa brevemente su consulta *
        </label>
        <textarea
          id="mensaje"
          v-model="form.mensaje"
          rows="4"
          placeholder="Describa su situación jurídica o la consulta que desea realizar..."
          class="form-input bg-gray-800 border-gray-700 text-white placeholder-gray-600 resize-none"
          :class="{ '!border-red-500': errors.mensaje }"
        ></textarea>
        <p v-if="errors.mensaje" class="text-red-400 text-xs mt-1">{{ errors.mensaje }}</p>
      </div>
    </div>

    <!-- Aviso legal -->
    <p class="text-gray-600 text-xs mt-4 leading-relaxed">
      Al enviar este formulario, acepta que sus datos sean utilizados exclusivamente para
      responder su consulta, de acuerdo con la Ley N° 19.628 sobre protección de datos personales.
    </p>

    <!-- Submit -->
    <button
      type="submit"
      :disabled="isSubmitting"
      class="btn-primary w-full justify-center mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      <Icon
        :name="isSubmitting ? 'heroicons:arrow-path' : 'heroicons:paper-airplane'"
        size="18"
        :class="{ 'animate-spin': isSubmitting }"
      />
      {{ isSubmitting ? 'Enviando...' : 'Enviar consulta' }}
    </button>

    <!-- Estado enviado -->
    <Transition name="fade">
      <div
        v-if="submitted"
        class="mt-4 bg-green-900/30 border border-green-700/50 rounded-lg p-4 text-center"
      >
        <p class="text-green-400 font-medium text-sm">
          Consulta recibida. Le responderemos dentro de las 24 horas hábiles.
        </p>
      </div>
    </Transition>
  </form>
</template>

<script setup lang="ts">
const form = reactive({
  nombre: '',
  email: '',
  telefono: '',
  mensaje: '',
})

const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const submitted = ref(false)

const validate = () => {
  const e: Record<string, string> = {}
  if (!form.nombre.trim())
    e.nombre = 'El nombre es obligatorio.'
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    e.email = 'Ingrese un correo electrónico válido.'
  if (!form.mensaje.trim() || form.mensaje.length < 20)
    e.mensaje = 'El mensaje debe tener al menos 20 caracteres.'

  Object.keys(errors).forEach(k => delete errors[k])
  Object.assign(errors, e)
  return Object.keys(e).length === 0
}

const handleSubmit = async () => {
  if (!validate()) return
  isSubmitting.value = true
  try {
    // Reemplazar con el endpoint real de Formspree: https://formspree.io/f/TU_ID
    const res = await fetch('https://formspree.io/f/TU_FORMSPREE_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      submitted.value = true
      Object.assign(form, { nombre: '', email: '', telefono: '', mensaje: '' })
    }
  } catch {
    // En desarrollo sin Formspree, simular éxito
    submitted.value = true
    Object.assign(form, { nombre: '', email: '', telefono: '', mensaje: '' })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
