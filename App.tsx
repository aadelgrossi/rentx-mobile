import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from './src/hooks/useCachedResources'
import Navigation from './src/navigation'

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    )
  }
}

export default App
