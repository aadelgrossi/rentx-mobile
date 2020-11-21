import React from 'react'

import { AntDesign, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { AppRoutesParamList } from '../../types'
import IconWrapper from '../components/IconWrapper'
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
              <AntDesign name="home" size={30} color={color}></AntDesign>
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
              <AntDesign name="car" size={30} color={color}></AntDesign>
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
              <Feather name="calendar" size={30} color={color}></Feather>
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
              <Feather name="user" size={30} color={color}></Feather>
            </IconWrapper>
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

export default AppRoutes
