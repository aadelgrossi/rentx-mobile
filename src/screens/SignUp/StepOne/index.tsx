import React, { useEffect } from 'react'

import { useLazyQuery } from '@apollo/client'
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

import Button from '~/components/Button'
import { Input } from '~/components/Input'
import { SignUpInfo } from '~/contexts/signup.types'
import { useSignUp } from '~/hooks'
import { authErrorMessage } from '~/info_messages'
import colors from '~/styles/colors'
import { checkIfEmailAvailable, signUpStepOneSchema } from '~/validators'

import {
  Form,
  StepItemText,
  Container,
  Contents,
  SignUpText,
  Title,
  FormGroupTitleAndError,
  ErrorContainer,
  Error
} from '../styles'

export const StepOne: React.FC = () => {
  const navigation = useNavigation()
  const { setNameAndEmail, signUpInfo } = useSignUp()

  const emailInput = React.useRef<TextInput>(null)

  const { control, handleSubmit, errors } = useForm<SignUpInfo>({
    defaultValues: signUpInfo,
    resolver: joiResolver(signUpStepOneSchema)
  })

  const onSubmit = async ({ email, name }: SignUpInfo) => {
    setNameAndEmail({ email, name })

    try {
      await checkIfEmailAvailable(email)
      navigation.navigate('SignUpStepTwo')
    } catch {
      authErrorMessage('Email já em uso. Escolha outro')
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
            <SignUpText>Faça seu cadastro de forma rápida e fácil.</SignUpText>

            <Form>
              <FormGroupTitleAndError>
                <StepItemText>01. Dados</StepItemText>
                <ErrorContainer>
                  {errors.name && (
                    <Error>{errors.name && 'Nome é obrigatório'}</Error>
                  )}
                  {errors.email && (
                    <Error>
                      {errors.email.type === 'string.empty'
                        ? 'Email é obrigatório'
                        : 'Digite um email válido'}
                    </Error>
                  )}
                </ErrorContainer>
              </FormGroupTitleAndError>

              <Input
                control={control}
                name="name"
                icon="person"
                placeholder="Nome"
                returnKeyType="next"
                blurOnSubmit={false}
                hasError={!!errors.name}
                onSubmitEditing={() => emailInput.current?.focus()}
              />

              <Input
                control={control}
                name="email"
                icon="email"
                ref={emailInput}
                placeholder="Email"
                keyboardType="email-address"
                hasError={!!errors.email}
                returnKeyType="default"
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
