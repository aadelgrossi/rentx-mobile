type CustomCarSpec = 'speed' | 'acceleration' | 'hp' | 'person' | 'transmission'
type TransmissionSpec = 'auto' | 'manual'
type FuelSpec = 'electric' | 'hybrid' | 'gas'
interface CarSpec {
  id: string
  name: CustomCarSpec | TransmissionSpec | FuelSpec
  value: string
}

interface Car {
  id: string
  name: string
  manufacturer: {
    name: string
  }
  fuelType: FuelSpec
  transmission: TransmissionSpec
  specifications: CarSpec[]
  dailyValue: number
  photo: Image
}
