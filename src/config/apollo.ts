import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'http://192.168.0.153:3333/graphql'
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
