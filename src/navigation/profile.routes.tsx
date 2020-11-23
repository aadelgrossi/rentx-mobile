import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { ProfileParamList } from '../../types'
import RentIcon from '../components/RentIcon'
import { useAuth } from '../hooks/useAuth'
import Profile from '../screens/Profile'
import ChangePassword from '../screens/Profile/ChangePassword'
import ProfileInfo from '../screens/Profile/ProfileInfo'
import SignOutPrompt from '../screens/Profile/SignOutPrompt'
import UpdateConfirm from '../screens/Profile/UpdateConfirm'
import colors from '../styles/colors'

const ProfileStack = createStackNavigator<ProfileParamList>()

const ProfileNavigator: React.FC = () => {
  const { signOut } = useAuth()
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Main"
        component={Profile}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: 25
          },
          headerTitle: 'Perfil',
          headerTitleAlign: 'center',
          headerTintColor: colors.white,
          headerLeftContainerStyle: {
            marginLeft: 24
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileInfo')}
            >
              <RentIcon name="edit" color={colors.grayAccent} />
            </TouchableOpacity>
          ),
          headerRightContainerStyle: {
            marginRight: 24
          },
          headerRight: () => (
            <TouchableOpacity onPress={signOut}>
              <RentIcon name="power" color={colors.grayAccent} />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: colors.black,
            height: 100,
            elevation: 0,
            shadowOffset: {
              width: 0,
              height: 0
            }
          }
        })}
      />
      <ProfileStack.Screen name="ProfileInfo" component={ProfileInfo} />
      <ProfileStack.Screen name="ChangePassword" component={ChangePassword} />
      <ProfileStack.Screen name="UpdateConfirm" component={UpdateConfirm} />
      <ProfileStack.Screen name="SignOutPrompt" component={SignOutPrompt} />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
