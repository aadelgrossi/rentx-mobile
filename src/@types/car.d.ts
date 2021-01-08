type CustomCarSpec = 'speed' | 'acceleration' | 'hp' | 'person' | 'transmission'
type TransmissionSpec = 'auto' | 'manual'
type FuelSpec = 'electric' | 'hybrid' | 'gas'

interface Specification {
  icon: CustomCarSpec
  isIconValue: boolean
}
interface CarSpec {
  id: string
  specification: Specification
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

interface FavoriteCar extends Car {
  timesRented: number
  totalDays: number
}
