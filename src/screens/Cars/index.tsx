import React, { useState } from 'react'

import { useQuery } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'

import { SmallCard } from '~/components/Card'
import { SearchInput } from '~/components/Input'
import { CARS } from '~/graphql'

import {
  Container,
  Header,
  Title,
  ResultsCount,
  Contents,
  CarsList
} from './styles'

export const Cars: React.FC = () => {
  const [query, setQuery] = useState('')
  const { data } = useQuery<{ cars: Car[] }>(CARS, {
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
          renderItem={({ item }: { item: Car }) => <SmallCard {...item} />}
        />
      )}

      <StatusBar style="light" />
    </Container>
  )
}
