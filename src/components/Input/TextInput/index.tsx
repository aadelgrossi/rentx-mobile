import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react'

import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import RentIcon from '~/components/RentIcon'
import colors from '~/styles/colors'

import { Wrapper, IconContainer, TextInput } from '../styles'

interface InputProps extends TextInputProps {
  icon?: RentIcons
  secureText?: boolean
  name: string
  control: Control
}

interface InputRef {
  focus(): void
}

const InputComponent: ForwardRefRenderFunction<InputRef, InputProps> = (
  { icon, name, control, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    }
  }))

  return (
    <Controller
      control={control}
      name={name}
      render={({ onChange }) => (
        <Wrapper>
          {icon && (
            <IconContainer>
              <RentIcon color={colors.grayText} size={24} name={icon} />
            </IconContainer>
          )}
          <TextInput
            ref={inputElementRef}
            keyboardAppearance="dark"
            placeholderTextColor={colors.grayAccent}
            onChangeText={value => onChange(value)}
            {...rest}
          />
        </Wrapper>
      )}
    />
  )
}

export const Input = forwardRef(InputComponent)
