type CustomCarSpec = 'speed' | 'acceleration' | 'hp' | 'person'

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
  transmission: 'AUTO' | 'MANUAL'
  specifications: CustomCarSpec[]
  dailyValue: number
  photo: Image
}
