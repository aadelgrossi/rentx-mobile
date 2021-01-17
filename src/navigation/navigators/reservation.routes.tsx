import React from 'react'

import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'

import { CarDetails, ConfirmReservation } from '~/screens'

import { ReservationParamList } from '../types'

const Stack = createStackNavigator<ReservationParamList>()

export const ReservationNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="ConfirmReservation" component={ConfirmReservation} />
    </Stack.Navigator>
  )
}
