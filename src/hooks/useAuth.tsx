import { useContext } from 'react'

import { AuthContext } from '../contexts/auth'
import { AuthContextData } from '../contexts/auth.types'

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}
