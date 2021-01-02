import React, { useRef } from 'react'

import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, TextInput, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { Input } from '~/components/Input'
import { useAuth } from '~/hooks/useAuth'

interface UpdateUserDetailsData {
  name: string
  email: string
}

const UpdateInfo: React.FC = () => {
  const { control } = useForm<UpdateUserDetailsData>()
  const emailRef = useRef<TextInput>(null)
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
              control={control}
              blurOnSubmit={false}
              onSubmitEditing={() => emailRef.current?.focus()}
            />
            <Input
              name="email"
              icon="email"
              placeholder="Email"
              defaultValue={user.email}
              control={control}
              ref={emailRef}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default UpdateInfo
