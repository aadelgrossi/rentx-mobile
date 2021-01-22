import React from 'react'

import { useQuery } from '@apollo/client'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ProfilePicture, RentIcon } from '~/components'
import { FavoriteCarCard } from '~/components/Card'
import { USER_INFO } from '~/graphql'
import { useAuth } from '~/hooks'
import { AppRoutesParamList, TabRoutesParamList } from '~/navigation/types'
import colors from '~/styles/colors'
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
  Header
} from './styles'

interface ProfileScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<TabRoutesParamList, 'Profile'>,
    StackNavigationProp<AppRoutesParamList>
  >
}

export const ProfileSummary: React.FC<ProfileScreenProps> = ({
  navigation
}) => {
  const {
    user: { name, createdAt }
  } = useAuth()

  const { data } = useQuery<{ me: User }>(USER_INFO)

  return (
    <Container>
      <Header>
        <EditProfileButton
          onPress={() =>
            navigation.navigate('ProfileNavigator', { screen: 'ProfileInfo' })
          }
        >
          <RentIcon name="edit" color={colors.grayAccent} />
        </EditProfileButton>
        <HeaderTitle>Perfil</HeaderTitle>
        <LogOutButton
          onPress={() =>
            navigation.navigate('ProfileNavigator', { screen: 'SignOutPrompt' })
          }
        >
          <RentIcon name="power" color={colors.grayAccent} />
        </LogOutButton>
      </Header>
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

                <FavoriteCarCard {...data.me.favoriteCar} />
              </FavoriteCarContainer>
            )}
          </>
        )}
      </Contents>
    </Container>
  )
}