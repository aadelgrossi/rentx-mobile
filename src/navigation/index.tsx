import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { useAuth } from '../hooks/useAuth'
import AppRoutes from './app.routes'
import InitialRoutes from './initial.routes'

const Navigation: React.FC = () => {
  const { isAuthorized } = useAuth()

  return (
    <NavigationContainer>
      {isAuthorized ? <AppRoutes /> : <InitialRoutes />}
    </NavigationContainer>
  )
}

export default Navigation
