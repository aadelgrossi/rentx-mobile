import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Controller, useForm } from 'react-hook-form'
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Button from '~/components/Button'
import { Input } from '~/components/Input'
import { SignUpFormData } from '~/contexts/signup_data'
import { useSignUp } from '~/hooks'
import colors from '~/styles/colors'

import {
  Form,
  StepItemText,
  Container,
  Contents,
  SignUpText,
  Title
} from '../styles'

export const StepOne: React.FC = () => {
  const navigation = useNavigation()
  const { setValues, signUpData } = useSignUp()

  const emailInput = React.useRef<TextInput>(null)

  const { control, handleSubmit } = useForm<SignUpFormData>({
    defaultValues: signUpData
  })

  const onSubmit = (data: SignUpFormData) => {
    setValues(data)
    navigation.navigate('SignUpStepTwo')
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
            <SignUpText>Faça seu cadastro de forma rápida e fácil.</SignUpText>

            <Form>
              <StepItemText>01. Dados</StepItemText>

              <Controller
                name="name"
                control={control}
                render={({ onChange, value }) => (
                  <Input
                    value={value}
                    icon="person"
                    placeholder="Nome"
                    returnKeyType="next"
                    onChange={onChange}
                    blurOnSubmit={false}
                    onSubmitEditing={() => emailInput.current?.focus()}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ onChange, value }) => (
                  <Input
                    ref={emailInput}
                    icon="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    returnKeyType="default"
                    value={value}
                    onChange={onChange}
                    onSubmitEditing={() => handleSubmit(onSubmit)}
                  />
                )}
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
