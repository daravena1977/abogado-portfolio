export const useWhatsApp = () => {
  // Reemplazar con el número real del abogado (sin +, sin espacios, con código de país)
  const PHONE = '56951655965'

  const getWhatsAppUrl = (mensaje?: string) => {
    const texto = mensaje ?? 'Hola, me gustaría solicitar una consulta legal.'
    return `https://wa.me/${PHONE}?text=${encodeURIComponent(texto)}`
  }

  const openWhatsApp = (mensaje?: string) => {
    window.open(getWhatsAppUrl(mensaje), '_blank', 'noopener,noreferrer')
  }

  return { getWhatsAppUrl, openWhatsApp }
}
