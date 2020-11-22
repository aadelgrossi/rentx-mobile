import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'

import doneIndicator from '../../../assets/done.png'
import bgLogo from '../../../assets/logo/bg.png'
import Button from '../../../components/Button'
import { Container, BackgroundImage, Contents, Title, Text } from './styles'

const Confirm: React.FC = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <BackgroundImage source={bgLogo} />
      <Contents>
        <Image source={doneIndicator}></Image>

        <Title>Conta criada!</Title>
        <Text>Entre agora com sua conta para aproveitar.</Text>
        <Button
          style={{ marginTop: 'auto' }}
          variant
          onPress={() => navigation.navigate('SignIn')}
        >
          Retornar para o login
        </Button>
      </Contents>
      <StatusBar style="light" />
    </Container>
  )
}

export default Confirm
