import React, { useState } from 'react'

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from '@react-navigation/native'
import { ColorSchemeName } from 'react-native'

import AppRoutes from './app.routes'
import InitialRoutes from './initial.routes'

interface NavigationProps {
  colorScheme: ColorSchemeName
}

const Navigation: React.FC<NavigationProps> = ({ colorScheme }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {isLoggedIn ? <AppRoutes /> : <InitialRoutes />}
    </NavigationContainer>
  )
}

export default Navigation
