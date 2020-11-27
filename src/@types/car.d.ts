type CustomCarSpec = 'speed' | 'acceleration' | 'hp' | 'person'

type FuelType = 'gas' | 'electric' | 'hybrid'
type TransmissionType = 'auto' | 'manual'

interface CarSpec {
  id: string
  name: CustomCarSpec
  value: string
}

interface Car {
  id: string
  name: string
  manufacturer: {
    name: string
  }
  fuelType: 'gas' | 'electric' | 'hybrid'
  transmission: 'auto' | 'manual'
  specifications: CustomCarSpec[]
  dailyValue: number
  photo: Image
}
