import React, { useState } from 'react'

import {
  SceneMap,
  TabBar,
  TabView,
  SceneRendererProps,
  NavigationState,
  Route
} from 'react-native-tab-view'

import { UploadProfilePicture } from '~/components/UploadProfilePicture'
import colors from '~/styles/colors'

import {
  Container,
  Spacing,
  Contents,
  ProfileContainer,
  TabBarTitle
} from './styles'
import UpdateInfo from './UpdateInfoTab'
import UpdatePassword from './UpdatePasswordTab'

export const ProfileInfo: React.FC = () => {
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
        backgroundColor: colors.red
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
          <UploadProfilePicture />
        </ProfileContainer>

        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
          sceneContainerStyle={{ marginTop: 24 }}
        />
      </Contents>
    </Container>
  )
}
