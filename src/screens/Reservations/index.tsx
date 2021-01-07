import React from 'react'

import { useQuery } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'

import Card from '~/components/Card/Rental'
import GET_RENTALS from '~/graphql/rentals'

import { Container, Header, Title, ResultsCount, RentalsList } from './styles'

const Reservations: React.FC = () => {
  const { data } = useQuery<{ rentals: Rental[] }>(GET_RENTALS)

  return (
    <Container>
      <Header>
        <Title>Agendamentos</Title>
        <ResultsCount>
          {data?.rentals.length || 'Nenhum'} período(s)
        </ResultsCount>
      </Header>

      {data && (
        <RentalsList
          data={data.rentals}
          keyExtractor={({ id }: Rental) => id}
          renderItem={({ item }: { item: Rental }) => <Card {...item} />}
        />
      )}

      <StatusBar style="light" />
    </Container>
  )
}

export default Reservations
