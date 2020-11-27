import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AppRoutesParamList } from '../../types'
import IconWrapper from '../components/IconWrapper'
import RentIcon from '../components/RentIcon'
import Cars from '../screens/Cars'
import Reservations from '../screens/Reservations'
import colors from '../styles/colors'
import ProfileNavigator from './profile.routes'
import ReservationNavigator from './reservation.routes'

const BottomTab = createBottomTabNavigator<AppRoutesParamList>()

const AppRoutes: React.FC = () => {
  return (
    <BottomTab.Navigator
      sceneContainerStyle={{ backgroundColor: colors.black }}
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 70,
          backgroundColor: colors.white,
          borderTopColor: colors.grayLighter
        },
        activeTintColor: colors.red,
        inactiveTintColor: colors.graySecondary,
        keyboardHidesTabBar: true
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={ReservationNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <RentIcon color={color} size={30} name="home"></RentIcon>
            </IconWrapper>
          )
        }}
      />
      <BottomTab.Screen
        name="Cars"
        component={Cars}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <RentIcon color={color} size={30} name="car"></RentIcon>
            </IconWrapper>
          )
        }}
      />
      <BottomTab.Screen
        name="Reservations"
        component={Reservations}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <RentIcon color={color} size={30} name="calendar"></RentIcon>
            </IconWrapper>
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <RentIcon color={color} size={30} name="person"></RentIcon>
            </IconWrapper>
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

export default AppRoutes
