import { gql } from '@apollo/client'

const SIGN_IN = gql`
  mutation SignIn($credentials: SigninInput!) {
    signin(data: $credentials) {
      accessToken
      user {
        id
        name
        email
        createdAt
        avatar {
          url
        }
        rentals {
          id
          startDate
          endDate
          car {
            model
          }
        }
      }
    }
  }
`

const SIGN_UP = gql`
  mutation SignUp($signUpData: SignupInput!) {
    signup(data: $signUpData) {
      accessToken
      user {
        id
        name
        email
        createdAt
        avatar {
          url
        }
      }
    }
  }
`

export { SIGN_IN, SIGN_UP }
