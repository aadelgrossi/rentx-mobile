import { gql } from '@apollo/client'

export default gql`
  query GetAllRentals {
    rentals {
      id
      car {
        name
        manufacturer {
          name
        }
        fuelType
        dailyValue
        photo {
          url
        }
      }
      startDate
      endDate
    }
  }
`
