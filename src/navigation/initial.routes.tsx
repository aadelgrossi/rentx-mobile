import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from '../../types'
import Splash from '../screens/Splash'

const Initial = createStackNavigator<RootStackParamList>()

const InitialRoutes: React.FC = () => {
  return (
    <Initial.Navigator screenOptions={{ headerShown: false }}>
      <Initial.Screen name="Splash" component={Splash} />
    </Initial.Navigator>
  )
}

export default InitialRoutes
