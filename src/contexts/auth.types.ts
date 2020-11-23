interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  admin: boolean
  createdAt: string
  avatar: {
    id: string
    url: string
  }
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthState {
  accessToken: string
  user: User
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  isAuthorized: boolean
}

export { AuthState, AuthContextData, SignInCredentials }
