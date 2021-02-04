import React from 'react'

import { ProfilePicture } from '~/components'
import { FavoriteCarCard } from '~/components/Card'
import { USER_INFO } from '~/graphql'
import { useAuth } from '~/hooks'
import { formatLongDate } from '~/utils/formatDate'

import {
  Container,
  Spacing,
  EditProfileButton,
  LogOutButton,
  HeaderTitle,
  Contents,
  ProfileContainer,
  InfoItem,
  InfoTitle,
  InfoValue,
  Separator,
  FavoriteCarContainer,
  UserName,
  Header,
  Icon
} from './styles'
import { ProfileScreenProps } from './types'

export const ProfileSummary: React.FC<ProfileScreenProps> = ({
  navigation
}) => {
  const { user } = useAuth()

  return (
    <Container>
      <Header>
        <EditProfileButton
          onPress={() =>
            navigation.navigate('ProfileNavigator', { screen: 'ProfileInfo' })
          }
        >
          <Icon name="edit" />
        </EditProfileButton>
        <HeaderTitle>Perfil</HeaderTitle>
        <LogOutButton
          onPress={() =>
            navigation.navigate('ProfileNavigator', { screen: 'SignOutPrompt' })
          }
        >
          <Icon name="power" />
        </LogOutButton>
      </Header>
      <Spacing />
      <Contents>
        <ProfileContainer>
          <ProfilePicture />
        </ProfileContainer>

        <>
          <UserName>{user?.name}</UserName>
          <InfoItem style={{ marginTop: 24 }}>
            <InfoTitle>Membro desde</InfoTitle>
            <InfoValue>
              {user?.createdAt && formatLongDate(user?.createdAt)}
            </InfoValue>
          </InfoItem>

          <InfoItem style={{ marginTop: 24 }}>
            <InfoTitle>Agendamentos feitos</InfoTitle>
            <InfoValue>{user?.totalRentals || 0}</InfoValue>
          </InfoItem>

          <Separator />

          {user?.favoriteCar && (
            <FavoriteCarContainer>
              <InfoItem style={{ marginBottom: 16 }}>
                <InfoTitle>Carro favorito</InfoTitle>
                <InfoValue>
                  Utilizado {user?.favoriteCar.timesRented} vez
                  {user?.favoriteCar.timesRented > 1 && 'es'}
                </InfoValue>
              </InfoItem>

              <FavoriteCarCard {...user?.favoriteCar} />
            </FavoriteCarContainer>
          )}
        </>
      </Contents>
    </Container>
  )
}
