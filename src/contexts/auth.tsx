import React, { createContext, useCallback, useState, useEffect } from 'react'

import AsyncStorage from '@react-native-community/async-storage'

import { AuthContextData, AuthState } from './auth.types'

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState)

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@RentX:token',
        '@RentX:user'
      ])

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) })
      }
    }

    loadStorageData()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    await AsyncStorage.multiSet([
      ['@RentX:token', 'authorized'],
      ['@RentX:user', JSON.stringify({ id: 1, name: 'John Doe' })]
    ])

    console.log(email, password)

    setData({ token: 'authorized', user: { id: '1', name: 'John Doe', email } })
  }, [])

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@RentX:token', '@RentX:user'])

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, isAuthorized: !!data.user }}
    >
      {children}
    </AuthContext.Provider>
  )
}
