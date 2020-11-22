import React from 'react'

import { Image } from 'react-native'

import rentXSymbol from '../../assets/logo/symbol.png'
import {
  Container,
  Contents,
  Title,
  Text,
  Actions,
  LogInButton,
  SignUpButton,
  ButtonText,
  BackButton,
  BackButtonText
} from './styles'

const Welcome: React.FC = () => {
  return (
    <Container>
      <Contents>
        <Image source={rentXSymbol}></Image>
        <Title>Seja {'\n'} Bem-vindo</Title>
        <Text>O que você deseja fazer?</Text>

        <Actions>
          <LogInButton>
            <ButtonText>Login</ButtonText>
          </LogInButton>
          <SignUpButton>
            <ButtonText>Cadastre-se</ButtonText>
          </SignUpButton>
        </Actions>

        <BackButton>
          <BackButtonText>Voltar</BackButtonText>
        </BackButton>
      </Contents>
    </Container>
  )
}

export default Welcome
