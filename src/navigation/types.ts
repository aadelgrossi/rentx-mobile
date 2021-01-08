import { AuthState } from '~/contexts/auth.types'

export type InitialRoutesParamList = {
  Splash: undefined
  Welcome: undefined
  SignIn: undefined
  SignUp: undefined
}

export type SignUpRoutesParamList = {
  SignUpStepOne: undefined
  SignUpStepTwo: undefined
  SignUpConfirm: {
    authData: AuthState
  }
}

export type AppRoutesParamList = {
  Tabs: undefined
  ProfileNavigator: undefined
  CreateReservationNavigator: {
    car: Car
    startDate: string
    endDate: string
  }
}

export type TabRoutesParamList = {
  Home: undefined
  Cars: undefined
  Reservations: undefined
  Profile: undefined
}

export type ReservationParamList = {
  CarDetails: {
    car: Car
    startDate: string
    endDate: string
  }
  ConfirmReservation: undefined
}

export type ProfileParamList = {
  ProfileInfo: undefined
  ChangePassword: undefined
  UpdateConfirm: undefined
  SignOutPrompt: undefined
}
