import { gql } from '@apollo/client'

export default gql`
  query GetUserRentals {
    rentals {
      id
      car {
        model
        manufacturer {
          name
        }
        fuelType
        dailyRate
        photo {
          url
        }
      }
      startDate
      endDate
    }
  }
`
