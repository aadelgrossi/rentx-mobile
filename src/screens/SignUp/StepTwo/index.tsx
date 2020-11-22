import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Keyboard, KeyboardAvoidingView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Button from '../../../components/Button'
import SecureTextInput from '../../../components/SecureTextInput'
import colors from '../../../styles/colors'
import {
  Container,
  Contents,
  Form,
  SignUpText,
  Title,
  StepItemText
} from './styles'

const StepOne: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: 'center' }}
        behavior="padding"
        enabled
      >
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Contents>
            <MaterialIcons
              name="chevron-left"
              size={30}
              color={colors.grayAccent}
              onPress={navigation.goBack}
              style={{ position: 'absolute' }}
            />
            <Title>Crie sua conta</Title>

            <SignUpText>Defina sua senha</SignUpText>

            <Form>
              <StepItemText>02. Senha</StepItemText>

              <SecureTextInput name="password" placeholder="Senha" />
              <SecureTextInput
                name="password_confirmation"
                placeholder="Repetir senha"
              />

              <Button
                style={{ marginTop: 32 }}
                onPress={() => navigation.navigate('SignUpConfirm')}
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

export default StepOne
