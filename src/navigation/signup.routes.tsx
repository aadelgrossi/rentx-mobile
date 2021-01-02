import React from 'react'

import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'

import { SignUpProvider } from '~/contexts/signup_data'

import { SignUpRoutesParamList } from '../../types'
import { StepOne, StepTwo, Confirm } from '../screens/SignUp/'

const Stack = createStackNavigator<SignUpRoutesParamList>()

const SignUpNavigator: React.FC = () => {
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

export default SignUpNavigator
