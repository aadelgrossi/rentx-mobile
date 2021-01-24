import { NavigatorScreenParams } from '@react-navigation/native'

import { AuthState } from '~/contexts/auth.types'

export type InitialRoutesParamList = {
  Onboarding: undefined
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
  SelectDate: undefined
  Tabs: NavigatorScreenParams<TabRoutesParamList>
  ProfileNavigator: NavigatorScreenParams<ProfileParamList>
  CreateReservationNavigator: NavigatorScreenParams<ReservationParamList>
}

export type TabRoutesParamList = {
  Home: {
    startDate: string | null
    endDate: string | null
  }
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
  ChangePasswordConfirm: undefined
  UpdateConfirm: undefined
  SignOutPrompt: undefined
}
