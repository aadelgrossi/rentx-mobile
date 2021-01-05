import { Control } from 'react-hook-form'
import { TextInputProps } from 'react-native'

export * from './TextInput'
export * from './SearchInput'
export * from './SecureTextInput'

export interface InputProps extends TextInputProps {
  icon?: RentIcons
  secureText?: boolean
  name: string
  hasError?: boolean
  control: Control
}
