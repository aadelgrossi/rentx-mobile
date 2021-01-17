import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { Welcome, SignIn } from '~/screens'

import { SignUpNavigator } from './navigators'
import { InitialRoutesParamList } from './types'

const Stack = createStackNavigator<InitialRoutesParamList>()

const InitialRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false
      }}
    >
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerTintColor: '#fff' }}
      />
      <Stack.Screen name="SignUp" component={SignUpNavigator} />
    </Stack.Navigator>
  )
}

export default InitialRoutes
