import React from 'react'

import { Container, Checkbox, CheckboxText } from './styles'

interface CheckboxProps {
  checked: boolean
  text: string
}

const CheckBox: React.FC<CheckboxProps> = ({
  checked,
  text = '',
  ...props
}) => (
  <Container>
    <Checkbox checked={checked} {...props}></Checkbox>
    <CheckboxText> {text} </CheckboxText>
  </Container>
)

export default CheckBox
