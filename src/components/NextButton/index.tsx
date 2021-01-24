import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'

import colors from '~/styles/colors'

import { Container } from './styles'

export const NextButton: React.FC = props => {
  return (
    <Container {...props}>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={26}
        color={colors.grayText}
      />
    </Container>
  )
}
