import { gql } from '@apollo/client'

const SIGN_IN = gql`
  mutation SignIn($credentials: SignInInput!) {
    signIn(data: $credentials) {
      accessToken
      user {
        id
        firstName
        lastName
        admin
        avatar {
          id
          url
        }
      }
    }
  }
`

export { SIGN_IN }
