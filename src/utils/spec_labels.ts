import { FUEL_TYPE, TRANSMISSION } from '../constants'

type TransmissionMapping = { [K in TRANSMISSION]: string }
type FuelMapping = { [K in FUEL_TYPE]: string }

const TRANSMISSION_LABELS: TransmissionMapping = {
  auto: 'Automático',
  manual: 'Manual'
}

const FUEL_LABELS: FuelMapping = {
  hybrid: 'Álcool',
  gas: 'Gasolina',
  electric: 'Elétrico'
}

export { TRANSMISSION_LABELS, FUEL_LABELS }
