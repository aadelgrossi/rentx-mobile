import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef
} from 'react'

import { Controller } from 'react-hook-form'

import { RentIcon } from '~/components'
import colors from '~/styles/colors'

import { InputProps } from '../'
import { Wrapper, IconContainer, TextInput, Divider } from '../styles'

interface InputRef {
  focus(): void
}

const InputComponent: ForwardRefRenderFunction<InputRef, InputProps> = (
  { icon, name, hasError = false, control, ...rest },
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
        <Wrapper hasError={hasError}>
          {icon && (
            <IconContainer>
              <RentIcon
                color={hasError ? colors.red : colors.grayText}
                size={24}
                name={icon}
              />
            </IconContainer>
          )}
          <Divider />
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
