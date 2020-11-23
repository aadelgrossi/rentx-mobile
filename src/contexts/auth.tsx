import React, { createContext, useCallback, useState, useEffect } from 'react'

import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-community/async-storage'

import { SIGN_IN } from '../graphql/auth'
import { AuthContextData, AuthState, SignInCredentials } from './auth.types'

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState)
  const [createSession, { data, error }] = useMutation<
    { signIn: AuthState },
    { credentials: SignInCredentials }
  >(SIGN_IN)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@RentX:token',
        '@RentX:user'
      ])

      if (token[1] && user[1]) {
        setAuthData({ accessToken: token[1], user: JSON.parse(user[1]) })
      }
    }

    loadStorageData()
  }, [])

  const signIn = useCallback(
    async ({ email, password }: SignInCredentials) => {
      await createSession({
        variables: { credentials: { email, password } }
      })

      if (data) {
        const { user, accessToken } = data.signIn

        setAuthData({ accessToken, user })
        await AsyncStorage.multiSet([
          ['@RentX:token', accessToken],
          ['@RentX:user', JSON.stringify(user)]
        ])
      }
    },
    [data, createSession]
  )

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
        isAuthorized: !!authData.user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
