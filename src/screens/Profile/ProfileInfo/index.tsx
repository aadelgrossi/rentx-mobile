import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { Dimensions } from 'react-native'
import {
  SceneMap,
  TabBar,
  TabView,
  SceneRendererProps,
  NavigationState,
  Route
} from 'react-native-tab-view'

import ProfilePicture from '~/components/ProfilePicture'
import RentIcon from '~/components/RentIcon'
import colors from '~/styles/colors'

import {
  Container,
  Spacing,
  Contents,
  ProfileContainer,
  SwitchPicture,
  SubmitButton,
  TabBarTitle
} from './styles'
import UpdateInfo from './UpdateInfo'
import UpdatePassword from './UpdatePassword'

const ProfileInfo: React.FC = () => {
  const navigation = useNavigation()

  const { width: screenWidth } = Dimensions.get('screen')

  const [index, setIndex] = useState(0)
  const [routes] = useState([
    {
      key: 'updateInfo',
      title: 'Dados '
    },
    { key: 'updatePassword', title: 'Senha ' }
  ])

  const renderScene = SceneMap({
    updateInfo: UpdateInfo,
    updatePassword: UpdatePassword
  })

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<Route>
    }
  ) => (
    <TabBar
      {...props}
      indicatorStyle={{
        backgroundColor: colors.red,
        width: 54,
        position: 'absolute',
        marginLeft: screenWidth / 6.4,
        height: 2
      }}
      style={{ backgroundColor: colors.white, elevation: 0 }}
      renderLabel={({ route, focused }) => (
        <TabBarTitle focused={focused}>{route.title}</TabBarTitle>
      )}
    />
  )

  return (
    <Container>
      <Spacing />
      <Contents>
        <ProfileContainer>
          <ProfilePicture />
          <SwitchPicture>
            <RentIcon name="photo" color={colors.white} size={24} />
          </SwitchPicture>
        </ProfileContainer>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          sceneContainerStyle={{ marginTop: 24, marginBottom: 24 }}
          initialLayout={{ width: Dimensions.get('window').width }}
        />

        <SubmitButton onPress={() => navigation.navigate('UpdateConfirm')}>
          Salvar alterações
        </SubmitButton>
      </Contents>
    </Container>
  )
}

export default ProfileInfo
