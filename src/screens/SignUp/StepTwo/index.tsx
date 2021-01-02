import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useForm } from 'react-hook-form'
import {
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Button from '~/components/Button'
import { SecureTextInput } from '~/components/Input'
import { SignUpFormData } from '~/contexts/signup_data'
import { useSignUp } from '~/hooks'
import colors from '~/styles/colors'

import {
  Container,
  Contents,
  Form,
  SignUpText,
  Title,
  StepItemText
} from '../styles'

export const StepTwo: React.FC = () => {
  const navigation = useNavigation()
  const { signUpData, setValues } = useSignUp()

  const passwordConfirm = React.useRef<TextInput>(null)

  const { control, handleSubmit } = useForm<SignUpFormData>({
    defaultValues: signUpData
  })

  const onSubmit = (data: SignUpFormData) => {
    setValues(data)
    navigation.navigate('SignUpConfirm')
  }

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
        enabled
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Contents>
            <MaterialIcons
              name="chevron-left"
              size={30}
              color={colors.grayAccent}
              onPress={navigation.goBack}
              style={{ marginBottom: -10 }}
            />
            <Title>Defina sua senha</Title>

            <SignUpText>Escolha uma senha de no mínimo 8 digitos.</SignUpText>

            <Form>
              <StepItemText>02. Senha</StepItemText>

              <SecureTextInput
                control={control}
                name="password"
                placeholder="Senha"
                blurOnSubmit={false}
                returnKeyType="next"
                onSubmitEditing={() => passwordConfirm.current?.focus()}
              />

              <SecureTextInput
                control={control}
                name="password_confirmation"
                placeholder="Repetir senha"
                ref={passwordConfirm}
              />

              <Button
                style={{ marginTop: 56 }}
                onPress={handleSubmit(onSubmit)}
              >
                Próximo
              </Button>
            </Form>
          </Contents>
        </TouchableWithoutFeedback>
        <StatusBar style="dark" />
      </KeyboardAvoidingView>
    </Container>
  )
}
