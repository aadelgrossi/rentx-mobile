import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthProvider, ApolloProvider } from '.'

const AppProvider: React.FC = ({ children }) => {
  return (
    <SafeAreaProvider>
      <ApolloProvider>
        <AuthProvider>{children}</AuthProvider>
      </ApolloProvider>
    </SafeAreaProvider>
  )
}

export default AppProvider
