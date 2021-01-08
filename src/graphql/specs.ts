import { gql } from '@apollo/client'

export default gql`
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
