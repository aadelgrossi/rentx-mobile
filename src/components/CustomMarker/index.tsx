import React from 'react'

import colors from '../../styles/colors'
import { Container, Line } from './styles'

const CustomMarker: React.FC = () => {
  return (
    <Container
      style={{
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,

        elevation: 6
      }}
    >
      <Line />
      <Line />
    </Container>
  )
}

export default CustomMarker
