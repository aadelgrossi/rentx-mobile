import React, { useEffect } from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { joiResolver } from '@hookform/resolvers/joi'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useForm } from 'react-hook-form'
import {
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Button from '~/components/Button'
import { SecureTextInput } from '~/components/Input'
import { SignUpPassword } from '~/contexts/signup.types'
import { useSignUp } from '~/hooks'
import colors from '~/styles/colors'

import {
  Container,
  Contents,
  Form,
  SignUpText,
  Title,
  StepItemText,
  FormGroupTitleAndError,
  ErrorContainer,
  Error
} from '../styles'
import { signUpStepTwoSchema } from '../validators'

export const StepTwo: React.FC = () => {
  const navigation = useNavigation()
  const { signUpInfo, signUp } = useSignUp()

  const passwordConfirm = React.useRef<TextInput>(null)

  const { control, handleSubmit, errors } = useForm<SignUpPassword>({
    defaultValues: {
      password: '',
      password_confirmation: ''
    },
    resolver: joiResolver(signUpStepTwoSchema)
  })

  useEffect(() => {
    console.log(errors)
  }, [errors])

  const onSubmit = async ({ password }: SignUpPassword) => {
    const response = await signUp({ ...signUpInfo, password })

    if (response) {
      navigation.navigate('SignUpConfirm', response)
    } else {
      console.log('oops cant register')
    }
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
            <Title>Crie sua conta</Title>

            <SignUpText>Escolha sua melhor senha.</SignUpText>

            <Form>
              <FormGroupTitleAndError>
                <StepItemText>02. Senha</StepItemText>
                <ErrorContainer>
                  {errors.password && (
                    <Error>
                      {errors.password.type === 'string.empty'
                        ? 'Senha obrigatória'
                        : 'Mínimo de 8 caracteres'}
                    </Error>
                  )}
                  {errors.password_confirmation && (
                    <Error>Confirmação inválida</Error>
                  )}
                </ErrorContainer>
              </FormGroupTitleAndError>

              <SecureTextInput
                control={control}
                name="password"
                placeholder="Senha"
                blurOnSubmit={false}
                returnKeyType="next"
                hasError={!!errors.password}
                onSubmitEditing={() => passwordConfirm.current?.focus()}
              />

              <SecureTextInput
                control={control}
                name="password_confirmation"
                placeholder="Repetir senha"
                hasError={!!errors.password_confirmation}
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
