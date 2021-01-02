import React from 'react'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AuthProvider } from '.'

export const AppProvider: React.FC = ({ children }) => {
  const client = new ApolloClient({
    cache: new InMemoryCache(),

    uri: 'http://192.168.15.27:9002/graphql'
  })

  return (
    <SafeAreaProvider>
      <ApolloProvider client={client}>
        <AuthProvider>{children}</AuthProvider>
      </ApolloProvider>
    </SafeAreaProvider>
  )
}
