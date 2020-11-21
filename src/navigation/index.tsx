import React, { useState } from 'react'

import { NavigationContainer } from '@react-navigation/native'

import AppRoutes from './app.routes'
import InitialRoutes from './initial.routes'

const Navigation: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppRoutes /> : <InitialRoutes />}
    </NavigationContainer>
  )
}

export default Navigation
