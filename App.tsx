import React from 'react'

import AppProvider from './src/contexts'
import useCachedResources from './src/hooks/useCachedResources'
import Navigation from './src/navigation'

const App: React.FC = () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <AppProvider>
        <Navigation />
      </AppProvider>
    )
  }
}

export default App
