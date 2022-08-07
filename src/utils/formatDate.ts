import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatLongDate = (date: string): string =>
  format(parseISO(date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR
  })

const formatShortDate = (date: string): string => {
  const tempFormat = format(parseISO(date), 'dd LLL yyyy', {
    locale: ptBR
  })
  return (
    tempFormat.slice(0, 3) +
    tempFormat.charAt(3).toUpperCase() +
    tempFormat.slice(4)
  )
}

export { formatShortDate, formatLongDate }
