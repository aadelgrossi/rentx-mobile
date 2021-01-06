import React, { useState } from 'react'

import { useQuery } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'

import { SearchInput } from '~/components/Input'

import Card from '../../components/Card/Small'
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
  const [query, setQuery] = useState('')
  const { data } = useQuery<{ cars: Car[] }>(GET_ALL_CARS, {
    variables: { filter: { fullName: query } }
  })

  return (
    <Container>
      <Header>
        <Title>Listagem</Title>
        <ResultsCount>{data?.cars.length || 'Nenhum'} carro(s)</ResultsCount>
      </Header>
      <Contents>
        <SearchInput
          style={{ marginTop: -32 }}
          placeholder="Qual carro você procura?"
          onChangeText={e => setQuery(e)}
          value={query}
        />
      </Contents>

      {data && (
        <CarsList
          data={data.cars}
          keyExtractor={({ id }: Car) => id}
          renderItem={({ item }: { item: Car }) => <Card {...item} />}
        />
      )}

      <StatusBar style="light" />
    </Container>
  )
}

export default Cars
