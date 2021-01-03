import React, { createContext, useCallback, useState, useEffect } from 'react'

import { useMutation } from '@apollo/client'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@RentX:token',
        '@RentX:user'
      ])

      console.log('token from local storage', { token })

      if (token[1] && user[1]) {
        authorize({ accessToken: token[1], user: JSON.parse(user[1]) })
      }
    }

    loadStorageData()
  }, [])

  const authorize = useCallback((data: AuthState) => {
    setAuthData(data)
  }, [])

  const signIn = async ({ email, password }: SignInCredentials) => {
    const { data } = await createSession({
      variables: { credentials: { email, password } }
    })

    if (data) {
      const { user, accessToken } = data.signin

      setAuthData({ user, accessToken })
      await AsyncStorage.multiSet([
        ['@RentX:token', accessToken],
        ['@RentX:user', JSON.stringify(user)]
      ])
    }
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
