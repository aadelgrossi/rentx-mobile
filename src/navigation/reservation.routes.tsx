import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { ReservationParamList } from '../../types'
import CarDetails from '../screens/CarDetails'
import ConfirmReservation from '../screens/ConfirmReservation'
import Home from '../screens/Home'

const Stack = createStackNavigator<ReservationParamList>()

const ReservationNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Listing" component={Home} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="ConfirmReservation" component={ConfirmReservation} />
    </Stack.Navigator>
  )
}

export default ReservationNavigator
