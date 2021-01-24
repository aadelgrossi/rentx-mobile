import React from 'react'

import { ActivityIndicator } from 'react-native'
import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText } from './styles'

interface ButtonProps extends RectButtonProperties {
  variant?: boolean
  loading?: boolean
  onPress(e: any): void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = false,
  loading = false,
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </Container>
  )
}
