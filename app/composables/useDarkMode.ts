export const useDarkMode = () => {
  const isDark = useState('darkMode', () => false)

  const apply = (dark: boolean) => {
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', dark)
      localStorage.setItem('darkMode', dark ? '1' : '0')
    }
  }

  const toggle = () => {
    isDark.value = !isDark.value
    apply(isDark.value)
  }

  const init = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      const dark = saved !== null ? saved === '1' : prefersDark
      isDark.value = dark
      apply(dark)
    }
  }

  return { isDark, toggle, init }
}
