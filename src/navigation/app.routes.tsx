import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native'
import { Dimensions } from 'react-native'

import { AppRoutesParamList } from '../../types'
import RentIcon from '../components/RentIcon'
import Cars from '../screens/Cars'
import Reservations from '../screens/Reservations'
import colors from '../styles/colors'
import ProfileNavigator from './profile.routes'
import ReservationNavigator from './reservation.routes'

const BottomTab = createMaterialTopTabNavigator<AppRoutesParamList>()

const AppRoutes: React.FC = () => {
  const getTabBarVisibility = (route: Route<'Home', undefined>) => {
    const routeName = getFocusedRouteNameFromRoute(route)

    return routeName === 'Listing' || routeName === undefined
  }

  const getTabBarVisibilityForProfile = (
    route: Route<'Profile', undefined>
  ) => {
    const routeName = getFocusedRouteNameFromRoute(route)

    return routeName === 'Main' || routeName === undefined
  }

  const marginForIndicator = Dimensions.get('window').width / 8 - 4

  return (
    <BottomTab.Navigator
      sceneContainerStyle={{ backgroundColor: colors.black }}
      tabBarPosition="bottom"
      timingConfig={{ duration: 300 }}
      tabBarOptions={{
        showLabel: false,
        pressColor: 'transparent',
        indicatorStyle: {
          height: 4,
          alignContent: 'space-around',
          backgroundColor: colors.red,
          borderLeftWidth: marginForIndicator,
          borderRightWidth: marginForIndicator,
          borderColor: '#fff',

          marginBottom: 14
        },
        style: {
          height: 72,
          paddingTop: 5,
          backgroundColor: colors.white,
          borderTopColor: colors.grayLighter
        },
        activeTintColor: colors.red,
        inactiveTintColor: colors.graySecondary,
        showIcon: true,
        iconStyle: {
          width: 40,
          alignItems: 'center',
          height: 60
        }
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={ReservationNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color }) => (
            <RentIcon color={color} size={30} name="home"></RentIcon>
          )
        })}
      />
      <BottomTab.Screen
        name="Cars"
        component={Cars}
        options={{
          tabBarIcon: ({ color }) => (
            <RentIcon color={color} size={30} name="car"></RentIcon>
          )
        }}
      />
      <BottomTab.Screen
        name="Reservations"
        component={Reservations}
        options={{
          tabBarIcon: ({ color }) => (
            <RentIcon color={color} size={30} name="calendar"></RentIcon>
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibilityForProfile(route),
          tabBarIcon: ({ color }) => (
            <RentIcon color={color} size={30} name="person"></RentIcon>
          )
        })}
      />
    </BottomTab.Navigator>
  )
}

export default AppRoutes
