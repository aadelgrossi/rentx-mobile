import React from 'react'

import { useQuery } from '@apollo/client'

import Card from '~/components/Card/FavoriteCar'
import ProfilePicture from '~/components/ProfilePicture'
import { USER_INFO } from '~/graphql/user'
import { useAuth } from '~/hooks/useAuth'
import { formatLongDate } from '~/utils/formatDate'

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
  const {
    user: { name, createdAt }
  } = useAuth()

  const { data } = useQuery<{ me: User }>(USER_INFO)

  return (
    <Container>
      <Spacing />
      <Contents>
        <ProfileContainer>
          <ProfilePicture />
        </ProfileContainer>

        <UserName>{name}</UserName>
        <InfoItem style={{ marginTop: 24 }}>
          <InfoTitle>Membro desde</InfoTitle>
          <InfoValue>{formatLongDate(createdAt)}</InfoValue>
        </InfoItem>
        {data && (
          <>
            <InfoItem style={{ marginTop: 24 }}>
              <InfoTitle>Agendamentos feitos</InfoTitle>
              <InfoValue>{data.me.totalRentals || 0}</InfoValue>
            </InfoItem>

            <Separator />

            {data.me.favoriteCar && (
              <FavoriteCarContainer>
                <InfoItem style={{ marginBottom: 16 }}>
                  <InfoTitle>Carro favorito</InfoTitle>
                  <InfoValue>
                    Utilizado {data.me.favoriteCar.timesRented} vezes
                  </InfoValue>
                </InfoItem>

                <Card {...data.me.favoriteCar} />
              </FavoriteCarContainer>
            )}
          </>
        )}
      </Contents>
    </Container>
  )
}

export default Profile
