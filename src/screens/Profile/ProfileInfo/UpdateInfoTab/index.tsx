import React, { useCallback, useRef } from 'react'

import { useMutation } from '@apollo/client'
import { joiResolver } from '@hookform/resolvers/joi'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import {
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  View,
  Platform,
  Dimensions
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { Input } from '~/components/Input'
import { UPDATE_USER_INFO } from '~/graphql'
import { useAuth } from '~/hooks'
import { authErrorMessage } from '~/utils/authErrorInfoMessage'
import { updateUserInfoSchema } from '~/validators'

import { SubmitButton } from '../styles'

interface UpdateUserDetailsData {
  name: string
  email: string
}

const UpdateInfo: React.FC = () => {
  const { user, updateUserInfo } = useAuth()
  const navigation = useNavigation()

  const {
    control,
    errors,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<UpdateUserDetailsData>({
    defaultValues: {
      email: user.email,
      name: user.name
    },
    resolver: joiResolver(updateUserInfoSchema)
  })

  const emailRef = useRef<TextInput>(null)
  const [updateUser] = useMutation<{ updateUser: User }>(UPDATE_USER_INFO)

  const updateNameAndEmail = useCallback(
    async (data: UpdateUserDetailsData) => {
      try {
        const { data: response } = await updateUser({
          variables: { data }
        })

        if (response) updateUserInfo(response.updateUser)

        navigation.navigate('UpdateConfirm')
      } catch (err) {
        console.error(err)
        authErrorMessage('Email já em uso.')
      }
    },
    []
  )

  return (
    <View>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
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
              hasError={!!errors.name}
              onSubmitEditing={() => emailRef.current?.focus()}
            />
            <Input
              name="email"
              icon="email"
              placeholder="Email"
              defaultValue={user.email}
              control={control}
              hasError={!!errors.email}
              ref={emailRef}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <SubmitButton
        onPress={handleSubmit(updateNameAndEmail)}
        loading={isSubmitting}
        style={{ marginTop: Dimensions.get('window').height - 614 }}
      >
        Salvar alterações
      </SubmitButton>
    </View>
  )
}

export default UpdateInfo
