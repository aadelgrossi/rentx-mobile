import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Keyboard, KeyboardAvoidingView } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Button from '../../../components/Button'
import Input from '../../../components/Input'
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

            <SignUpText>Faça seu cadastro de forma rápida e fácil.</SignUpText>

            <Form>
              <StepItemText>01. Dados</StepItemText>

              <Input name="name" icon="person" placeholder="Nome" />
              <Input name="email" icon="email" placeholder="Senha" />

              <Button
                style={{ marginTop: 32 }}
                onPress={() => navigation.navigate('SignUpStepTwo')}
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
