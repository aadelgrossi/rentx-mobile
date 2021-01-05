import React from 'react'

import FlashMessage from 'react-native-flash-message'

import AppProvider from '~/contexts/app'
import { useCachedResources } from '~/hooks'
import Navigation from '~/navigation'

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <AppProvider>
        <Navigation />
        <FlashMessage position="bottom" />
      </AppProvider>
    )
  }
}

export default App
