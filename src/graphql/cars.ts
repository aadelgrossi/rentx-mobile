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
