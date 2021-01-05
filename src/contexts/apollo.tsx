import React from 'react'

import { ApolloProvider as Provider } from '@apollo/client'

import { getApolloClient } from '~/config/apollo'

export const ApolloProvider: React.FC = ({ children }) => (
  <Provider client={getApolloClient()}>{children}</Provider>
)
