import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import { Controller } from 'react-hook-form'

import RentIcon from '~/components/RentIcon'
import colors from '~/styles/colors'

import { InputProps } from '..'
import { Wrapper, IconContainer, TextInput, Divider } from '../styles'
import { ShowPassword } from './styles'

interface InputRef {
  focus(): void
}

const Input: ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, control, hasError = false, ...rest },
  ref
) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const inputElementRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus()
    }
  }))

  const handleShowPassword = useCallback(() => {
    setPasswordVisible(state => !state)
  }, [])

  return (
    <Controller
      name={name}
      control={control}
      render={({ onChange }) => (
        <Wrapper hasError={hasError}>
          <IconContainer>
            <RentIcon
              color={hasError ? colors.red : colors.grayText}
              size={24}
              name="lock"
            />
          </IconContainer>

          <Divider />

          <TextInput
            ref={inputElementRef}
            keyboardAppearance="dark"
            secureTextEntry={!passwordVisible}
            placeholderTextColor={colors.grayAccent}
            onChangeText={value => onChange(value)}
            {...rest}
          />

          <ShowPassword onPress={handleShowPassword}>
            <RentIcon
              color={hasError ? colors.red : colors.grayAccent}
              size={24}
              name={passwordVisible ? 'eye-cross' : 'eye'}
            />
          </ShowPassword>
        </Wrapper>
      )}
    />
  )
}

export const SecureTextInput = forwardRef(Input)
