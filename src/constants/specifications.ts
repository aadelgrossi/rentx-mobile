export enum TRANSMISSION {
  auto = 'auto',
  manual = 'manual'
}

export enum FUEL_TYPE {
  gas = 'gas',
  electric = 'electric',
  hybrid = 'hybrid'
}

export enum BASE_SPECS {
  fuelType = 'FuelType',
  transmission = 'Transmission'
}

type TransmissionMapping = { [K in TRANSMISSION]: string }
type FuelMapping = { [K in FUEL_TYPE]: string }

export const TRANSMISSION_LABELS: TransmissionMapping = {
  auto: 'Automático',
  manual: 'Manual'
}

export const FUEL_LABELS: FuelMapping = {
  hybrid: 'Álcool',
  gas: 'Gasolina',
  electric: 'Elétrico'
}
