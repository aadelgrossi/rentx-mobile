import React from 'react'

import { Keyboard, KeyboardAvoidingView, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Input from '../../../../components/Input'
import { useAuth } from '../../../../hooks/useAuth'

const UpdateInfo: React.FC = () => {
  const { user } = useAuth()
  return (
    <View>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior="padding"
        enabled
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View>
            <Input
              name="name"
              icon="person"
              placeholder="Nome"
              defaultValue={user.name}
            />
            <Input
              name="email"
              icon="email"
              placeholder="Email"
              defaultValue={user.email}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default UpdateInfo
