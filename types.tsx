export type InitialRoutesParamList = {
  Splash: undefined
  Welcome: undefined
  SignIn: undefined
  SignUp: undefined
}

export type SignUpRoutesParamList = {
  SignUpStepOne: undefined
  SignUpStepTwo: undefined
  SignUpConfirm: undefined
}

export type AppRoutesParamList = {
  Home: undefined
  Cars: undefined
  Reservations: undefined
  Profile: undefined
}

export type ReservationParamList = {
  Listing: undefined
  CarDetails: {
    car: Car
    startDate: string
    endDate: string
  }
  ConfirmReservation: undefined
}

export type ProfileParamList = {
  Main: undefined
  ProfileInfo: undefined
  ChangePassword: undefined
  UpdateConfirm: undefined
  SignOutPrompt: undefined
}
