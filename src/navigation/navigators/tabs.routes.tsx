import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Dimensions } from 'react-native'

import { RentIcon } from '~/components'
import { Cars, Home, UserReservations, ProfileSummary } from '~/screens'
import colors from '~/styles/colors'

import { TabRoutesParamList } from '../types'

const BottomTab = createMaterialTopTabNavigator<TabRoutesParamList>()

export const Tabs: React.FC = () => {
  const marginForIndicator = Dimensions.get('window').width / 8 - 4

  return (
    <BottomTab.Navigator
      sceneContainerStyle={{ backgroundColor: colors.black }}
      tabBarPosition="bottom"
      swipeEnabled={false}
      tabBarOptions={{
        showIcon: true,
        pressColor: 'transparent',
        showLabel: false,
        style: {
          height: 80,
          paddingTop: 10,
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: colors.grayLighter
        },
        activeTintColor: colors.red,
        inactiveTintColor: colors.graySecondary,
        indicatorStyle: {
          height: 3,
          backgroundColor: colors.red,
          marginBottom: 14,
          borderColor: colors.white,
          borderLeftWidth: marginForIndicator,
          borderRightWidth: marginForIndicator
        },
        iconStyle: {
          width: 40,
          alignItems: 'center',
          height: 60
        }
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <RentIcon color={color} name="home" />
        }}
      />
      <BottomTab.Screen
        name="Cars"
        component={Cars}
        options={{
          tabBarIcon: ({ color }) => <RentIcon color={color} name="car" />
        }}
      />
      <BottomTab.Screen
        name="Reservations"
        component={UserReservations}
        options={{
          tabBarIcon: ({ color }) => <RentIcon color={color} name="calendar" />
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileSummary}
        options={{
          tabBarIcon: ({ color }) => <RentIcon color={color} name="person" />
        }}
      />
    </BottomTab.Navigator>
  )
}
