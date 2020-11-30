import React from 'react'

import { Keyboard, KeyboardAvoidingView, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import SecureTextInput from '../../../../components/SecureTextInput'

const UpdatePassword: React.FC = () => {
  return (
    <View>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior="padding"
        enabled
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <SecureTextInput name="old_password" placeholder="Senha atual" />
            <SecureTextInput name="password" placeholder="Nova senha" />
            <SecureTextInput
              name="confirm_password"
              placeholder="Confirme sua senha"
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default UpdatePassword
