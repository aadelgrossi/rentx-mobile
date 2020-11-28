import { gql } from '@apollo/client'

export default gql`
  query GetCars {
    cars {
      id
      name
      dailyValue
      fuelType
      transmission
      manufacturer {
        name
      }
      photo {
        url
      }
      specifications {
        id
        name
        value
      }
    }
  }
`
