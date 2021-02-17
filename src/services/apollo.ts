import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

import { config } from '~/constants'

const httpLink = new HttpLink({
  uri: config.apiHost
})

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  if (apolloClient) {
    return apolloClient
  }

  apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink
  })

  return apolloClient
}

export { getApolloClient, httpLink }
