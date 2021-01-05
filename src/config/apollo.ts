import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

const httpLink = new HttpLink({ uri: 'http://192.168.0.153:3333/graphql' })

const authLink = new ApolloLink((operation, forward) => {
  AsyncStorage.getItem('@RentX:token').then(token => {
    console.log('trying to get token. got', token)
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  })

  return forward(operation)
})

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

function getApolloClient(): ApolloClient<NormalizedCacheObject> {
  if (apolloClient) {
    return apolloClient
  }

  apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  })

  return apolloClient
}

export { getApolloClient }
