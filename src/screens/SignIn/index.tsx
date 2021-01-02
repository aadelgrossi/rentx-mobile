import React, { useCallback, useRef, useState } from 'react'

import { MaterialIcons } from '@expo/vector-icons'
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

import { SecureTextInput, Input } from '~/components/Input'

import Button from '../../components/Button'
import CheckBox from '../../components/Checkbox'
import { useAuth } from '../../hooks/useAuth'
import colors from '../../styles/colors'
import {
  Container,
  Title,
  SignInText,
  Form,
  Contents,
  RememberAndForgotPasswordWrapper,
  ForgotPassword,
  ForgotPasswordText
} from './styles'

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false)
  const { signIn } = useAuth()
  const navigation = useNavigation()
  const passwordRef = useRef<TextInput>(null)

  const { control, handleSubmit } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn(data)
      } catch (error) {
        console.log(error)
      }
    },
    [signIn]
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
              style={{ position: 'absolute' }}
            />
            <Title>Login</Title>

            <SignInText>
              Entre com sua conta para começar uma experiência incrível.
            </SignInText>

            <Form>
              <Input
                name="email"
                icon="email"
                placeholder="Email"
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => passwordRef.current?.focus()}
                control={control}
              />
              <SecureTextInput
                name="password"
                placeholder="Senha"
                control={control}
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

export default SignIn
