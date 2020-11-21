import React from 'react'

import { StatusBar } from 'expo-status-bar'

import { Container, Header } from './styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header>Home</Header>
      <StatusBar style="light" />
    </Container>
  )
}

export default Home
