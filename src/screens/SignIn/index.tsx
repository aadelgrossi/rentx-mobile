import React, { useState } from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Keyboard } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Button from '../../components/Button'
import CheckBox from '../../components/Checkbox'
import Input from '../../components/Input'
import SecureTextInput from '../../components/SecureTextInput'
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

const SignIn: React.FC = () => {
  const [rememberMe, setRememberMe] = useState(false)
  const navigation = useNavigation()

  return (
    <Container>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Contents>
          <MaterialIcons
            name="chevron-left"
            size={30}
            color={colors.grayAccent}
            onPress={navigation.goBack}
          />
          <Title>Login</Title>

          <SignInText>
            Entre com sua conta para começar uma experiência incrível.
          </SignInText>

          <Form>
            <Input name="email" icon="email" placeholder="Email" />
            <SecureTextInput name="password" placeholder="Senha" />

            <RememberAndForgotPasswordWrapper>
              <CheckBox
                text="Lembrar-me"
                checked={rememberMe}
                onPress={() => setRememberMe(!rememberMe)}
              ></CheckBox>

              <ForgotPassword>
                <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
              </ForgotPassword>
            </RememberAndForgotPasswordWrapper>

            <Button onPress={() => {}}>Entrar</Button>
          </Form>
        </Contents>
      </TouchableWithoutFeedback>
      <StatusBar style="dark" />
    </Container>
  )
}

export default SignIn
