import { gql } from '@apollo/client'

export const CARS = gql`
  query GetCars($filter: CarFilterArgs!) {
    cars(filter: $filter) {
      id
      model
      dailyRate
      fuelType
      manufacturer {
        name
      }
      photo {
        url
      }
    }
  }
`

export const DAILY_RATE_RANGE = gql`
  query GetDailyRateRange {
    dailyRateRange {
      min
      max
    }
  }
`
