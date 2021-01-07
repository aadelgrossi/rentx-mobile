import React, { createContext, useCallback, useState, useEffect } from 'react'

import { ApolloLink, useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getApolloClient, httpLink } from '~/config/apollo'

import { SIGN_IN } from '../graphql/auth'
import { AuthState, SignInCredentials } from './auth.types'

export interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  authorize(data: AuthState): void
  isAuthorized: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState)
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

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@RentX:token',
        '@RentX:user'
      ])

      if (token[1] && user[1]) {
        authorize({ accessToken: token[1], user: JSON.parse(user[1]) })
      }
    }

    loadStorageData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const authorize = useCallback(async (data: AuthState) => {
    setAuthData(data)
    await AsyncStorage.multiSet([
      ['@RentX:token', data.accessToken],
      ['@RentX:user', JSON.stringify(data.user)]
    ])

    setApolloHeaders(data.accessToken)
  }, [])

  const signIn = async ({ email, password }: SignInCredentials) => {
    const { data } = await createSession({
      variables: { credentials: { email, password } }
    })

    data && authorize(data.signin)
  }

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@RentX:token', '@RentX:user'])

    setAuthData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: authData.user,
        signIn,
        signOut,
        authorize,
        isAuthorized: !!authData.user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
