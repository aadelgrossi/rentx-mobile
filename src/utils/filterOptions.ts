interface BaseOption {
  label: string
}

interface TransmissionOption extends BaseOption {
  value: TransmissionType | ''
}

interface FuelTypeOption extends BaseOption {
  value: FuelType | ''
}

const transmissionTypes: TransmissionOption[] = [
  {
    label: 'Automático',
    value: 'auto'
  },
  {
    label: 'Manual',
    value: 'manual'
  }
]

const fuelTypes: FuelTypeOption[] = [
  {
    label: 'Gasolina',
    value: 'gas'
  },
  {
    label: 'Elétrico',
    value: 'electric'
  },
  {
    label: 'Álcool',
    value: 'hybrid'
  }
]

export { transmissionTypes, fuelTypes }
