import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import RentIcon from '../../components/RentIcon'
import { useAuth } from '../../hooks/useAuth'
import colors from '../../styles/colors'
import {
  Container,
  Header,
  HeaderTitle,
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
  const { user, signOut } = useAuth()
  const navigation = useNavigation()
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileInfo')}>
          <RentIcon name="edit" color={colors.grayAccent} />
        </TouchableOpacity>
        <HeaderTitle>Perfil</HeaderTitle>
        <TouchableOpacity onPress={signOut}>
          <RentIcon name="power" color={colors.grayAccent} />
        </TouchableOpacity>
      </Header>
      <Contents>
        <ProfileContainer>
          <ProfilePicture
            source={{
              uri: user.avatar.url
            }}
          />
          <SwitchPicture>
            <RentIcon name="photo" color={colors.white} />
          </SwitchPicture>
        </ProfileContainer>

        <UserName>{[user.firstName, user.lastName].join(' ')}</UserName>
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
