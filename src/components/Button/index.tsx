import React from 'react'

import { RectButtonProperties } from 'react-native-gesture-handler'

import { Container, ButtonText } from './styles'

interface ButtonProps extends RectButtonProperties {
  variant?: boolean
  onPress(e: any): void
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = false,
  ...rest
}) => {
  return (
    <Container variant={variant} {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  )
}

export default Button
