import React, { useCallback, useRef, useState } from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { joiResolver } from '@hookform/resolvers/joi'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { useForm } from 'react-hook-form'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import { Button, CheckBox } from '~/components'
import { SecureTextInput, Input } from '~/components/Input'
import { useAuth } from '~/hooks'
import colors from '~/styles/colors'
import { authErrorMessage } from '~/utils/authErrorInfoMessage'
import { signInSchema } from '~/validators'

import {
  Container,
  Title,
  SignInText,
  Form,
  Contents,
  RememberAndForgotPasswordWrapper,
  ForgotPassword,
  Error,
  ErrorContainer,
  ForgotPasswordText
} from './styles'

interface SignInFormData {
  email: string
  password: string
}

export const SignIn: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false)
  const { signIn } = useAuth()
  const navigation = useNavigation()
  const passwordRef = useRef<TextInput>(null)

  const {
    control,
    handleSubmit,
    errors,
    formState: { isSubmitting },
    clearErrors
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: joiResolver(signInSchema)
  })

  const onSubmit = useCallback(
    async (data: SignInFormData) => {
      clearErrors()
      try {
        await signIn(data)
      } catch (error) {
        authErrorMessage('Email ou senha incorretos')
      }
    },
    [signIn, clearErrors]
  )

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Contents>
            <MaterialIcons
              name="chevron-left"
              size={30}
              color={colors.grayAccent}
              onPress={() => navigation.navigate('Welcome')}
            />
            <Title>Login</Title>

            <SignInText>
              Entre com sua conta para começar uma experiência incrível.
            </SignInText>

            <ErrorContainer>
              {errors.email && <Error>Digite seu email</Error>}
              {errors.password && <Error>Digite a senha</Error>}
            </ErrorContainer>

            <Form>
              <Input
                name="email"
                icon="email"
                placeholder="Email"
                returnKeyType="next"
                blurOnSubmit={false}
                textContentType="emailAddress"
                autoCapitalize="none"
                autoCompleteType="email"
                onSubmitEditing={() => passwordRef.current?.focus()}
                hasError={!!errors.email}
                control={control}
              />
              <SecureTextInput
                name="password"
                placeholder="Senha"
                control={control}
                textContentType="password"
                hasError={!!errors.password}
                ref={passwordRef}
              />

              <RememberAndForgotPasswordWrapper>
                <CheckBox
                  text="Lembrar-me"
                  checked={rememberMe}
                  onPress={() => setRememberMe(!rememberMe)}
                />

                <ForgotPassword>
                  <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                </ForgotPassword>
              </RememberAndForgotPasswordWrapper>

              <Button
                style={{ marginTop: 20 }}
                loading={isSubmitting}
                onPress={handleSubmit(onSubmit)}
              >
                Entrar
              </Button>
            </Form>
          </Contents>
        </TouchableWithoutFeedback>
        <StatusBar style="dark" />
      </KeyboardAvoidingView>
    </Container>
  )
}
