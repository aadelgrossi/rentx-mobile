import { gql } from '@apollo/client'

export const USER_INFO = gql`
  query UserInfo {
    me {
      name
      email
      totalRentals
      createdAt
      avatar {
        url
      }
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

export const UPDATE_USER_INFO = gql`
  mutation updateUserInfo($data: UpdateUserInput!) {
    updateUser(data: $data) {
      name
      email
      totalRentals
      createdAt
      avatar {
        url
      }
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

export const CHANGE_USER_PASSWORD = gql`
  mutation changeUserPassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
    }
  }
`
