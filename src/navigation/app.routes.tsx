import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native'

// import TabBar from '~/components/TabBar'

import TabBarIcon from '~/components/TabBarIcon'

import { AppRoutesParamList } from '../../types'
import Cars from '../screens/Cars'
import UserReservations from '../screens/Reservations'
import colors from '../styles/colors'
import ProfileNavigator from './profile.routes'
import ReservationNavigator from './reservation.routes'

const BottomTab = createBottomTabNavigator<AppRoutesParamList>()

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

  return (
    <BottomTab.Navigator
      sceneContainerStyle={{ backgroundColor: colors.black }}
      // screenOptions={{ tabBarVisible: false }}
      // tabBar={props => <TabBar {...props} />}
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 80,
          backgroundColor: colors.white,
          borderTopColor: colors.grayLighter
        },
        activeTintColor: colors.red,
        inactiveTintColor: colors.graySecondary,
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
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} name="home" />
          )
        })}
      />
      <BottomTab.Screen
        name="Cars"
        component={Cars}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} name="car" />
          )
        }}
      />
      <BottomTab.Screen
        name="Reservations"
        component={UserReservations}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} name="calendar" />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisibilityForProfile(route),
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon color={color} focused={focused} name="person" />
          )
        })}
      />
    </BottomTab.Navigator>
  )
}

export default AppRoutes
