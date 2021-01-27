export interface UpdatePasswordFormData {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

export interface ChangeUserPasswordResult {
  changePassword: User
}

export interface ChangeUserPasswordVariables {
  data: {
    oldPassword: string
    newPassword: string
  }
}
