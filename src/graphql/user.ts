import { gql } from '@apollo/client'

export const USER_INFO = gql`
  query UserInfo {
    me {
      totalRentals
      favoriteCar {
        totalDays
        timesRented
        model
        dailyRate
        manufacturer {
          name
        }
        photo {
          url
        }
      }
    }
  }
`
