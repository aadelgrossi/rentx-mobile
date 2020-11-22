import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'

import rentXSymbol from '../../assets/logo/symbol.png'
import Button from '../../components/Button'
import {
  Container,
  Contents,
  Title,
  Text,
  Actions,
  ButtonText
  // BackButton,
  // BackButtonText
} from './styles'

const Welcome: React.FC = () => {
  const navigation = useNavigation()

  return (
    <Container>
      <Contents>
        <Image source={rentXSymbol}></Image>
        <Title>Seja {'\n'} Bem-vindo</Title>
        <Text>O que você deseja fazer?</Text>

        <Actions>
          <Button onPress={() => navigation.navigate('SignIn')}>
            <ButtonText>Login</ButtonText>
          </Button>
          <Button variant onPress={() => navigation.navigate('SignUp')}>
            <ButtonText>Cadastre-se</ButtonText>
          </Button>
        </Actions>

        {/* <BackButton>
          <BackButtonText>Voltar</BackButtonText>
        </BackButton> */}
      </Contents>
      <StatusBar />
    </Container>
  )
}

export default Welcome
