import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { ProfileParamList } from '../../types'
import RentIcon from '../components/RentIcon'
import Profile from '../screens/Profile'
// import ChangePassword from '../screens/Profile/ChangePassword'
import ProfileInfo from '../screens/Profile/ProfileInfo'
import SignOutPrompt from '../screens/Profile/SignOutPrompt'
import UpdateConfirm from '../screens/Profile/UpdateConfirm'
import colors from '../styles/colors'

const ProfileStack = createStackNavigator<ProfileParamList>()

const ProfileNavigator: React.FC = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
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
            <TouchableOpacity
              onPress={() => navigation.navigate('SignOutPrompt')}
            >
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
      {/* <ProfileStack.Screen name="ChangePassword" component={ChangePassword} /> */}
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
