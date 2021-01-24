import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { usePersistStorage } from 'react-native-use-persist-storage'

import { Welcome, SignIn, Onboarding } from '~/screens'

import { SignUpNavigator } from './navigators'
import { InitialRoutesParamList } from './types'

const Stack = createStackNavigator<InitialRoutesParamList>()

const InitialRoutes: React.FC = () => {
  const [hasRunBefore, _, restored] = usePersistStorage<boolean>(
    'RentX@HasRunBefore',
    false
  )

  return restored ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {!hasRunBefore && (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      )}
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerTintColor: '#fff' }}
      />
      <Stack.Screen name="SignUp" component={SignUpNavigator} />
    </Stack.Navigator>
  ) : null
}

export default InitialRoutes
