import React, { useState } from 'react'

import { useQuery } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'
import { useDebounce } from 'use-debounce'

import { SmallCardSkeletonList } from '~/components'
import { SmallCard } from '~/components/Card'
import { SearchInput } from '~/components/Input'
import { CARS } from '~/graphql'

import {
  Container,
  Header,
  Title,
  ResultsCount,
  Contents,
  CarsList,
  Results
} from './styles'

export const Cars: React.FC = () => {
  const [query, setQuery] = useState('')
  const [debouncedValue] = useDebounce(query, 500)
  const { data, loading } = useQuery<{ cars: Car[] }>(CARS, {
    variables: { filter: { fullName: debouncedValue } }
  })

  return (
    <Container>
      <Header>
        <Title>Listagem</Title>
        <ResultsCount>
          {loading && 'Buscando...'}
          {data?.cars.length ? `${data.cars.length} carro(s)` : 'Nenhum carro'}
        </ResultsCount>
      </Header>
      <Contents>
        <SearchInput
          style={{ marginTop: -32 }}
          placeholder="Qual carro você procura?"
          onChangeText={e => setQuery(e)}
          value={query}
        />
      </Contents>

      <Results>
        {loading && <SmallCardSkeletonList />}
        {data && (
          <CarsList
            data={data.cars}
            keyExtractor={({ id }: Car) => id}
            renderItem={({ item }: { item: Car }) => <SmallCard {...item} />}
          />
        )}
      </Results>

      <StatusBar style="light" />
    </Container>
  )
}
