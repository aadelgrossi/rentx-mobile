import React from 'react'

import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'

import { Container } from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <Text>SignIn</Text>
      <StatusBar style="dark" />
    </Container>
  )
}

export default SignIn
