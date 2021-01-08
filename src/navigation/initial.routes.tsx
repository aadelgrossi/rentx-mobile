import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import SignIn from '../screens/SignIn'
import Welcome from '../screens/Welcome'
import SignUpNavigator from './signup.routes'
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
