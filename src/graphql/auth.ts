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

const IS_EMAIL_AVAILABLE = gql`
  query CheckEmailAvailability($email: String!) {
    isEmailAvailable(email: $email)
  }
`

export { SIGN_IN, SIGN_UP, IS_EMAIL_AVAILABLE }
