import React from 'react'

import {
  CardStyleInterpolators,
  createStackNavigator
} from '@react-navigation/stack'

import { SignUpRoutesParamList } from '../../types'
import Confirm from '../screens/SignUp/Confirm'
import StepOne from '../screens/SignUp/StepOne'
import StepTwo from '../screens/SignUp/StepTwo'

const Stack = createStackNavigator<SignUpRoutesParamList>()

const SignUpNavigator: React.FC = () => {
  return (
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
  )
}

export default SignUpNavigator
