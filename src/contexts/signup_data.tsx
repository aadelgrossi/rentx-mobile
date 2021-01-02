import React, { createContext, useCallback, useState } from 'react'

export interface SignUpFormData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export interface SignUpContextData {
  signUpData: SignUpFormData
  setValues(data: SignUpFormData): void
  clearValues(): void
}

export const SignUpContext = createContext<SignUpContextData>(
  {} as SignUpContextData
)

export const SignUpProvider: React.FC = ({ children }) => {
  const [signUpData, setSignUpData] = useState<SignUpFormData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const setValues = (newData: SignUpFormData) => {
    setSignUpData({ ...signUpData, ...newData })
  }

  const clearValues = useCallback(() => {
    setSignUpData({} as SignUpFormData)
  }, [])

  return (
    <SignUpContext.Provider
      value={{
        signUpData,
        setValues,
        clearValues
      }}
    >
      {children}
    </SignUpContext.Provider>
  )
}
