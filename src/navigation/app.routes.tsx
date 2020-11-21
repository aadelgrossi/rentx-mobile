import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AppRoutesParamList } from '../../types'
import IconWrapper from '../components/IconWrapper'
import RentIcon from '../components/RentIcon'
import Colors from '../constants/Colors'
import Booked from '../screens/Booked'
import Home from '../screens/Home'
import Search from '../screens/Search'
import ProfileNavigator from './profile.routes'

const BottomTab = createBottomTabNavigator<AppRoutesParamList>()

const AppRoutes: React.FC = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 60,
          backgroundColor: Colors.background,
          borderTopColor: Colors.graySecondary
        },
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.tabIconDefault
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <RentIcon color={color} size={30} name="home"></RentIcon>
            </IconWrapper>
          )
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconWrapper focused={focused}>
              <RentIcon color={color} size={30} name="car"></RentIcon>
            </IconWrapper>
          )
        }}
      />
      <BottomTab.Screen
        name="Booked"
        component={Booked}
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