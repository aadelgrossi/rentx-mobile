import React, { createContext, useCallback, useState } from 'react'

import { useMutation } from '@apollo/client'

import { SIGN_UP } from '~/graphql/auth'

import { AuthState } from './auth.types'
import { SignUpData, SignUpInfo } from './signup.types'

export interface SignUpContextData {
  signUpInfo: SignUpInfo
  setNameAndEmail(data: SignUpInfo): void
  signUp(data: SignUpData): Promise<AuthState | null>
}

export const SignUpContext = createContext<SignUpContextData>(
  {} as SignUpContextData
)

export const SignUpProvider: React.FC = ({ children }) => {
  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    name: '',
    email: ''
  })
  const [createAccount] = useMutation<
    { signup: AuthState },
    { signUpData: SignUpData }
  >(SIGN_UP)

  const setNameAndEmail = (data: SignUpInfo) => {
    setSignUpInfo(data)
  }

  const signUp = useCallback(async (signUpData: SignUpData) => {
    const { data } = await createAccount({
      variables: { signUpData }
    })

    if (data) {
      const { user, accessToken } = data.signup

      return { user, accessToken } as AuthState
    }

    return null
  }, [])

  return (
    <SignUpContext.Provider
      value={{
        signUpInfo,
        setNameAndEmail,
        signUp
      }}
    >
      {children}
    </SignUpContext.Provider>
  )
}
