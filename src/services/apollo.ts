import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

const httpLink = new HttpLink({
  uri: process.env.API_URL
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
