import React, { useEffect, useRef } from 'react'

import { TextInputProps, TextInput as NativeTextInput } from 'react-native'

import colors from '../../styles/colors'
import RentIcon from '../RentIcon'
import { Wrapper, IconContainer, TextInput } from './styles'

interface InputProps extends TextInputProps {
  name: string
  icon?: RentIcons
  secureText?: boolean
}

const Input: React.FC<InputProps> = ({
  icon,
  secureTextEntry,
  children,
  ...rest
}) => {
  const inputRef = useRef<NativeTextInput>(null)

  useEffect(() => {
    inputRef.current?.setNativeProps({ style: { fontFamily: 'inter-400' } })
  }, [])

  return (
    <Wrapper>
      {icon && (
        <IconContainer>
          <RentIcon color={colors.grayText} size={24} name={icon}></RentIcon>
        </IconContainer>
      )}
      <TextInput
        ref={inputRef}
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
