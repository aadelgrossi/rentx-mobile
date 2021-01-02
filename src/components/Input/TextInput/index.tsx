import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react'

import { TextInputProps } from 'react-native'

import colors from '~/styles/colors'

import RentIcon from '../../RentIcon'
import { Wrapper, IconContainer, TextInput } from '../styles'

interface InputProps extends TextInputProps {
  icon?: RentIcons
  secureText?: boolean
  value: string
  onChange(data: any): void
}

interface InputRef {
  focus(): void
}

const InputComponent: ForwardRefRenderFunction<InputRef, InputProps> = (
  { icon, onChange, secureTextEntry, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    }
  }))

  return (
    <Wrapper>
      {icon && (
        <IconContainer>
          <RentIcon color={colors.grayText} size={24} name={icon} />
        </IconContainer>
      )}
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.grayAccent}
        onChangeText={value => onChange(value)}
        {...rest}
      />
    </Wrapper>
  )
}

export const Input = forwardRef(InputComponent)
