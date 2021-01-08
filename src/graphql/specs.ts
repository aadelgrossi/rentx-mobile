import { gql } from '@apollo/client'

export default gql`
  query GetCarSpecs($id: String!) {
    car(id: $id) {
      specifications {
        id
        specification {
          icon
          isIconValue
        }
        value
      }
    }
  }
`
