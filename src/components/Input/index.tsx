import React from 'react'

import { TextInputProps } from 'react-native'

import colors from '../../styles/colors'
import RentIcon from '../RentIcon'
import { Wrapper, IconContainer, TextInput } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon: RentIcons
  secureText?: boolean
}

const Input: React.FC<InputProps> = ({
  icon,
  secureTextEntry,
  children,
  ...rest
}) => {
  return (
    <Wrapper>
      <IconContainer>
        <RentIcon color={colors.grayText} size={24} name={icon}></RentIcon>
      </IconContainer>
      <TextInput
        keyboardAppearance="dark"
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.grayAccent}
        {...rest}
      ></TextInput>

      {children}
    </Wrapper>
  )
}

export default Input
