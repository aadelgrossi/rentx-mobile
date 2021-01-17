import React, { useRef } from 'react'

import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, TextInput, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { SecureTextInput } from '~/components/Input'

interface UpdatePasswordFormData {
  current_password: string
  new_password: string
  confirm_password: string
}

const UpdatePassword: React.FC = () => {
  const { control } = useForm<UpdatePasswordFormData>({
    defaultValues: {
      current_password: '',
      new_password: '',
      confirm_password: ''
    }
  })
  const newPasswordRef = useRef<TextInput>(null)
  const confirmPasswordRef = useRef<TextInput>(null)

  return (
    <View>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior="padding"
        enabled
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <SecureTextInput
              name="current_password"
              placeholder="Senha atual"
              control={control}
              blurOnSubmit={false}
              onSubmitEditing={() => newPasswordRef.current?.focus()}
            />
            <SecureTextInput
              name="new_password"
              placeholder="Nova senha"
              control={control}
              ref={newPasswordRef}
              blurOnSubmit={false}
              onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            />
            <SecureTextInput
              name="confirm_password"
              placeholder="Confirme sua senha"
              control={control}
              ref={confirmPasswordRef}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default UpdatePassword
