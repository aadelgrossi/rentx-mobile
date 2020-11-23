import React from 'react'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import RentIcon from '../../components/RentIcon'
import { useAuth } from '../../hooks/useAuth'
import colors from '../../styles/colors'
import {
  Container,
  Spacing,
  Contents,
  ProfileContainer,
  ProfilePicture,
  SwitchPicture,
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
          <SwitchPicture>
            <RentIcon name="photo" color={colors.white} size={24} />
          </SwitchPicture>
        </ProfileContainer>

        <UserName>{[user.firstName, user.lastName].join(' ')}</UserName>
        <InfoItem style={{ marginTop: 24 }}>
          <InfoTitle>Membro desde</InfoTitle>
          <InfoValue>
            {format(Date.parse(user.createdAt), "dd 'de' MMMM 'de' yyyy", {
              locale: ptBR
            })}
          </InfoValue>
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
