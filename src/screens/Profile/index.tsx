import React from 'react'

import { useQuery } from '@apollo/client'
import { NavigationProp } from '@react-navigation/native'

import Card from '~/components/Card/FavoriteCar'
import ProfilePicture from '~/components/ProfilePicture'
import RentIcon from '~/components/RentIcon'
import { USER_INFO } from '~/graphql/user'
import { useAuth } from '~/hooks/useAuth'
import { AppRoutesParamList } from '~/navigation/types'
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

const Profile: React.FC<{
  navigation: NavigationProp<AppRoutesParamList, 'Tabs'>
}> = ({ navigation }) => {
  const {
    user: { name, createdAt },
    signOut
  } = useAuth()

  const { data } = useQuery<{ me: User }>(USER_INFO)

  return (
    <Container>
      <Header>
        <EditProfileButton
          onPress={() => navigation.navigate('ProfileNavigator')}
        >
          <RentIcon name="edit" color={colors.grayAccent} />
        </EditProfileButton>
        <HeaderTitle>Perfil</HeaderTitle>
        <LogOutButton onPress={() => signOut()}>
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
