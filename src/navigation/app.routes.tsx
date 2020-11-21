import React from 'react'

import { Feather, AntDesign } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import styled from 'styled-components/native'

import { AppRoutesParamList } from '../../types'
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
          backgroundColor: Colors.tabBarBackground,
          borderTopColor: Colors.graySecondary
        },
        activeTintColor: Colors.accent
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) =>
            resolveIcon({ color, focused, family: 'ant', name: 'home' })
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, focused }) =>
            resolveIcon({ color, focused, family: 'ant', name: 'car' })
        }}
      />
      <BottomTab.Screen
        name="Booked"
        component={Booked}
        options={{
          tabBarIcon: ({ color, focused }) =>
            resolveIcon({ color, focused, family: 'feather', name: 'calendar' })
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, focused }) =>
            resolveIcon({ color, focused, family: 'feather', name: 'user' })
        }}
      />
    </BottomTab.Navigator>
  )
}

interface TabIconProps {
  family: string
  name: string
  color: string
  focused: boolean
}

const BottomHighlight = styled.View`
  position: absolute;
  background-color: ${Colors.accent};
  width: 6px;
  height: 3px;
  bottom: -6px;
  right: 12px;
`

const IconWrapper = styled.View`
  position: relative;
`

function resolveIcon({ family, name, color, focused }: TabIconProps) {
  return (
    <IconWrapper>
      {family === 'feather' && <Feather name={name} color={color} size={30} />}
      {family === 'ant' && <AntDesign name={name} color={color} size={30} />}
      {focused && <BottomHighlight />}
    </IconWrapper>
  )
}

export default AppRoutes
