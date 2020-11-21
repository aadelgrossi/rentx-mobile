import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { InitialRoutesParamList } from '../../types'
import SignIn from '../screens/SignIn'
import Splash from '../screens/Splash'

const Stack = createStackNavigator<InitialRoutesParamList>()

const InitialRoutes: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  )
}

export default InitialRoutes
