import { gql } from '@apollo/client'

export const CAR_SPECIFICATIONS = gql`
  query GetCarSpecs($id: String!) {
    specifications(carId: $id) {
      id
      specification {
        icon
        isIconValue
      }
      value
    }
  }
`
