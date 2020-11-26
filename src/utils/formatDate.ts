import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatLongDate = (date: string): string =>
  format(parseISO(date), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBR
  })

const formatShortDate = (date: string): string =>
  format(parseISO(date), 'dd LLLL yyyy', {
    locale: ptBR
  })

export { formatShortDate, formatLongDate }
