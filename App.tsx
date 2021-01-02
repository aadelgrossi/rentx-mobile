import React from 'react'

import { AppProvider } from '~/contexts'
import { useCachedResources } from '~/hooks'

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
