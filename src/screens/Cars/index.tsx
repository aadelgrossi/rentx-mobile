import React from 'react'

import { useQuery } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'

import Card from '../../components/Card/Small'
import SearchInput from '../../components/SearchInput'
import GET_ALL_CARS from '../../graphql/cars'
import {
  Container,
  Header,
  Title,
  ResultsCount,
  Contents,
  CarsList
} from './styles'

const Cars: React.FC = () => {
  const { data } = useQuery<{ cars: Car[] }>(GET_ALL_CARS)

  return (
    <Container>
      <Header>
        <Title>Listagem</Title>
        <ResultsCount>{data?.cars.length} carros</ResultsCount>
      </Header>
      <Contents>
        <SearchInput
          style={{ marginTop: -32 }}
          placeholder="Qual carro você procura?"
        ></SearchInput>
      </Contents>

      <CarsList>
        {data?.cars.map(car => (
          <Card key={car.id} {...car} />
        ))}
      </CarsList>

      <StatusBar style="light" />
    </Container>
  )
}

export default Cars
