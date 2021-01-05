import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getApolloClient = () => {
  if (apolloClient) {
    return apolloClient
  }

  apolloClient = new ApolloClient({
    cache: new InMemoryCache(),

    uri: 'http://192.168.0.153:3333/graphql'
  })

  return apolloClient
}
