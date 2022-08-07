import React, { useCallback, useRef } from 'react'

import { useMutation } from '@apollo/client'
import { joiResolver } from '@hookform/resolvers/joi'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, TextInput, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { SecureTextInput } from '~/components/Input'
import { CHANGE_USER_PASSWORD } from '~/graphql'
import { authErrorMessage } from '~/utils/authErrorInfoMessage'
import { updateUserPasswordSchema } from '~/validators'

import { SubmitButton } from '../styles'
import {
  ChangeUserPasswordResult,
  ChangeUserPasswordVariables,
  UpdatePasswordFormData
} from './types'

const UpdatePassword: React.FC = () => {
  const {
    control,
    handleSubmit,
    errors,
    formState: { isSubmitting }
  } = useForm<UpdatePasswordFormData>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    resolver: joiResolver(updateUserPasswordSchema)
  })
  const passwordRef = useRef<TextInput>(null)
  const confirmPasswordRef = useRef<TextInput>(null)
  const navigation = useNavigation()

  const [mutate] = useMutation<
    ChangeUserPasswordResult,
    ChangeUserPasswordVariables
  >(CHANGE_USER_PASSWORD)

  const updatePassword = useCallback(
    async ({ newPassword, oldPassword }: UpdatePasswordFormData) => {
      try {
        await mutate({
          variables: {
            data: { newPassword, oldPassword }
          }
        })
        navigation.navigate('ChangePasswordConfirm')
      } catch (err) {
        authErrorMessage('Senha anterior incorreta')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior="padding" enabled>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={{ flex: 1, paddingHorizontal: 16 }}>
            <SecureTextInput
              name="oldPassword"
              placeholder="Senha atual"
              control={control}
              blurOnSubmit={false}
              hasError={!!errors.oldPassword}
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <SecureTextInput
              name="newPassword"
              placeholder="Nova senha"
              control={control}
              ref={passwordRef}
              blurOnSubmit={false}
              hasError={!!errors.newPassword}
              onSubmitEditing={() => confirmPasswordRef.current?.focus()}
            />
            <SecureTextInput
              name="confirmPassword"
              placeholder="Confirme sua senha"
              control={control}
              hasError={!!errors.confirmPassword}
              ref={confirmPasswordRef}
            />
          </View>

          <SubmitButton
            loading={isSubmitting}
            onPress={handleSubmit(updatePassword)}
            style={{ marginHorizontal: 16, marginTop: 16 }}
          >
            Alterar senha
          </SubmitButton>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

export default UpdatePassword
