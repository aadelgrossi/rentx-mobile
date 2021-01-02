import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useImperativeHandle,
  useRef,
  useState
} from 'react'

import { TextInputProps } from 'react-native'

import colors from '~/styles/colors'

import RentIcon from '../../RentIcon'
import { Wrapper, IconContainer, TextInput } from '../styles'
import { ShowPassword } from './styles'

interface InputProps extends TextInputProps {
  onChange(data: any): void
}

interface InputRef {
  focus(): void
}

const Input: ForwardRefRenderFunction<InputRef, InputProps> = (
  { onChange, ...rest },
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
    <Wrapper>
      <IconContainer>
        <RentIcon color={colors.grayText} size={24} name="lock" />
      </IconContainer>

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
          color={colors.grayAccent}
          size={24}
          name={passwordVisible ? 'eye-cross' : 'eye'}
        />
      </ShowPassword>
    </Wrapper>
  )
}

export const SecureTextInput = forwardRef(Input)
