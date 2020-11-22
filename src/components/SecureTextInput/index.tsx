import React, { useCallback, useState } from 'react'

import { TextInputProps } from 'react-native'

import colors from '../../styles/colors'
import Input from '../Input'
import RentIcon from '../RentIcon'
import { ShowPassword } from './styles'

interface InputProps extends TextInputProps {
  name: string
}

const SecureTextInput: React.FC<InputProps> = ({ name, ...rest }) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const handleShowPassword = useCallback(() => {
    setPasswordVisible(state => !state)
  }, [])

  return (
    <Input name={name} icon="lock" secureTextEntry={!passwordVisible} {...rest}>
      <ShowPassword onPress={handleShowPassword}>
        <RentIcon
          color={colors.grayText}
          size={24}
          name={passwordVisible ? 'eye-cross' : 'eye'}
        ></RentIcon>
      </ShowPassword>
    </Input>
  )
}

export default SecureTextInput
