/**
 * Composable que observa elementos del DOM y aplica una clase CSS
 * cuando entran al viewport, disparando animaciones de entrada.
 *
 * Uso:
 *   const { reveal } = useScrollReveal()
 *   <div v-bind="reveal()">...</div>
 *   <div v-bind="reveal({ delay: 200 })">...</div>
 */
export const useScrollReveal = () => {
  const observer = ref<IntersectionObserver | null>(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible')
            observer.value?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    // Observar todos los elementos con clase sr-hidden que ya existen
    document.querySelectorAll('.sr-hidden').forEach((el) => {
      observer.value?.observe(el)
    })
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  /**
   * Retorna los atributos a vincular al elemento con v-bind.
   * delay: retraso en ms antes de que inicie la animación (para efectos escalonados)
   * direction: 'up' | 'left' | 'right' (por defecto 'up')
   */
  const reveal = (options?: { delay?: number; direction?: 'up' | 'left' | 'right' }) => {
    const { delay = 0, direction = 'up' } = options ?? {}
    return {
      class: `sr-hidden sr-${direction}`,
      style: delay ? `transition-delay: ${delay}ms` : undefined,
    }
  }

  return { reveal }
}
