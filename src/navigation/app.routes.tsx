import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from '../../types'
import NotFoundScreen from '../screens/NotFoundScreen'
import Splash from '../screens/Splash'
import BottomTabNavigator from './BottomTabNavigator'

const App = createStackNavigator<RootStackParamList>()

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Splash" component={Splash} />
      <App.Screen name="Root" component={BottomTabNavigator} />
      <App.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </App.Navigator>
  )
}

export default AppRoutes
