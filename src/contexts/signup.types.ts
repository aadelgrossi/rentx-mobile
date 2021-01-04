interface SignUpInfo {
  name: string
  email: string
}

interface SignUpPassword {
  password: string
  password_confirmation: string
}

interface SignUpData
  extends SignUpInfo,
    Omit<SignUpPassword, 'password_confirmation'> {}

export { SignUpInfo, SignUpPassword, SignUpData }
