import React from 'react'

import { useCachedResources } from '~/hooks'

import AppProvider from './src/contexts'
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
