import React from 'react'

import { StatusBar } from 'expo-status-bar'

import { Container, Header, Title } from './styles'

const Search: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Search</Title>
      </Header>
      <StatusBar style="light" />
    </Container>
  )
}

export default Search
