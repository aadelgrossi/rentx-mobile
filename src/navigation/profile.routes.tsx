import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'

import ProfileInfo from '../screens/Profile/ProfileInfo'
import SignOutPrompt from '../screens/Profile/SignOutPrompt'
import UpdateConfirm from '../screens/Profile/UpdateConfirm'
import colors from '../styles/colors'
import { ProfileParamList } from './types'

const ProfileStack = createStackNavigator<ProfileParamList>()

const ProfileNavigator: React.FC = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <ProfileStack.Screen
        name="ProfileInfo"
        component={ProfileInfo}
        options={({ navigation }) => ({
          headerTitleStyle: {
            fontSize: 25
          },
          headerTitle: 'Editar Perfil',
          headerTitleAlign: 'center',
          headerTintColor: colors.white,
          headerLeftContainerStyle: {
            marginLeft: 24
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name="keyboard-arrow-left"
                color={colors.grayAccent}
                size={24}
              />
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
      <ProfileStack.Screen
        name="UpdateConfirm"
        component={UpdateConfirm}
        options={{ headerShown: false }}
      />
      <ProfileStack.Screen
        name="SignOutPrompt"
        component={SignOutPrompt}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  )
}

export default ProfileNavigator
