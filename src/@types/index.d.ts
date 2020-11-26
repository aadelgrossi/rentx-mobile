declare module '*.png'

type RentIcons =
  | 'speed'
  | 'transmission'
  | 'acceleration'
  | 'calendar'
  | 'car'
  | 'electric'
  | 'email'
  | 'gas'
  | 'home'
  | 'hp'
  | 'hybrid'
  | 'lock'
  | 'person'
  | 'photo'
  | 'edit'
  | 'filter'
  | 'power'
  | 'eye'
  | 'eye-cross'
  | 'search'

type CustomCarSpec = 'speed' | 'acceleration' | 'hp' | 'person'

interface CarSpec {
  id: string
  name: CustomCarSpec
  value: string
}

interface Image {
  id: string
  url: string
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
interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  admin: boolean
  createdAt: string
  avatar: Image
}

interface Rental {
  id: string
  car: Car
  user: User
  startDate: string
  endDate: string
}
