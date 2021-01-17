import React from 'react'

import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'

import { SignUpProvider } from '~/contexts'
import { StepOne, StepTwo, Confirm } from '~/screens/SignUp'

import { SignUpRoutesParamList } from '../types'

const Stack = createStackNavigator<SignUpRoutesParamList>()

export const SignUpNavigator: React.FC = () => {
  return (
    <SignUpProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen name="SignUpStepOne" component={StepOne} />
        <Stack.Screen name="SignUpStepTwo" component={StepTwo} />
        <Stack.Screen name="SignUpConfirm" component={Confirm} />
      </Stack.Navigator>
    </SignUpProvider>
  )
}
