import React from 'react'

import { Container, Checkbox, CheckboxText } from './styles'

interface CheckboxProps {
  onPress(): void
  checked: boolean
  text: string
}

export const CheckBox: React.FC<CheckboxProps> = ({
  checked,
  text = '',
  ...props
}) => (
  <Container>
    <Checkbox checked={checked} {...props}></Checkbox>
    <CheckboxText> {text} </CheckboxText>
  </Container>
)
