type CustomCarSpec = 'speed' | 'acceleration' | 'hp' | 'person' | 'transmission'
type TransmissionSpec = 'auto' | 'manual'
type FuelSpec = 'electric' | 'hybrid' | 'gas'
interface CarSpec {
  id: string
  name: CustomCarSpec | TransmissionSpec | FuelSpec
  value: string
}

interface CarManufacturer {
  id: string
  name: string
}
interface Car {
  id: string
  model: string
  fuelType: FuelSpec
  manufacturer: CarManufacturer
  specifications: CarSpec[]
  dailyRate: number
  photo: Image
}
