import React from 'react'

import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'
import { usePersistStorage } from 'react-native-use-persist-storage'

import { SelectDate } from '~/screens'

import { ProfileNavigator, ReservationNavigator, Tabs } from './navigators'
import { AppRoutesParamList } from './types'

const Stack = createStackNavigator<AppRoutesParamList>()

const AppRoutes: React.FC = () => {
  const [hasRunBefore, _, restored] = usePersistStorage<boolean>(
    'RentX@HasRunBefore',
    false
  )

  return restored ? (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      {!hasRunBefore && (
        <Stack.Screen name="SelectDate" component={SelectDate} />
      )}
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
      <Stack.Screen
        name="CreateReservationNavigator"
        component={ReservationNavigator}
      />
    </Stack.Navigator>
  ) : null
}

export default AppRoutes
