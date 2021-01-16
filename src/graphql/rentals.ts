import { gql } from '@apollo/client'

const GET_RENTALS = gql`
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

const CREATE_RENTAL = gql`
  mutation CreateRental($data: CreateRentalInput!) {
    createRental(data: $data) {
      id
      createdAt
    }
  }
`

export { GET_RENTALS, CREATE_RENTAL }
