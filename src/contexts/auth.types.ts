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
