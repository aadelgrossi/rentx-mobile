interface SignInCredentials {
  email: string
  password: string
}

interface AuthState {
  accessToken: string
  user: User
}

export { AuthState, SignInCredentials }
