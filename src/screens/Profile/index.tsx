import React from 'react'

import { useQuery } from '@apollo/client'

import ProfilePicture from '~/components/ProfilePicture'

import Card from '../../components/Card/Rental/UpperCardContent'
import USER_RENTALS from '../../graphql/rentals'
import { useAuth } from '../../hooks/useAuth'
import { formatLongDate } from '../../utils/formatDate'
import {
  Container,
  Spacing,
  Contents,
  ProfileContainer,
  InfoItem,
  InfoTitle,
  InfoValue,
  Separator,
  FavoriteCarContainer,
  UserName
} from './styles'

const Profile: React.FC = () => {
  const { user } = useAuth()
  const { data } = useQuery<{ rentals: Rental[] }>(USER_RENTALS)

  return (
    <Container>
      <Spacing />
      <Contents>
        <ProfileContainer>
          <ProfilePicture />
        </ProfileContainer>

        <UserName>{user.name}</UserName>
        <InfoItem style={{ marginTop: 24 }}>
          <InfoTitle>Membro desde</InfoTitle>
          <InfoValue>{formatLongDate(user.createdAt)}</InfoValue>
        </InfoItem>
        <InfoItem style={{ marginTop: 24 }}>
          <InfoTitle>Agendamentos feitos</InfoTitle>
          <InfoValue>{data?.rentals || 0}</InfoValue>
        </InfoItem>

        <Separator />

        {data && (
          <FavoriteCarContainer>
            <InfoItem style={{ marginBottom: 16 }}>
              <InfoTitle>Carro favorito</InfoTitle>
              <InfoValue>Utilizado {data?.rentals.length} vezes</InfoValue>
            </InfoItem>

            <Card {...data.rentals[0]} />
          </FavoriteCarContainer>
        )}
      </Contents>
    </Container>
  )
}

export default Profile
