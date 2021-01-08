import React from 'react'

import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'

import ProfileNavigator from './profile.routes'
import ReservationNavigator from './reservation.routes'
import Tabs from './tabs.routes'
import { AppRoutesParamList } from './types'

const Stack = createStackNavigator<AppRoutesParamList>()

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen
        name="CreateReservationNavigator"
        component={ReservationNavigator}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes
