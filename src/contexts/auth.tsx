import React, { createContext, useCallback, useState, useEffect } from 'react'

import { ApolloLink, useLazyQuery, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getApolloClient, httpLink } from '~/config/apollo'
import { USER_INFO } from '~/graphql'

import { SIGN_IN } from '../graphql/auth'
import { AuthState, SignInCredentials } from './auth.types'

interface AuthorizationParams {
  accessToken: string
  user?: User
}

export interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  updateUserInfo(user: User): void
  authorizeWith(data: AuthorizationParams): void
  isAuthorized: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState)

  const [fetchUserInfoFromServer, { data: userData }] = useLazyQuery<{
    me: User
  }>(USER_INFO)

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

  const updateUserInfo = useCallback((user: User) => {
    setAuthData(prevState => ({ ...prevState, user }))
  }, [])

  const authorizeWith = useCallback(
    async ({ accessToken, user }: AuthorizationParams) => {
      // add token to Apollo headers
      setApolloHeaders(accessToken)
      await AsyncStorage.setItem('@RentX:token', accessToken)

      // if passing a user in params (on signup/signin when object is obtained alongside)
      if (user) {
        setAuthData({ accessToken, user })
      } else {
        // if attempting to login with stored token, get user from server
        fetchUserInfoFromServer()

        // update state with result and up-to-date info from server
        if (userData) setAuthData({ accessToken, user: userData.me })
      }
    },
    [userData, fetchUserInfoFromServer, setApolloHeaders]
  )

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const accessToken = await AsyncStorage.getItem('@RentX:token')

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
    await AsyncStorage.multiRemove(['@RentX:token', '@RentX:user'])
    await getApolloClient().clearStore()
    getApolloClient().setLink(httpLink)

    setAuthData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: authData.user,
        signIn,
        signOut,
        authorizeWith,
        updateUserInfo,
        isAuthorized: !!authData.user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
