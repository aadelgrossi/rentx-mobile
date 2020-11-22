interface User {
  id: string
  name: string
  email: string
}

interface SignInCredentials {
  email: string
  password: string
}

interface AuthState {
  token: string
  user: User
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
  isAuthorized: boolean
}

export { AuthState, AuthContextData }
