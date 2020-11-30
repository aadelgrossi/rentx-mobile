import React from 'react'

import { useAuth } from '../../hooks/useAuth'
import { formatLongDate } from '../../utils/formatDate'
import {
  Container,
  Spacing,
  Contents,
  ProfileContainer,
  ProfilePicture,
  InfoItem,
  InfoTitle,
  InfoValue,
  Separator,
  FavoriteCarContainer,
  CarCard,
  UserName
} from './styles'

const Profile: React.FC = () => {
  const { user } = useAuth()
  return (
    <Container>
      <Spacing />
      <Contents>
        <ProfileContainer>
          <ProfilePicture
            source={{
              uri: user.avatar.url
            }}
          />
        </ProfileContainer>

        <UserName>{user.name}</UserName>
        <InfoItem style={{ marginTop: 24 }}>
          <InfoTitle>Membro desde</InfoTitle>
          <InfoValue>{formatLongDate(user.createdAt)}</InfoValue>
        </InfoItem>
        <InfoItem style={{ marginTop: 24 }}>
          <InfoTitle>Agendamentos feitos</InfoTitle>
          <InfoValue>05</InfoValue>
        </InfoItem>

        <Separator />

        <FavoriteCarContainer>
          <InfoItem style={{ marginBottom: 16 }}>
            <InfoTitle>Carro favorito</InfoTitle>
            <InfoValue>Utilizado 02 vezes</InfoValue>
          </InfoItem>

          <CarCard />
        </FavoriteCarContainer>
      </Contents>
    </Container>
  )
}

export default Profile
