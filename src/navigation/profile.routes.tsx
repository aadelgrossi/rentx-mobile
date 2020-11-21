import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { ProfileParamList } from '../../types'
import Profile from '../screens/Profile'
import ChangePassword from '../screens/Profile/ChangePassword'
import ProfileInfo from '../screens/Profile/ProfileInfo'
import SignOutPrompt from '../screens/Profile/SignOutPrompt'
import UpdateConfirm from '../screens/Profile/UpdateConfirm'
import colors from '../styles/colors'

const ProfileStack = createStackNavigator<ProfileParamList>()

const ProfileNavigator: React.FC = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Main"
        component={Profile}
        options={{
          headerStyle: { backgroundColor: colors.black },
          headerTintColor: colors.white
        }}
      />
      <ProfileStack.Screen name="ProfileInfo" component={ProfileInfo} />
      <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
      <ProfileStack.Screen name="UpdateConfirm" component={UpdateConfirm} />
      <ProfileStack.Screen name="SignOutPrompt" component={SignOutPrompt} />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
