import React, { useCallback } from 'react'

import { StackNavigationProp } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { Dimensions } from 'react-native'
import Onboard from 'react-native-onboarding-swiper'

import { NextButton } from '~/components'
import { InitialRoutesParamList } from '~/navigation/types'

import { pages } from './pages'

interface OnboardingNavigationProps {
  navigation: StackNavigationProp<InitialRoutesParamList, 'Onboarding'>
}

export const Onboarding: React.FC<OnboardingNavigationProps> = ({
  navigation
}) => {
  const handleDone = useCallback(async () => {
    navigation.navigate('Welcome')
  }, [navigation])

  return (
    <>
      <Onboard
        pages={pages}
        showSkip={false}
        controlStatusBar={false}
        bottomBarStyles={{
          width: Dimensions.get('screen').width,
          paddingHorizontal: 50
        }}
        bottomBarHighlight={false}
        bottomBarHeight={140}
        NextButtonComponent={NextButton}
        DoneButtonComponent={NextButton}
        onDone={handleDone}
      />
      <StatusBar style="dark" />
    </>
  )
}

export * from './SelectDate'
