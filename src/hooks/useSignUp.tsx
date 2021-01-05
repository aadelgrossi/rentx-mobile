import { useContext } from 'react'

import { SignUpContext, SignUpContextData } from '../contexts/signup_data'

export function useSignUp(): SignUpContextData {
  const context = useContext(SignUpContext)

  if (!context) {
    throw new Error('useSignUp must be used within SignUpProvider')
  }

  return context
}
