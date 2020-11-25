import { gql } from '@apollo/client'

export default gql`
  query GetCars {
    cars {
      id
      name
      dailyValue
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
