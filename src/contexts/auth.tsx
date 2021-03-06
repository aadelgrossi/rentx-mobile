import React, { createContext, useCallback, useState, useEffect } from 'react'

import { ApolloLink, useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AUTH_TOKEN_KEY } from '~/constants/async_storage_keys'
import { USER_INFO, SIGN_IN } from '~/graphql'
import { getApolloClient, httpLink } from '~/services/apollo'

import { AuthState, SignInCredentials } from './auth.types'

interface AuthorizationParams {
  accessToken: string
  user?: User
}

export interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  authorizeWith(data: AuthorizationParams): void
  updateUserInfo(user: User): void
  isAuthorized: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [user, setUser] = useState<User>({} as User)

  const [fetchUserInfoFromServer, { data: userData }] = useLazyQuery<{
    me: User
  }>(USER_INFO, { fetchPolicy: 'cache-and-network' })

  const [createSession] = useMutation<
    { signin: AuthState },
    { credentials: SignInCredentials }
  >(SIGN_IN)

  const setApolloHeaders = useCallback((token: string) => {
    const authLink = new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`
        }
      })

      return forward(operation)
    })

    getApolloClient().setLink(authLink.concat(httpLink))
  }, [])

  const updateUserInfo = useCallback((newInfo: User) => {
    setUser(prevState => ({ ...prevState, ...newInfo }))
  }, [])

  const authorizeWith = useCallback(
    async ({ accessToken, user }: AuthorizationParams) => {
      // add token to Apollo headers
      setApolloHeaders(accessToken)
      setIsAuthorized(true)

      await AsyncStorage.setItem(AUTH_TOKEN_KEY, accessToken)

      // if passing a user in params (on signup/signin when object is obtained alongside)
      if (user) {
        // setAuthData({ accessToken, user })
        setUser(user)
      } else {
        // if attempting to login with stored token, get user from server
        fetchUserInfoFromServer()

        // update state with result and up-to-date info from server
        if (userData) setUser(userData.me)
      }
    },
    [fetchUserInfoFromServer, setApolloHeaders, userData]
  )

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const accessToken = await AsyncStorage.getItem(AUTH_TOKEN_KEY)

      if (accessToken) authorizeWith({ accessToken })
    }

    loadStorageData()
  }, [authorizeWith])

  const signIn = async ({ email, password }: SignInCredentials) => {
    const { data } = await createSession({
      variables: { credentials: { email, password } }
    })

    data && authorizeWith(data.signin)
  }

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY)
    await getApolloClient().clearStore()
    getApolloClient().setLink(httpLink)

    setIsAuthorized(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        authorizeWith,
        updateUserInfo,
        isAuthorized
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
