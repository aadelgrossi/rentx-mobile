import React from 'react'

import { useQuery } from '@apollo/client'
import { StatusBar } from 'expo-status-bar'

import { RentalCard } from '~/components/Card'
import { RentalCardSkeletonList } from '~/components/Card/Rental/Skeleton'
import { GET_RENTALS } from '~/graphql/rentals'

import {
  Container,
  Header,
  Title,
  ResultsCount,
  RentalsList,
  Content
} from './styles'

export const UserReservations: React.FC = () => {
  const { data, loading } = useQuery<{ rentals: Rental[] }>(GET_RENTALS)

  return (
    <Container>
      <Header>
        <Title>Agendamentos</Title>
        <ResultsCount>
          {data?.rentals.length || 'Nenhum'} período(s)
        </ResultsCount>
      </Header>

      <Content>
        {loading && <RentalCardSkeletonList />}

        {data && (
          <RentalsList
            data={data.rentals}
            keyExtractor={({ id }: Rental) => id}
            renderItem={({ item }: { item: Rental }) => (
              <RentalCard {...item} />
            )}
          />
        )}
      </Content>

      <StatusBar style="light" />
    </Container>
  )
}
